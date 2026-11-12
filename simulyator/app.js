// Ilova: Blockly muharriri, maydon tanlash, dasturni bajarish, topshiriq tekshiruvi.
import { Sim } from './sim.js';
import { FIELDS } from './fields.js';
import { createPythonRunner } from './pyrunner.js';

const $ = id => document.getElementById(id);
const PROGRAM_KEY = id => `robot-sim-program-v3:${id}`;   // v3: sensor bloklarida port bor
const FIELD_KEY = 'robot-sim-field';
const PORTS_KEY = 'robot-sim-ports';
const SENSOR_NAME = { color: 'rang sensori', gyro: 'giroskop', distance: 'masofa sensori' };
const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
const store = {
  get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* jim */ } },
};

let field = FIELDS.find(f => f.id === store.get(FIELD_KEY)) || FIELDS.find(f => f.id === 'oval');

// ---------- Blockly ----------
const workspace = Blockly.inject('blockly', {
  toolbox: window.ROBOT_TOOLBOX,
  trashcan: true,
  zoom: { controls: true, wheel: true, startScale: 0.9 },
  grid: { spacing: 24, length: 2, colour: '#e3e7ec', snap: true },
  move: { scrollbars: true, drag: true, wheel: false },
});

let loading = false;
function loadState(state) {
  loading = true;
  try { Blockly.serialization.workspaces.load(state, workspace); }
  finally { loading = false; }
  renderPython();   // yuklash hodisalari kechikishi mumkin, shuning uchun darhol yangilanadi
  // Dastur toolbox ortida qolmasligi uchun ko'rinadigan joyga suriladi
  requestAnimationFrame(() => {
    const m = workspace.getMetrics();
    workspace.scroll(-m.contentLeft + 24, -m.contentTop + 24);
  });
}

function loadProgramFor(f) {
  let state = null;
  try { state = JSON.parse(store.get(PROGRAM_KEY(f.id)) || 'null'); } catch (e) { /* buzilgan */ }
  try { loadState(state || f.example); } catch (e) { loadState(f.example); }
}

function saveProgram() {
  store.set(PROGRAM_KEY(field.id), JSON.stringify(Blockly.serialization.workspaces.save(workspace)));
}

workspace.addChangeListener(e => { if (!e.isUiEvent && !loading) saveProgram(); });

// ---------- Python ko'rinishi (SIM-8) ----------
const EDITOR_MODE_KEY = 'robot-sim-editor-mode';
let pyText = '';
let pyTimer = null;
let gyroPort = () => '2';   // simulyator yuklangach haqiqiy ulanishdan olinadi
function renderPython() {
  pyText = window.robotToPython(workspace, { gyroPort: gyroPort() });
  const el = $('pycode');
  el.textContent = pyText;
  if (window.hljs) { el.removeAttribute('data-highlighted'); hljs.highlightElement(el); }
}
workspace.addChangeListener(e => {
  if (e.isUiEvent) return;
  clearTimeout(pyTimer);
  pyTimer = setTimeout(renderPython, 120);
});

// ---------- Python muharriri ----------
const PY_KEY = id => `robot-sim-python-v1:${id}`;
let pyRunner = null;           // Pyodide bajaruvchisi, simulyator yuklangach yaratiladi
let editorMode = 'blocks';
const cm = CodeMirror($('pyeditCm'), {
  mode: 'python', lineNumbers: true, indentUnit: 4, tabSize: 4, indentWithTabs: false,
  extraKeys: { Tab: c => c.replaceSelection('    '), 'Ctrl-Enter': () => runProgram(), 'Cmd-Enter': () => runProgram() },
});
let pyLoading = false;
let markedLine = null, errLine = null;

// Bloklardan olingan kod muharrirda tahrirlanadi: sarlavha izohini almashtiramiz
const editableHeader = code => code.replace(/^# Bu kod bloklardan avtomatik yaratilgan \(faqat o'qish uchun\)\./,
  "# Namuna kod: o'zgartiring va ▶ Ishga tushirish (yoki Ctrl+Enter) ni bosing.");
function pythonFromExample(f) {
  const ws = new Blockly.Workspace();
  try { Blockly.serialization.workspaces.load(f.example, ws); return editableHeader(window.robotToPython(ws, { gyroPort: gyroPort() })); }
  finally { ws.dispose(); }
}
function loadPyFor(f) {
  pyLoading = true;
  cm.setValue(store.get(PY_KEY(f.id)) ?? pythonFromExample(f));
  cm.clearHistory();
  pyLoading = false;
  clearPyMarks();
}
function savePy() { store.set(PY_KEY(field.id), cm.getValue()); }
cm.on('change', () => { if (!pyLoading) { savePy(); if (errLine != null) { cm.removeLineClass(errLine, 'background', 'cm-err-line'); errLine = null; } } });

function markLine(n, cls) {
  const line = n - 1;
  if (cls === 'cm-run-line') {
    if (markedLine === line) return;
    if (markedLine != null) cm.removeLineClass(markedLine, 'background', 'cm-run-line');
    markedLine = line;
  } else {
    if (errLine != null) cm.removeLineClass(errLine, 'background', 'cm-err-line');
    errLine = line;
  }
  if (line >= 0) { cm.addLineClass(line, 'background', cls); cm.scrollIntoView({ line, ch: 0 }, 60); }
}
function clearPyMarks() {
  if (markedLine != null) cm.removeLineClass(markedLine, 'background', 'cm-run-line');
  if (errLine != null) cm.removeLineClass(errLine, 'background', 'cm-err-line');
  markedLine = errLine = null;
}

$('btnPyFromBlocks').addEventListener('click', () => {
  if (cm.getValue().trim() && !confirm('Muharrirdagi kod joriy bloklardan yaratilgan kod bilan almashtiriladi. Davom etasizmi?')) return;
  cm.setValue(editableHeader(window.robotToPython(workspace, { gyroPort: gyroPort() })));
});

function setEditorMode(mode) {
  editorMode = mode;
  const ed = $('editor');
  ed.classList.remove('mode-blocks', 'mode-split', 'mode-python', 'mode-pyedit');
  ed.classList.add('mode-' + mode);
  document.querySelectorAll('.tab[data-mode]').forEach(t => t.classList.toggle('active', t.dataset.mode === mode));
  store.set(EDITOR_MODE_KEY, mode);
  const src = $('runSource');
  src.textContent = mode === 'pyedit' ? 'Python kodi' : 'bloklar';
  src.classList.toggle('py', mode === 'pyedit');
  if (mode === 'split' || mode === 'python') renderPython();
  if (mode === 'pyedit') { requestAnimationFrame(() => cm.refresh()); if (pyRunner) pyRunner.load().catch(() => {}); }
  if (mode === 'blocks' || mode === 'split') requestAnimationFrame(() => Blockly.svgResize(workspace));
}
document.querySelectorAll('.tab[data-mode]').forEach(t => t.addEventListener('click', () => setEditorMode(t.dataset.mode)));
$('btnCopyPy').addEventListener('click', async () => {
  const b = $('btnCopyPy');
  try { await navigator.clipboard.writeText(pyText); b.textContent = 'Nusxalandi ✓'; }
  catch (e) { b.textContent = 'Nusxalab bo\'lmadi'; }
  setTimeout(() => { b.textContent = 'Nusxa olish'; }, 1500);
});
loadPyFor(field);
setEditorMode(['blocks', 'split', 'python', 'pyedit'].includes(store.get(EDITOR_MODE_KEY)) ? store.get(EDITOR_MODE_KEY) : 'blocks');

// ---------- Simulyator ----------
const sim = new Sim($('three'));
await sim.init(field);
$('loading').remove();
loadProgramFor(field);

// ---------- Ulanishlar (qaysi portga qaysi sensor) ----------
try {
  const saved = JSON.parse(store.get(PORTS_KEY) || 'null');
  if (saved) sim.ports = { 1: null, 2: null, 3: null, 4: null, ...saved };
} catch (e) { /* odatiy sozlama */ }

const wiringSelects = [...document.querySelectorAll('.wiring select')];
for (const s of wiringSelects) {
  s.add(new Option('—', ''));
  for (const p of ['1', '2', '3', '4']) s.add(new Option(p, p));
}

function renderWiring() {
  for (const s of wiringSelects) s.value = sim.portOf(s.dataset.sensor) || '';
  document.querySelectorAll('[data-port-of]').forEach(td => {
    const p = sim.portOf(td.dataset.portOf);
    td.textContent = p || '—';
    td.classList.toggle('off', !p);
  });
}

for (const s of wiringSelects) s.addEventListener('change', () => {
  const type = s.dataset.sensor, port = s.value, old = sim.portOf(type);
  if (old) sim.ports[old] = null;
  if (port) {
    const other = sim.ports[port];
    sim.ports[port] = type;
    if (other && old) sim.ports[old] = other;    // band portdagi sensor bo'shagan portga o'tadi
  }
  store.set(PORTS_KEY, JSON.stringify(sim.ports));
  renderWiring();
  renderPython();
  s.blur();
});
renderWiring();
gyroPort = () => sim.portOf('gyro');

document.querySelectorAll('[data-cam]').forEach(b => b.addEventListener('click', () => {
  document.querySelectorAll('[data-cam]').forEach(x => x.classList.toggle('active', x === b));
  sim.setCamera(b.dataset.cam);
}));

// ---------- Maydon tanlash ----------
const select = $('fieldSelect');
for (const f of FIELDS) select.add(new Option(f.name, f.id));
select.value = field.id;

function switchField(id) {
  const next = FIELDS.find(f => f.id === id);
  if (!next || next === field) return;
  stopProgram('user');
  saveProgram();
  savePy();
  field = next;
  store.set(FIELD_KEY, field.id);
  sim.loadField(field);
  loadProgramFor(field);
  loadPyFor(field);
  resetAll();
}
select.addEventListener('change', () => { switchField(select.value); select.blur(); });

$('btnExample').addEventListener('click', () => {
  const py = editorMode === 'pyedit';
  if (!confirm(py ? 'Python muharriridagi kod shu maydonning namuna kodi bilan almashtiriladi. Davom etasizmi?'
                  : 'Joriy dastur shu maydonning namuna dasturi bilan almashtiriladi. Davom etasizmi?')) return;
  stopProgram('user');
  if (py) { cm.setValue(pythonFromExample(field)); return; }
  loadState(field.example);
  saveProgram();
});

// ---------- Topshiriq ----------
const task = { active: false, start: 0, progress: 0, done: false, stillSince: null };

function showTask() {
  const t = field.task;
  $('tTitle').textContent = t ? 'Topshiriq: ' + t.title : 'Erkin rejim';
  $('tText').textContent = t ? t.text : 'Bu maydonda topshiriq yo\'q: robotni bloklar yoki W A S D bilan sinab ko\'ring.';
  $('tProgWrap').style.display = t && t.type !== 'stopInZone' ? '' : 'none';
  $('tProgLabel').textContent = t && t.type === 'boxes' ? 'Yuklar' : 'Nuqtalar';
}

function totalFor(t) { return t.type === 'checkpoints' ? t.points.length : t.type === 'boxes' ? t.count : 1; }

function resetTask() {
  Object.assign(task, { active: false, start: 0, progress: 0, done: false, stillSince: null });
  showTask();
  setStatus('Tayyor', '');
}

function setStatus(text, cls) {
  const el = $('tStatus');
  el.textContent = text;
  el.className = 'status' + (cls ? ' ' + cls : '');
}

const inZone = (p, z) => p.x >= z.x0 && p.x <= z.x1 && p.z >= z.z0 && p.z <= z.z1;

function finish(ok, text) {
  task.done = true;
  setStatus(text, ok ? 'ok' : 'bad');
  stopProgram(ok ? 'done' : 'timeout');
}

sim.listeners.push(() => {
  const t = field.task;
  if (!t || !task.active || task.done) return;
  const elapsed = sim.time - task.start;

  if (t.type === 'checkpoints') {
    const p = sim.position(), cp = t.points[task.progress];
    if (cp && Math.hypot(p.x - cp.x, p.z - cp.z) < t.radius) {
      sim.setCheckpointDone(task.progress, true);
      task.progress++;
      if (task.progress === t.points.length) return finish(true, `Topshiriq bajarildi! Vaqt: ${elapsed.toFixed(1)} s`);
    }
  } else if (t.type === 'boxes') {
    task.progress = sim.boxPositions().filter(p => inZone(p, t.zone)).length;
    if (task.progress >= t.count) return finish(true, `Barcha yuklar bazada! Vaqt: ${elapsed.toFixed(1)} s`);
  } else if (t.type === 'stopInZone') {
    const still = sim.speed() < 0.01 && inZone(sim.sensorPoint(), t.zone);
    if (!still) task.stillSince = null;
    else if (task.stillSince == null) task.stillSince = sim.time;
    else if (sim.time - task.stillSince >= 1) return finish(true, `Qizil rangda to'xtadi! Vaqt: ${elapsed.toFixed(1)} s`);
  }

  if (elapsed > t.limit) {
    const extra = t.type === 'boxes' ? ` (bazada ${task.progress}/${t.count} ta yuk)` : '';
    finish(false, `Vaqt tugadi: ${t.limit} s ichida bajarilmadi${extra}`);
  }
});

// ---------- Dasturni bajarish ----------
const STOP = Symbol('stop');
let run = null;   // { stopped, t0 }

class PortError extends Error {
  constructor(message, blockId) { super(message); this.blockId = blockId; }
}

function portMessage(type, port, inPython = false) {
  const actual = sim.ports[port], where = sim.portOf(type), name = SENSOR_NAME[type];
  let msg = actual ? `${port}-portda ${SENSOR_NAME[actual]} ulangan, ${name} emas.` : `${port}-portga hech narsa ulanmagan.`;
  msg += where
    ? (inPython ? ` ${cap(name)} ${where}-portda: koddagi portni Port.S${where} ga o'zgartiring.`
                : ` ${cap(name)} ${where}-portda: blokdagi portni ${where} ga o'zgartiring.`)
    : ` ${cap(name)} robotga ulanmagan: uni "Ulanishlar" bo'limida biror portga ulang.`;
  return msg;
}

// ---------- Qadam-baqadam rejim ----------
let stepMode = false;
let stepResolve = null;

function releaseStep() { if (stepResolve) { const r = stepResolve; stepResolve = null; r(); } }

$('stepMode').addEventListener('change', e => {
  stepMode = e.target.checked;
  e.target.blur();
  if (!stepMode) releaseStep();          // rejim o'chirilsa dastur oddiy davom etadi
});
$('btnStep').addEventListener('click', releaseStep);
addEventListener('keydown', e => {      // N tugmasi — keyingi qadam
  if (e.key.toLowerCase() === 'n' && stepResolve && !typing()) { e.preventDefault(); releaseStep(); }
});

function screenPrint(text) {
  const el = $('screen');
  el.textContent += text + '\n';
  el.scrollTop = el.scrollHeight;
}

function nextFrame() { return new Promise(r => requestAnimationFrame(() => r())); }

function makeApi(ctx) {
  const check = () => { if (ctx.stopped) throw STOP; };
  const clamp = v => Math.max(-100, Math.min(100, Number(v) || 0));
  const api = {
    async hl(id) {
      check();
      ctx.blockId = id;
      workspace.highlightBlock(id);
      if (!stepMode) return;
      sim.paused = true;
      $('btnStep').disabled = false;
      setStatus('Qadam rejimi: yoritilgan blok bajarilishini kutmoqda. "Keyingi qadam" yoki N tugmasini bosing', 'step');
      await new Promise(r => { stepResolve = r; });
      $('btnStep').disabled = true;
      sim.paused = false;
      check();
      setStatus(stepMode ? 'Bajarilmoqda (qadam rejimi)…' : 'Dastur ishlayapti…', '');
    },
    read(type, port, blockId) {
      check();
      if (sim.ports[port] !== type) throw new PortError(portMessage(type, port), blockId);
      return sim.sensors;
    },
    async tick() { await nextFrame(); check(); },
    async wait(s) {
      const until = sim.time + Math.max(0, Number(s) || 0);
      while (sim.time < until) await api.tick();
    },
    steer(steer, power) {
      const s = clamp(steer), p = clamp(power);
      // EV3 "Move Steering" qoidasi: ±50 da bitta g'ildirak to'xtaydi, ±100 da joyida buriladi
      let l = p, r = p;
      if (s > 0) r = p * (1 - s / 50); else if (s < 0) l = p * (1 + s / 50);
      sim.motor.B = l; sim.motor.C = r;
    },
    tank(l, r) { sim.motor.B = clamp(l); sim.motor.C = clamp(r); },
    async moveFor(steer, power, secs) { api.steer(steer, power); await api.wait(secs); api.stop(); },
    // Giroskop bo'yicha joyida burilish: musbat — o'ngga (soat strelkasi bo'yicha)
    async turn(deg) {
      if (!sim.portOf('gyro')) throw new PortError('Burilish bloki giroskopdan foydalanadi, lekin giroskop robotga ulanmagan: uni "Ulanishlar" bo\'limida biror portga ulang.', ctx.blockId);
      const target = sim.gyroAngle + (Number(deg) || 0);
      const t0 = sim.time;
      for (;;) {
        const err = target - sim.gyroAngle;
        if (Math.abs(err) < 1 || sim.time - t0 > 10) break;
        const p = Math.sign(err) * Math.min(30, Math.max(6, Math.abs(err) * 0.6));
        sim.motor.B = p; sim.motor.C = -p;
        await api.tick();
      }
      api.stop();
      await api.wait(0.15);
    },
    stop() { sim.motor.B = 0; sim.motor.C = 0; },
    s() { return sim.sensors; },
    resetGyro() { sim.resetGyro(); },
    resetMotors() { sim.resetMotors(); },
    timer() { return Math.round((sim.time - ctx.t0) * 100) / 100; },
    print(v) { screenPrint(String(v)); },
  };
  return api;
}

function buildCode() {
  const gen = javascript.javascriptGenerator;
  const starts = workspace.getTopBlocks(true).filter(b => b.type === 'robot_start' && b.isEnabled());
  if (starts.length === 0) throw new Error('"▶ Dastur boshlanganda" bloki topilmadi. Uni "Boshqaruv" bo\'limidan qo\'shing.');
  if (starts.length > 1) throw new Error('"▶ Dastur boshlanganda" bloki faqat bitta bo\'lishi kerak.');
  gen.init(workspace);
  const body = gen.blockToCode(starts[0]);
  return gen.finish(body);
}

async function runProgram() {
  if (run) return;
  if (editorMode === 'pyedit') return runPython();
  let code;
  try { code = buildCode(); }
  catch (e) { setStatus(e.message, 'bad'); return; }

  resetAll();
  for (const b of workspace.getAllBlocks(false)) b.setWarningText(null);
  const ctx = { stopped: false, t0: sim.time, blockId: null };
  run = ctx;
  task.active = !!field.task; task.start = sim.time;
  setStatus('Dastur ishlayapti…', '');
  setButtons(true);

  const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
  try {
    const fn = new AsyncFunction('api', code);
    await fn(makeApi(ctx));
    if (!task.done && !ctx.stopped) setStatus(field.task ? 'Dastur tugadi, topshiriq tekshirilmoqda…' : 'Dastur tugadi', '');
  } catch (e) {
    if (e instanceof PortError) {
      task.active = false;
      setStatus('Port xatosi: ' + e.message, 'bad');
      screenPrint('PORT XATOSI');
      const blk = e.blockId && workspace.getBlockById(e.blockId);
      if (blk) { blk.setWarningText(e.message); blk.select(); workspace.centerOnBlock(blk.id); }
    } else if (e !== STOP) { console.error(e); setStatus('Dasturda xato: ' + e.message, 'bad'); }
  } finally {
    sim.paused = false;
    stepResolve = null;
    $('btnStep').disabled = true;
    sim.motor.B = sim.motor.C = 0;
    workspace.highlightBlock(null);
    if (run === ctx) run = null;
    setButtons(false);
  }
}

// ---------- Python kodini bajarish ----------
const pyCtx = { current: null, api: null, lastYield: 0 };
const wrapStop = fn => (...a) => {
  try {
    const r = fn(...a);
    return r && typeof r.then === 'function' ? r.catch(e => { throw e === STOP ? new Error('__STOP__') : e; }) : r;
  } catch (e) { throw e === STOP ? new Error('__STOP__') : e; }
};
const A = () => pyCtx.api;
const pyBridge = {
  portCheck: (type, port) => (sim.ports[port] === type ? '' : portMessage(type, port, true)),
  gyroMissing: () => (sim.portOf('gyro') ? '' : 'Burilish (robot.turn) giroskopdan foydalanadi, lekin giroskop robotga ulanmagan: uni "Ulanishlar" bo\'limida biror portga ulang.'),
  steer: wrapStop((s, p) => A().steer(s, p)),
  tank: wrapStop((l, r) => A().tank(l, r)),
  stop: wrapStop(() => A().stop()),
  moveFor: wrapStop((s, p, t) => A().moveFor(s, p, t)),
  turn: wrapStop(d => A().turn(d)),
  wait: wrapStop(s => A().wait(s)),
  reflected: () => sim.sensors.reflected,
  colorName: () => sim.sensors.color,
  distance: () => sim.sensors.distance,
  gyro: () => sim.sensors.gyro,
  resetGyro: () => sim.resetGyro(),
  motorAngle: p => (p === 'B' ? sim.sensors.motorB : sim.sensors.motorC),
  resetMotor: p => { sim.enc[p] = 0; },
  time: () => sim.time,
  print: s => screenPrint(String(s).replace(/\n$/, '')),
  clearScreen: () => { $('screen').textContent = ''; },
  stopped: () => !pyCtx.current || pyCtx.current.stopped,
  clearMark: () => clearPyMarks(),
  // Har qator oldidan: joriy qatorni belgilaydi; qadam rejimida tugma bosilishini kutadi
  line: n => {
    pyCtx.current.line = n;
    markLine(n, 'cm-run-line');
    if (!stepMode) return undefined;
    sim.paused = true;
    $('btnStep').disabled = false;
    setStatus(`Qadam rejimi: ${n}-qator bajarilishini kutmoqda. "Keyingi qadam" yoki N tugmasini bosing`, 'step');
    return new Promise(r => { stepResolve = r; }).then(() => {
      $('btnStep').disabled = true;
      sim.paused = false;
      if (pyCtx.current && !pyCtx.current.stopped) setStatus(stepMode ? 'Bajarilmoqda (qadam rejimi)…' : 'Python kodi ishlayapti…', '');
    });
  },
  // Sikl boshida: har ~8 ms da bir kadr kutadi, shunda sahifa muzlamaydi va sensorlar yangilanadi
  tick: () => {
    const now = performance.now();
    if (now - pyCtx.lastYield < 8) return undefined;
    return new Promise(r => requestAnimationFrame(() => { pyCtx.lastYield = performance.now(); r(); }));
  },
};

function setPyStatus(t) { $('pyStatus').textContent = t; }
pyRunner = createPythonRunner(pyBridge, setPyStatus);
if (editorMode === 'pyedit') pyRunner.load().catch(e => setPyStatus(e.message));

async function runPython() {
  const src = cm.getValue();
  clearPyMarks();
  setButtons(true);
  if (!pyRunner.isLoaded()) setStatus('Python yuklanmoqda…', '');
  try { await pyRunner.load(); }
  catch (e) { setButtons(false); setStatus(e.message, 'bad'); return; }

  resetAll();
  const ctx = { stopped: false, t0: sim.time, blockId: null, line: 0 };
  run = ctx;
  pyCtx.current = ctx;
  pyCtx.api = makeApi(ctx);
  pyCtx.lastYield = performance.now();
  task.active = !!field.task; task.start = sim.time;
  setStatus('Python kodi ishlayapti…', '');
  setButtons(true);
  try {
    const r = await pyRunner.run(src);
    if (!r.ok) {
      task.active = false;
      const where = r.line ? `${r.line}-qatorda` : '';
      setStatus(`${r.kind} ${where}: ${r.msg}`, 'bad');
      if (r.type === 'PortError') screenPrint('PORT XATOSI');
      if (r.line) markLine(r.line, 'cm-err-line');
    } else if (!r.stopped && !task.done && !ctx.stopped) {
      setStatus(field.task ? 'Dastur tugadi, topshiriq tekshirilmoqda…' : 'Dastur tugadi', '');
    }
  } catch (e) {
    console.error(e);
    setStatus('Python xatosi: ' + e.message, 'bad');
  } finally {
    if (markedLine != null) { cm.removeLineClass(markedLine, 'background', 'cm-run-line'); markedLine = null; }
    sim.paused = false;
    stepResolve = null;
    $('btnStep').disabled = true;
    sim.motor.B = sim.motor.C = 0;
    pyCtx.current = null;
    if (run === ctx) run = null;
    setButtons(false);
  }
}

function stopProgram(reason) {
  if (reason === 'user' && task.active && !task.done) { task.active = false; setStatus('To\'xtatildi', ''); }
  if (!run) return;
  run.stopped = true;
  sim.motor.B = sim.motor.C = 0;
  releaseStep();                          // qadam kutayotgan bo'lsa, to'xtash uchun bo'shatiladi
}

function resetAll() {
  sim.reset();
  resetTask();
  $('screen').textContent = '';
}

function setButtons(running) {
  $('btnRun').disabled = running;
  $('btnStop').disabled = !running;
  for (const s of wiringSelects) s.disabled = running;   // dastur ishlayotganda simlar o'zgarmaydi
}

$('btnRun').addEventListener('click', runProgram);
$('btnStop').addEventListener('click', () => stopProgram('user'));
$('btnReset').addEventListener('click', () => { stopProgram('user'); resetAll(); });

// ---------- WASD bilan qo'lda boshqarish ----------
const keys = new Set();
const typing = () => { const a = document.activeElement; return a && (a.tagName === 'INPUT' || a.tagName === 'TEXTAREA' || a.tagName === 'SELECT' || a.isContentEditable); };
addEventListener('keydown', e => { if (!typing()) keys.add(e.key.toLowerCase()); });
addEventListener('keyup', e => keys.delete(e.key.toLowerCase()));
addEventListener('blur', () => keys.clear());
let manual = false;
sim.listeners.push(() => {
  if (run) { manual = false; return; }
  const f = (keys.has('w') ? 1 : 0) - (keys.has('s') ? 1 : 0);
  const t = (keys.has('d') ? 1 : 0) - (keys.has('a') ? 1 : 0);
  if (f === 0 && t === 0) {
    if (manual) { sim.motor.B = sim.motor.C = 0; manual = false; }
    return;
  }
  manual = true;
  sim.motor.B = f * 60 + t * 40;
  sim.motor.C = f * 60 - t * 40;
});

// ---------- Panel yangilanishi ----------
function updatePanel() {
  const s = sim.sensors;
  $('sRefl').textContent = s.reflected;
  $('sColor').textContent = s.color;
  $('sDist').textContent = s.distance >= 255 ? '255' : s.distance.toFixed(1);
  $('sGyro').textContent = s.gyro;
  $('sMB').textContent = s.motorB;
  $('sMC').textContent = s.motorC;
  if (task.active && !task.done) $('tTime').textContent = (sim.time - task.start).toFixed(1);
  else if (!task.active) $('tTime').textContent = '0.0';
  if (field.task) $('tProg').textContent = `${task.progress}/${totalFor(field.task)}`;
  requestAnimationFrame(updatePanel);
}
resetTask();
updatePanel();

// Sinov va xatolarni tekshirish uchun
window.__sim = { sim, workspace, runProgram, stopProgram, switchField, task, FIELDS, loadExample: () => { loadState(field.example); saveProgram(); } };
