// Maydonlar: rasm, devorlar, yuklar, start joyi, topshiriq va namuna dastur.
// Koordinatalar metrda: X chapdan o'ngga (−1…1), Z yuqoridan pastga (−0.7…0.7).

export const PX = 1000;           // maydon rasmi: 1 px = 1 mm
export const LINE_W = 0.025;      // qora chiziq eni

// ---------- Chizish yordamchilari ----------
function roundedRectTrack(g, X, Z, { x0, x1, z0, z1, r }) {
  g.beginPath();
  g.moveTo(X(x0 + r), Z(z0));
  g.lineTo(X(x1 - r), Z(z0)); g.arc(X(x1 - r), Z(z0 + r), r * PX, -Math.PI / 2, 0);
  g.lineTo(X(x1), Z(z1 - r)); g.arc(X(x1 - r), Z(z1 - r), r * PX, 0, Math.PI / 2);
  g.lineTo(X(x0 + r), Z(z1)); g.arc(X(x0 + r), Z(z1 - r), r * PX, Math.PI / 2, Math.PI);
  g.lineTo(X(x0), Z(z0 + r)); g.arc(X(x0 + r), Z(z0 + r), r * PX, Math.PI, Math.PI * 1.5);
  g.closePath(); g.stroke();
}

// Burchaklari r radiusda yumaloqlangan yopiq ko'pburchak
function roundedPolygon(g, X, Z, pts, r) {
  const n = pts.length;
  const m = [(pts[0][0] + pts[1][0]) / 2, (pts[0][1] + pts[1][1]) / 2];
  g.beginPath();
  g.moveTo(X(m[0]), Z(m[1]));
  for (let k = 1; k <= n; k++) {
    const p = pts[k % n], q = pts[(k + 1) % n];
    g.arcTo(X(p[0]), Z(p[1]), X(q[0]), Z(q[1]), r * PX);
  }
  g.closePath(); g.stroke();
}

function blackLine(g) { g.strokeStyle = '#111111'; g.lineWidth = LINE_W * PX; g.lineJoin = 'round'; g.lineCap = 'round'; }

function zone(g, X, Z, z, color, label) {
  g.fillStyle = color;
  g.fillRect(X(z.x0), Z(z.z0), (z.x1 - z.x0) * PX, (z.z1 - z.z0) * PX);
  if (label) {
    g.fillStyle = '#ffffff'; g.font = 'bold 34px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillText(label, X((z.x0 + z.x1) / 2), Z((z.z0 + z.z1) / 2));
  }
}

function startMark(g, X, Z, x, z) {
  g.fillStyle = '#2da44e';
  g.fillRect(X(x - 0.06), Z(z), 0.12 * PX, 0.045 * PX);
  g.fillStyle = '#ffffff'; g.font = 'bold 28px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText('START', X(x), Z(z + 0.0225));
}

// ---------- Namuna dasturlar uchun Blockly JSON yordamchilari ----------
const num = v => ({ shadow: { type: 'math_number', fields: { NUM: v } } });
const blk = (type, extra = {}) => ({ type, ...extra });
function chain(list) {
  for (let i = list.length - 2; i >= 0; i--) list[i].next = { block: list[i + 1] };
  return list[0];
}
const followLine = power => blk('robot_move_steering', { inputs: {
  STEER: { block: blk('math_arithmetic', { fields: { OP: 'MULTIPLY' }, inputs: {
    A: { block: blk('math_arithmetic', { fields: { OP: 'MINUS' }, inputs: { A: num(50), B: { block: blk('sensor_reflected', { fields: { PORT: '3' } }) } } }) },
    B: num(1.2),
  } }) },
  POWER: num(power),
} });
const print = text => blk('screen_print', { inputs: { TEXT: { shadow: { type: 'text', fields: { TEXT: text } } } } });
const program = (...body) => ({ blocks: { languageVersion: 0, blocks: [{ ...blk('robot_start'), x: 30, y: 30, next: { block: chain(body) } }] } });
const forever = (...body) => blk('robot_forever', { inputs: { DO: { block: chain(body) } } });
const steer = (s, p) => blk('robot_move_steering', { inputs: { STEER: num(s), POWER: num(p) } });
const moveFor = (s, p, t) => blk('robot_move_for', { inputs: { STEER: num(s), POWER: num(p), SECS: num(t) } });
const turn = d => blk('robot_turn', { inputs: { DEG: num(d) } });
const stop = () => blk('robot_stop');
const untilDistance = cm => blk('robot_wait_until', { inputs: { COND: { block: blk('logic_compare', { fields: { OP: 'LT' }, inputs: {
  A: { block: blk('sensor_distance', { fields: { PORT: '4' } }) }, B: num(cm) } }) } } });

const lineFollowProgram = program(print('Chiziq bo\'ylab yuraman'), forever(followLine(35)));

// ---------- Maydonlar ----------
const OVAL = { x0: -0.7, x1: 0.7, z0: -0.4, z1: 0.4, r: 0.3 };
const COMPLEX = [[-0.75, 0.45], [0.05, 0.45], [0.3, 0.25], [0.55, 0.45], [0.8, 0.45], [0.8, -0.05], [0.4, -0.05], [0.4, -0.45], [-0.8, -0.45], [-0.8, 0.1]];
const SQUARE = { x0: -0.25, x1: 0.25, z0: -0.25, z1: 0.25 };
const BASE = { x0: -0.97, x1: -0.62, z0: -0.3, z1: 0.3 };
const FINISH = { x0: 0.62, x1: 0.97, z0: -0.67, z1: -0.33 };
const COLOR_PATCHES = [['#f2c200', -0.4], ['#2da44e', -0.05], ['#1f6feb', 0.3], ['#d1242f', 0.62]];
// Rang belgilari chiziqning o'ng chetiga yopishgan (sensor shu chetdan yuradi)
const PATCH_Z0 = LINE_W / 2, PATCH_Z1 = 0.075;
const RED = { x0: 0.59, x1: 0.65, z0: 0, z1: PATCH_Z1 };

export const FIELDS = [
  {
    id: 'free', name: 'Bo\'sh maydon',
    start: { x: 0, z: 0.3, yaw: 0 },
    boxes: [{ x: 0.5, z: -0.3 }, { x: -0.5, z: -0.3 }],
    draw(g, X, Z) {
      g.fillStyle = '#8b96a3'; g.font = '22px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'top';
      for (let x = -0.8; x <= 0.81; x += 0.2) g.fillText(`${Math.round(x * 100)}`, X(x), Z(-0.68));
    },
    task: null,
    example: program(print('Erkin rejim'), moveFor(0, 50, 2), turn(90), moveFor(0, 50, 2), stop()),
  },
  {
    id: 'oval', name: 'Chiziq: oddiy aylana',
    start: { x: -0.3, z: OVAL.z1 + LINE_W / 2, yaw: 0 },
    draw(g, X, Z) {
      blackLine(g); roundedRectTrack(g, X, Z, OVAL);
      startMark(g, X, Z, -0.3, OVAL.z1 + 0.09);
      const patches = [['#d1242f', -0.25], ['#f2c200', -0.08], ['#2da44e', 0.08], ['#1f6feb', 0.25]];
      for (const [col, x] of patches) zone(g, X, Z, { x0: x - 0.05, x1: x + 0.05, z0: -0.05, z1: 0.05 }, col);
    },
    task: {
      type: 'checkpoints', limit: 90, radius: 0.1,
      title: 'Chiziq bo\'ylab bir aylana',
      text: 'Robot qora chiziq bo\'ylab yurib, 4 ta nazorat nuqtasidan o\'tib, startga 90 soniyada qaytishi kerak.',
      points: [{ x: OVAL.x1, z: 0 }, { x: 0, z: OVAL.z0 }, { x: OVAL.x0, z: 0 }, { x: -0.3, z: OVAL.z1 + LINE_W / 2 }],
    },
    example: lineFollowProgram,
  },
  {
    id: 'complex', name: 'Chiziq: murakkab trassa',
    start: { x: -0.35, z: 0.45 + LINE_W / 2, yaw: 0 },
    draw(g, X, Z) {
      blackLine(g); roundedPolygon(g, X, Z, COMPLEX, 0.1);
      startMark(g, X, Z, -0.35, 0.53);
    },
    task: {
      type: 'checkpoints', limit: 120, radius: 0.1,
      title: 'Murakkab trassa',
      text: 'Trassada chapga va o\'ngga keskin burilishlar bor. Robot 4 ta nazorat nuqtasidan o\'tib, startga 120 soniyada qaytishi kerak.',
      points: [{ x: 0.8, z: 0.2 }, { x: 0.4, z: -0.25 }, { x: -0.2, z: -0.45 }, { x: -0.35, z: 0.45 + LINE_W / 2 }],
    },
    example: program(print('Murakkab trassa'), forever(followLine(30))),
  },
  {
    id: 'maze', name: 'Labirint',
    start: { x: -0.8, z: 0.45, yaw: 0 },
    walls: [
      { x: -0.2, z: 0.2, hx: 0.8, hz: 0.01 },
      { x: 0.2, z: -0.25, hx: 0.8, hz: 0.01 },
    ],
    draw(g, X, Z) {
      zone(g, X, Z, FINISH, '#2da44e', 'MARRA');
      startMark(g, X, Z, -0.8, 0.6);
    },
    task: {
      type: 'checkpoints', limit: 120, radius: 0.15,
      title: 'Labirintdan chiqish',
      text: 'Masofa sensori va giroskop yordamida devorlarga urilmasdan yashil MARRA zonasiga yetib boring (120 soniya).',
      points: [{ x: 0.8, z: 0.45 }, { x: -0.8, z: -0.02 }, { x: 0.8, z: -0.5 }],
    },
    example: program(print('Labirint'),
      steer(0, 40), untilDistance(12), stop(), turn(-90),
      steer(0, 40), untilDistance(12), stop(), turn(-90),
      steer(0, 40), untilDistance(12), stop(), turn(90),
      steer(0, 40), untilDistance(12), stop(), turn(90),
      steer(0, 40), untilDistance(12), stop(), print('Marra!')),
  },
  {
    id: 'square', name: 'Kvadrat chizish',
    start: { x: SQUARE.x0, z: SQUARE.z1, yaw: 0 },
    draw(g, X, Z) {
      g.strokeStyle = '#c4cbd3'; g.lineWidth = 6; g.setLineDash([24, 16]);
      g.strokeRect(X(SQUARE.x0), Z(SQUARE.z0), (SQUARE.x1 - SQUARE.x0) * PX, (SQUARE.z1 - SQUARE.z0) * PX);
      g.setLineDash([]);
      const corners = [[SQUARE.x1, SQUARE.z1, '1'], [SQUARE.x1, SQUARE.z0, '2'], [SQUARE.x0, SQUARE.z0, '3'], [SQUARE.x0, SQUARE.z1, '4']];
      g.font = 'bold 30px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
      for (const [x, z, t] of corners) {
        g.fillStyle = '#d0d7de'; g.beginPath(); g.arc(X(x), Z(z), 30, 0, Math.PI * 2); g.fill();
        g.fillStyle = '#57606a'; g.fillText(t, X(x), Z(z));
      }
      g.fillStyle = '#57606a'; g.font = '24px sans-serif';
      g.fillText('tomoni 50 sm', X(0), Z(SQUARE.z1 + 0.06));
    },
    task: {
      type: 'checkpoints', limit: 60, radius: 0.1,
      title: 'Kvadrat chizish',
      text: 'Robot tomoni 50 sm bo\'lgan kvadrat bo\'ylab 1→2→3→4 burchaklardan o\'tib, startga 60 soniyada qaytishi kerak.',
      points: [{ x: SQUARE.x1, z: SQUARE.z1 }, { x: SQUARE.x1, z: SQUARE.z0 }, { x: SQUARE.x0, z: SQUARE.z0 }, { x: SQUARE.x0, z: SQUARE.z1 }],
    },
    example: program(print('Kvadrat'), blk('controls_repeat_ext', { inputs: { TIMES: num(4), DO: { block: chain([moveFor(0, 40, 3.2), turn(-90)]) } } })),
  },
  {
    id: 'cargo', name: 'Musobaqa: yuk tashish (FLL uslubida)',
    start: { x: 0.75, z: 0, yaw: Math.PI },
    boxes: [{ x: 0.1, z: 0 }, { x: 0.3, z: -0.4 }, { x: 0.3, z: 0.4 }],
    draw(g, X, Z) {
      zone(g, X, Z, BASE, '#1f6feb', 'BAZA');
      g.strokeStyle = '#f2c200'; g.lineWidth = 4;
      for (const b of [[0.1, 0], [0.3, -0.4], [0.3, 0.4]]) g.strokeRect(X(b[0] - 0.05), Z(b[1] - 0.05), 100, 100);
      g.save(); g.translate(X(0.88), Z(0)); g.rotate(-Math.PI / 2);
      g.fillStyle = '#2da44e'; g.fillRect(-60, -22, 120, 45);
      g.fillStyle = '#fff'; g.font = 'bold 28px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('START', 0, 0);
      g.restore();
    },
    task: {
      type: 'boxes', limit: 120, count: 3, zone: BASE,
      title: 'Yuklarni bazaga olib borish',
      text: '3 ta to\'q sariq yukni ko\'k BAZA zonasiga 120 soniyada itarib olib boring.',
    },
    example: program(print('Yuk tashish'), moveFor(0, 50, 7), moveFor(0, -50, 2)),
  },
  {
    id: 'color', name: 'Musobaqa: rangni topish (WRO uslubida)',
    start: { x: -0.8, z: LINE_W / 2, yaw: 0 },
    draw(g, X, Z) {
      blackLine(g); g.lineCap = 'butt';
      g.beginPath(); g.moveTo(X(-0.9), Z(0)); g.lineTo(X(0.85), Z(0)); g.stroke();
      for (const [col, x] of COLOR_PATCHES) zone(g, X, Z, { x0: x - 0.03, x1: x + 0.03, z0: PATCH_Z0, z1: PATCH_Z1 }, col);
      startMark(g, X, Z, -0.8, 0.1);
    },
    task: {
      type: 'stopInZone', limit: 60, zone: RED,
      title: 'Qizil rangda to\'xtash',
      text: 'Chiziq yonida 4 ta rang belgisi bor. Robot chiziq bo\'ylab yurib, rang sensori qizil belgida bo\'lganda to\'xtashi va 1 soniya turishi kerak (60 soniya).',
    },
    example: program(print('Qizilni qidiraman'),
      blk('controls_whileUntil', { fields: { MODE: 'UNTIL' }, inputs: {
        BOOL: { block: blk('sensor_color_is', { fields: { COLOR: 'qizil', PORT: '3' } }) },
        DO: { block: followLine(30) },
      } }),
      stop(), print('Qizil topildi!')),
  },
];
