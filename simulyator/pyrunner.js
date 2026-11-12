// Python muharriri uchun bajaruvchi: Pyodide (brauzerdagi Python) + robot moduli.
// Foydalanuvchi kodi ishga tushishdan oldin o'zgartiriladi (AST):
//   - wait(), robot.turn(), robot.move_for(), time.sleep() va o'z funksiyalari "await" bilan chaqiriladi;
//   - har bir qatordan oldin __line(n) qo'yiladi (qadam rejimi va joriy qatorni ko'rsatish uchun);
//   - har bir sikl boshida __tick() qo'yiladi, shunda cheksiz sikl brauzerni muzlatmaydi.

const PYODIDE_URL = 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/';

const ROBOT_PY = String.raw`
"""Simulyator roboti uchun Python moduli."""
import _sim


class PortError(Exception):
    pass


class Port:
    A = 'A'; B = 'B'; C = 'C'; D = 'D'
    S1 = '1'; S2 = '2'; S3 = '3'; S4 = '4'


class Color:
    BLACK = 'qora'; WHITE = 'oq'; RED = 'qizil'
    YELLOW = 'sariq'; GREEN = 'yashil'; BLUE = "ko'k"; NONE = 'kulrang'


def _check(kind, port):
    msg = _sim.portCheck(kind, str(port))
    if msg:
        raise PortError(msg)


class Robot:
    def __init__(self, left=Port.B, right=Port.C, gyro=None):
        if left != Port.B or right != Port.C:
            raise PortError("Simulyator robotida chap motor B portda, o'ng motor C portda: Robot(left=Port.B, right=Port.C)")
        if gyro is not None:
            _check('gyro', gyro)

    def steer(self, steering, power):
        _sim.steer(steering, power)

    def tank(self, left, right):
        _sim.tank(left, right)

    def stop(self):
        _sim.stop()

    async def move_for(self, steering, power, seconds=1):
        await _sim.moveFor(steering, power, seconds)

    async def turn(self, degrees):
        msg = _sim.gyroMissing()
        if msg:
            raise PortError(msg)
        await _sim.turn(degrees)


class ColorSensor:
    def __init__(self, port):
        _check('color', port)
        self.port = str(port)

    def reflection(self):
        _check('color', self.port)
        return _sim.reflected()

    def color(self):
        _check('color', self.port)
        return _sim.colorName()


class DistanceSensor:
    def __init__(self, port):
        _check('distance', port)
        self.port = str(port)

    def distance(self):
        _check('distance', self.port)
        return _sim.distance()


class GyroSensor:
    def __init__(self, port):
        _check('gyro', port)
        self.port = str(port)

    def angle(self):
        _check('gyro', self.port)
        return _sim.gyro()

    def reset_angle(self):
        _check('gyro', self.port)
        _sim.resetGyro()


class Motor:
    def __init__(self, port):
        if port not in (Port.B, Port.C):
            raise PortError("Simulyator robotida motorlar faqat B va C portlarda")
        self.port = port

    def angle(self):
        return _sim.motorAngle(self.port)

    def reset_angle(self):
        _sim.resetMotor(self.port)


class Timer:
    def __init__(self):
        self._t0 = _sim.time()

    def time(self):
        return round(_sim.time() - self._t0, 2)

    def reset(self):
        self._t0 = _sim.time()


class _Screen:
    def print(self, *args):
        _sim.print(' '.join(str(a) for a in args))

    def clear(self):
        _sim.clearScreen()


screen = _Screen()


async def wait(seconds):
    await _sim.wait(seconds)


__all__ = ['Robot', 'Port', 'Color', 'ColorSensor', 'DistanceSensor', 'GyroSensor',
           'Motor', 'Timer', 'screen', 'wait', 'PortError']
`;

const RUNNER_PY = String.raw`
import ast, traceback, sys, importlib
import _sim

class _Stopped(BaseException):
    pass

async def _line(n):
    if _sim.stopped():
        raise _Stopped()
    p = _sim.line(n)
    if p is not None:
        await p
        if _sim.stopped():
            raise _Stopped()

async def _tick():
    if _sim.stopped():
        raise _Stopped()
    p = _sim.tick()
    if p is not None:
        await p
        if _sim.stopped():
            raise _Stopped()

_BLOCKING_ATTRS = {'move_for', 'turn'}
_NO_LINES = (ast.ClassDef,)

class _Awaiter(ast.NodeTransformer):
    """Bloklovchi chaqiruvlarni await qiladi, funksiyalarni async qiladi."""
    def __init__(self, user_funcs):
        self.user_funcs = user_funcs
        self.in_class = 0

    def visit_ClassDef(self, node):
        self.in_class += 1
        self.generic_visit(node)
        self.in_class -= 1
        return node

    def visit_FunctionDef(self, node):
        self.generic_visit(node)
        if self.in_class:
            return node
        new = ast.AsyncFunctionDef(name=node.name, args=node.args, body=node.body,
                                   decorator_list=node.decorator_list, returns=node.returns,
                                   type_comment=getattr(node, 'type_comment', None))
        if hasattr(node, 'type_params'):
            new.type_params = node.type_params
        return ast.copy_location(new, node)

    def visit_Call(self, node):
        self.generic_visit(node)
        f = node.func
        if isinstance(f, ast.Attribute) and f.attr == 'sleep' and isinstance(f.value, ast.Name) and f.value.id == 'time':
            node = ast.copy_location(ast.Call(func=ast.Name('wait', ast.Load()), args=node.args, keywords=node.keywords), node)
            return ast.copy_location(ast.Await(node), node)
        if (isinstance(f, ast.Name) and (f.id == 'wait' or f.id in self.user_funcs)) or \
           (isinstance(f, ast.Attribute) and f.attr in _BLOCKING_ATTRS):
            return ast.copy_location(ast.Await(node), node)
        return node

def _call_stmt(fn, arg, lineno):
    args = [ast.Constant(arg)] if arg is not None else []
    st = ast.Expr(ast.Await(ast.Call(func=ast.Name(fn, ast.Load()), args=args, keywords=[])))
    for n in ast.walk(st):
        n.lineno = n.end_lineno = lineno
        n.col_offset = n.end_col_offset = 0
    return st

def _instrument(node, in_class=False):
    """Har bir qatordan oldin __line, har bir sikl boshida __tick qo'yadi."""
    for field in ('body', 'orelse', 'finalbody'):
        stmts = getattr(node, field, None)
        if not isinstance(stmts, list) or not stmts or not isinstance(stmts[0], ast.stmt):
            continue
        out = []
        # sinf ichida (metodlar oddiy funksiya bo'lib qoladi) await qo'yib bo'lmaydi
        if field == 'body' and not in_class and isinstance(node, (ast.While, ast.For, ast.AsyncFor)):
            out.append(_call_stmt('__tick', None, node.lineno))
        for s in stmts:
            if not in_class:
                out.append(_call_stmt('__line', s.lineno, s.lineno))
            out.append(s)
            _instrument(s, in_class or isinstance(s, ast.ClassDef))
        setattr(node, field, out)
    for h in getattr(node, 'handlers', []) or []:
        _instrument(h, in_class)

_UZ = {
    'NameError': "Nom topilmadi", 'TypeError': "Tur xatosi", 'ValueError': "Qiymat xatosi",
    'ZeroDivisionError': "Nolga bo'lish", 'AttributeError': "Atribut topilmadi",
    'IndexError': "Indeks chegaradan tashqarida", 'KeyError': "Kalit topilmadi",
    'PortError': "Port xatosi", 'RecursionError': "Juda chuqur rekursiya",
    'ModuleNotFoundError': "Modul topilmadi", 'ImportError': "Import xatosi",
}

import re as _re
_MSG = [
    (r"name '(.+)' is not defined", r"'\1' nomi aniqlanmagan (o'zgaruvchi yoki funksiya yaratilmagan)"),
    (r"expected ':'", "':' belgisi qo'yilmagan"),
    (r"invalid syntax", "noto'g'ri yozilgan"),
    (r"unexpected indent", "kutilmagan chekinish (ortiqcha bo'shliq)"),
    (r"expected an indented block.*", "bu yerda chekinishli (4 bo'shliq bilan) blok bo'lishi kerak"),
    (r"unindent does not match any outer indentation level", "chekinish yuqoridagi qatorlarga mos emas"),
    (r"unterminated string literal.*", "qo'shtirnoq yopilmagan"),
    (r"'(.+)' was never closed", r"'\1' qavs yopilmagan"),
    (r"division by zero", "nolga bo'lib bo'lmaydi"),
    (r"'(.+)' object has no attribute '(.+)'", r"'\1' obyektida '\2' degan narsa yo'q"),
    (r"module '(.+)' has no attribute '(.+)'", r"'\1' modulida '\2' yo'q"),
    (r"No module named '(.+)'", r"'\1' moduli topilmadi"),
    (r"unsupported operand type\(s\) for (.+): '(.+)' and '(.+)'", r"'\2' va '\3' turlari orasida \1 amalini bajarib bo'lmaydi"),
    (r"(.+)\(\) missing (\d+) required positional argument.*", r"\1() ga \2 ta qiymat yetishmayapti"),
    (r"(.+)\(\) takes (\d+) positional arguments? but (\d+) (were|was) given", r"\1() \2 ta qiymat oladi, lekin \3 ta berildi"),
    (r"list index out of range", "ro'yxatda bunday indeks yo'q"),
]

def _uz_msg(msg):
    for pat, rep in _MSG:
        m = _re.fullmatch(pat, msg)
        if m:
            return m.expand(rep)
    return msg

async def run_user(src):
    _sim.clearMark()
    try:
        tree = ast.parse(src, '<dastur>')
    except SyntaxError as e:
        kind = "Chekinish (otstup) xatosi" if isinstance(e, IndentationError) else "Sintaksis xatosi"
        return {'ok': False, 'line': e.lineno or 0, 'kind': kind, 'msg': _uz_msg(e.msg)}
    user_funcs = {n.name for n in ast.walk(tree) if isinstance(n, ast.FunctionDef)}
    tree = _Awaiter(user_funcs).visit(tree)
    _instrument(tree)
    ast.fix_missing_locations(tree)
    try:
        code = compile(tree, '<dastur>', 'exec', flags=ast.PyCF_ALLOW_TOP_LEVEL_AWAIT)
    except SyntaxError as e:
        msg = e.msg
        if 'await' in msg:
            msg = "wait()/turn()/move_for() ni sinf (class) metodlari ichida ishlatib bo'lmaydi; oddiy funksiya (def) ishlating"
        return {'ok': False, 'line': e.lineno or 0, 'kind': "Sintaksis xatosi", 'msg': _uz_msg(msg)}
    if 'robot' in sys.modules:
        importlib.reload(sys.modules['robot'])
    ns = {'__name__': '__main__', '__line': _line, '__tick': _tick}
    try:
        r = eval(code, ns)
        if r is not None:
            await r
        return {'ok': True}
    except _Stopped:
        return {'ok': True, 'stopped': True}
    except BaseException as e:
        if _sim.stopped():
            return {'ok': True, 'stopped': True}
        line = 0
        for fr in traceback.extract_tb(e.__traceback__):
            if fr.filename == '<dastur>':
                line = fr.lineno
        name = type(e).__name__
        return {'ok': False, 'line': line, 'kind': _UZ.get(name, name), 'type': name, 'msg': _uz_msg(str(e))}
`;

export function createPythonRunner(bridge, onStatus) {
  let ready = null;

  function load() {
    if (ready) return ready;
    ready = (async () => {
      onStatus('Python yuklanmoqda (faqat birinchi marta, ~10 MB)…');
      if (!window.loadPyodide) {
        await new Promise((res, rej) => {
          const s = document.createElement('script');
          s.src = PYODIDE_URL + 'pyodide.js';
          s.onload = res; s.onerror = () => rej(new Error('Pyodide yuklanmadi: internetni tekshiring'));
          document.head.appendChild(s);
        });
      }
      const py = await window.loadPyodide({ indexURL: PYODIDE_URL });
      py.setStdout({ batched: s => bridge.print(s) });
      py.setStderr({ batched: s => bridge.print(s) });
      py.registerJsModule('_sim', bridge);
      py.FS.writeFile('/home/pyodide/robot.py', ROBOT_PY);
      await py.runPythonAsync(RUNNER_PY);
      onStatus('');
      return py;
    })();
    ready.catch(() => { ready = null; });
    return ready;
  }

  async function run(src) {
    const py = await load();
    const fn = py.globals.get('run_user');
    const proxy = await fn(src);
    fn.destroy();
    const result = proxy.toJs({ dict_converter: Object.fromEntries });
    proxy.destroy?.();
    return result;
  }

  return { load, run, isLoaded: () => !!ready };
}
