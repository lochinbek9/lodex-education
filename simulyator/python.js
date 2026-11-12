// Bloklardan Python kodi (faqat o'qish uchun ko'rinish, SIM-8).
// Robot API nomlari ingliz tilida (Python odatiga ko'ra), izohlar o'zbekcha.
(function () {
  const gen = python.pythonGenerator;
  const O = python.Order;
  const F = gen.forBlock;

  const SENSOR = {
    color: { cls: 'ColorSensor', name: 'color' },
    gyro: { cls: 'GyroSensor', name: 'gyro' },
    distance: { cls: 'DistanceSensor', name: 'distance' },
  };
  const COLORS = { qora: 'BLACK', oq: 'WHITE', qizil: 'RED', sariq: 'YELLOW', yashil: 'GREEN', "ko'k": 'BLUE' };

  // Ishlatilgan sensorlarni yig'amiz: kod boshida e'lon qilinadi
  let used = {};
  const sensorVar = (b, type) => {
    const port = b.getFieldValue('PORT');
    const v = `${SENSOR[type].name}${port}`;
    used[v] = `${v} = ${SENSOR[type].cls}(Port.S${port})`;
    return v;
  };
  let usedMotors = new Set(), usedTimer = false, usedTurn = false;

  gen.INDENT = '    ';                 // Python odati: 4 bo'shliq
  const num = (b, name, def) => gen.valueToCode(b, name, O.NONE) || String(def);

  F.robot_start = () => '';
  F.robot_move_steering = b => `robot.steer(${num(b, 'STEER', 0)}, ${num(b, 'POWER', 50)})\n`;
  F.robot_move_tank = b => `robot.tank(${num(b, 'LEFT', 50)}, ${num(b, 'RIGHT', 50)})\n`;
  F.robot_move_for = b => `robot.move_for(${num(b, 'STEER', 0)}, ${num(b, 'POWER', 50)}, seconds=${num(b, 'SECS', 1)})\n`;
  F.robot_stop = () => 'robot.stop()\n';
  F.robot_turn = b => { usedTurn = true; return `robot.turn(${num(b, 'DEG', 90)})\n`; };
  F.robot_wait = b => `wait(${num(b, 'SECS', 1)})\n`;
  F.robot_forever = b => `while True:\n${gen.statementToCode(b, 'DO') || gen.INDENT + 'pass\n'}`;
  F.robot_wait_until = b => `while not (${gen.valueToCode(b, 'COND', O.NONE) || 'False'}):\n${gen.INDENT}wait(0.01)\n`;

  F.sensor_reflected = b => [`${sensorVar(b, 'color')}.reflection()`, O.FUNCTION_CALL];
  F.sensor_color = b => [`${sensorVar(b, 'color')}.color()`, O.FUNCTION_CALL];
  F.sensor_color_is = b => [`${sensorVar(b, 'color')}.color() == Color.${COLORS[b.getFieldValue('COLOR')] || 'NONE'}`, O.RELATIONAL];
  F.sensor_distance = b => [`${sensorVar(b, 'distance')}.distance()`, O.FUNCTION_CALL];
  F.sensor_gyro = b => [`${sensorVar(b, 'gyro')}.angle()`, O.FUNCTION_CALL];
  F.sensor_gyro_reset = b => `${sensorVar(b, 'gyro')}.reset_angle()\n`;
  F.sensor_motor = b => { const m = b.getFieldValue('PORT').toLowerCase(); usedMotors.add(m); return [`motor_${m}.angle()`, O.FUNCTION_CALL]; };
  F.sensor_motor_reset = () => { usedMotors.add('b'); usedMotors.add('c'); return 'motor_b.reset_angle()\nmotor_c.reset_angle()\n'; };
  F.sensor_timer = () => { usedTimer = true; return ['timer.time()', O.FUNCTION_CALL]; };
  F.screen_print = b => `screen.print(${gen.valueToCode(b, 'TEXT', O.NONE) || "''"})\n`;

  // opts.gyroPort — "Ulanishlar"dagi giroskop porti (burilish bloki uchun)
  window.robotToPython = function (workspace, opts = {}) {
    const starts = workspace.getTopBlocks(true).filter(b => b.type === 'robot_start' && b.isEnabled());
    if (starts.length === 0) return '# "▶ Dastur boshlanganda" bloki yo\'q.\n# Uni "Boshqaruv" bo\'limidan qo\'shing — Python kodi shu yerda paydo bo\'ladi.\n';
    used = {}; usedMotors = new Set(); usedTimer = false; usedTurn = false;
    gen.init(workspace);
    let body = gen.blockToCode(starts[0]);
    body = gen.finish(body);           // o'zgaruvchilar va import qatorlarini qo'shadi

    const gyro = usedTurn ? `, gyro=${opts.gyroPort ? 'Port.S' + opts.gyroPort : 'None'}` : '';
    const lines = [
      '# Bu kod bloklardan avtomatik yaratilgan (faqat o\'qish uchun).',
      'from robot import *',
      '',
    ];
    if (usedTurn) lines.push('# robot.turn(gradus): giroskop bo\'yicha joyida burilish,', '# musbat — o\'ngga, manfiy — chapga');
    lines.push(`robot = Robot(left=Port.B, right=Port.C${gyro})`, ...Object.keys(used).sort().map(k => used[k]));
    for (const m of [...usedMotors].sort()) lines.push(`motor_${m} = Motor(Port.${m.toUpperCase()})`);
    if (usedTimer) lines.push('timer = Timer()');
    const extra = starts.length > 1 ? '\n# Diqqat: "Dastur boshlanganda" bloki bittadan ko\'p, faqat birinchisi ko\'rsatildi.\n' : '';
    return lines.join('\n') + '\n\n' + body.replace(/^\n+/, '').replace(/\n{3,}/g, '\n\n') + extra;
  };
})();
