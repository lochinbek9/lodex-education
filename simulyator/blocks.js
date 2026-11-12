// Blockly bloklari (o'zbekcha) va JavaScript generatori.
(function () {
  const M = Blockly.Msg;
  // Standart bloklar uchun o'zbekcha matnlar
  Object.assign(M, {
    CONTROLS_REPEAT_TITLE: '%1 marta takrorlash',
    CONTROLS_REPEAT_INPUT_DO: 'bajar',
    CONTROLS_WHILEUNTIL_OPERATOR_WHILE: 'toki',
    CONTROLS_WHILEUNTIL_OPERATOR_UNTIL: 'gacha takrorlash',
    CONTROLS_WHILEUNTIL_INPUT_DO: 'bajar',
    CONTROLS_IF_MSG_IF: 'agar',
    CONTROLS_IF_MSG_THEN: 'unda',
    CONTROLS_IF_MSG_ELSE: 'aks holda',
    CONTROLS_IF_MSG_ELSEIF: 'aks holda agar',
    CONTROLS_IF_IF_TITLE_IF: 'agar',
    CONTROLS_IF_ELSEIF_TITLE_ELSEIF: 'aks holda agar',
    CONTROLS_IF_ELSE_TITLE_ELSE: 'aks holda',
    CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK: 'takrorlashdan chiqish',
    CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE: 'keyingi qadamga o\'tish',
    LOGIC_BOOLEAN_TRUE: 'rost',
    LOGIC_BOOLEAN_FALSE: 'yolg\'on',
    LOGIC_OPERATION_AND: 'va',
    LOGIC_OPERATION_OR: 'yoki',
    LOGIC_NEGATE_TITLE: '%1 emas',
    MATH_CHANGE_TITLE: '%1 ni %2 ga o\'zgartirish',
    VARIABLES_SET: '%1 = %2',
    NEW_VARIABLE: 'O\'zgaruvchi yaratish…',
    NEW_VARIABLE_TITLE: 'Yangi o\'zgaruvchi nomi:',
    RENAME_VARIABLE: 'Nomini o\'zgartirish…',
    DELETE_VARIABLE: '"%1" o\'zgaruvchini o\'chirish',
    DELETE_BLOCK: 'Blokni o\'chirish',
    DELETE_X_BLOCKS: '%1 ta blokni o\'chirish',
    DUPLICATE_BLOCK: 'Nusxa olish',
    ADD_COMMENT: 'Izoh qo\'shish',
    REMOVE_COMMENT: 'Izohni o\'chirish',
    UNDO: 'Bekor qilish',
    REDO: 'Qaytarish',
    CLEAN_UP: 'Bloklarni tartiblash',
    COLLAPSE_BLOCK: 'Yig\'ish',
    EXPAND_BLOCK: 'Yoyish',
    DISABLE_BLOCK: 'O\'chirib qo\'yish',
    ENABLE_BLOCK: 'Yoqish',
    MATH_ABS: 'modul',
    MATH_SINGLE_OP_ROOT: 'kvadrat ildiz',
    MATH_ROUND_OPERATOR_ROUND: 'yaxlitlash',
  });

  const C_MOVE = 210, C_SENSOR = 30, C_CTRL = 120, C_SCREEN = 290, C_EVENT = 50;
  // Sensor porti (EV3 kabi 1–4); qaysi portga nima ulangani "Ulanishlar" panelida
  const PORT_ARG = { type: 'field_dropdown', name: 'PORT', options: [['1-port', '1'], ['2-port', '2'], ['3-port', '3'], ['4-port', '4']] };

  // Boshlash bloki hech narsa bajarmaydi: qadam rejimida unda to'xtalmaydi
  Blockly.Extensions.register('robot_no_step', function () { this.suppressPrefixSuffix = true; });

  Blockly.common.defineBlocksWithJsonArray([
    { type: 'robot_start', message0: '▶ Dastur boshlanganda', nextStatement: null, colour: C_EVENT,
      tooltip: 'Faqat shu blokka ulangan bloklar bajariladi', extensions: ['robot_no_step'] },

    { type: 'robot_move_steering', message0: 'Rul bilan yurish: rul %1 quvvat %2 %%',
      args0: [{ type: 'input_value', name: 'STEER', check: 'Number' }, { type: 'input_value', name: 'POWER', check: 'Number' }],
      inputsInline: true, previousStatement: null, nextStatement: null, colour: C_MOVE,
      tooltip: 'Rul: 0 — to\'g\'ri, musbat — o\'ngga, manfiy — chapga (−100…100). Quvvat: −100…100' },

    { type: 'robot_move_tank', message0: 'Ikki motor: chap (B) %1 o\'ng (C) %2 %%',
      args0: [{ type: 'input_value', name: 'LEFT', check: 'Number' }, { type: 'input_value', name: 'RIGHT', check: 'Number' }],
      inputsInline: true, previousStatement: null, nextStatement: null, colour: C_MOVE,
      tooltip: 'Har bir motor quvvatini alohida berish (−100…100)' },

    { type: 'robot_move_for', message0: 'Rul %1 quvvat %2 %% bilan %3 soniya yurish',
      args0: [{ type: 'input_value', name: 'STEER', check: 'Number' }, { type: 'input_value', name: 'POWER', check: 'Number' }, { type: 'input_value', name: 'SECS', check: 'Number' }],
      inputsInline: true, previousStatement: null, nextStatement: null, colour: C_MOVE,
      tooltip: 'Belgilangan vaqt yurib, keyin to\'xtaydi' },

    { type: 'robot_stop', message0: 'Motorlarni to\'xtatish', previousStatement: null, nextStatement: null, colour: C_MOVE },

    { type: 'robot_turn', message0: 'Giroskop bo\'yicha %1 ° burilish', args0: [{ type: 'input_value', name: 'DEG', check: 'Number' }],
      inputsInline: true, previousStatement: null, nextStatement: null, colour: C_MOVE,
      tooltip: 'Joyida burilish: musbat — o\'ngga, manfiy — chapga. Giroskop (2-port) ishlatiladi' },

    { type: 'robot_wait', message0: '%1 soniya kutish', args0: [{ type: 'input_value', name: 'SECS', check: 'Number' }],
      inputsInline: true, previousStatement: null, nextStatement: null, colour: C_CTRL },

    { type: 'robot_forever', message0: 'Doimo takrorlash %1 %2', args0: [{ type: 'input_dummy' }, { type: 'input_statement', name: 'DO' }],
      previousStatement: null, colour: C_CTRL, tooltip: 'Ichidagi bloklarni to\'xtovsiz takrorlaydi' },

    { type: 'robot_wait_until', message0: '%1 bo\'lguncha kutish', args0: [{ type: 'input_value', name: 'COND', check: 'Boolean' }],
      inputsInline: true, previousStatement: null, nextStatement: null, colour: C_CTRL },

    { type: 'sensor_reflected', message0: 'rang sensori %1 : yorug\'lik %%', args0: [PORT_ARG], output: 'Number', colour: C_SENSOR,
      tooltip: 'Qaytgan yorug\'lik: qora ≈ 5, oq ≈ 100' },

    { type: 'sensor_color', message0: 'rang sensori %1 : rang', args0: [PORT_ARG], output: 'String', colour: C_SENSOR },

    { type: 'sensor_color_is', message0: 'rang sensori %1 %2 rangni ko\'rsa',
      args0: [PORT_ARG, { type: 'field_dropdown', name: 'COLOR', options: [['qora', 'qora'], ['oq', 'oq'], ['qizil', 'qizil'], ['sariq', 'sariq'], ['yashil', 'yashil'], ['ko\'k', 'ko\'k']] }],
      output: 'Boolean', colour: C_SENSOR },

    { type: 'sensor_distance', message0: 'masofa sensori %1 , sm', args0: [PORT_ARG], output: 'Number', colour: C_SENSOR,
      tooltip: 'Oldindagi to\'siqqacha masofa; hech narsa bo\'lmasa 255' },

    { type: 'sensor_gyro', message0: 'giroskop %1 burchagi, °', args0: [PORT_ARG], output: 'Number', colour: C_SENSOR,
      tooltip: 'Soat strelkasi bo\'yicha musbat' },

    { type: 'sensor_gyro_reset', message0: 'giroskopni %1 nolga qaytarish', args0: [PORT_ARG], previousStatement: null, nextStatement: null, colour: C_SENSOR },

    { type: 'sensor_motor', message0: '%1 motor burchagi, °',
      args0: [{ type: 'field_dropdown', name: 'PORT', options: [['chap (B)', 'B'], ['o\'ng (C)', 'C']] }],
      output: 'Number', colour: C_SENSOR },

    { type: 'sensor_motor_reset', message0: 'motor burchaklarini nolga qaytarish', previousStatement: null, nextStatement: null, colour: C_SENSOR },

    { type: 'sensor_timer', message0: 'taymer, soniya', output: 'Number', colour: C_SENSOR },

    { type: 'screen_print', message0: 'ekranga chiqarish %1', args0: [{ type: 'input_value', name: 'TEXT' }],
      inputsInline: true, previousStatement: null, nextStatement: null, colour: C_SCREEN },
  ]);

  // "Takrorlashdan chiqish" bloki Doimo takrorlash ichida ham ishlasin
  try { Blockly.libraryBlocks.loops.loopTypes.add('robot_forever'); } catch (e) { /* eski versiya */ }

  const gen = javascript.javascriptGenerator;
  const O = javascript.Order;
  gen.addReservedWords('api');
  gen.STATEMENT_PREFIX = 'await api.hl(%1);\n';   // qadam rejimida shu yerda to'xtaydi
  gen.INFINITE_LOOP_TRAP = 'await api.tick();\n';
  const num = (b, name, def) => gen.valueToCode(b, name, O.NONE) || String(def);
  const F = gen.forBlock;

  F.robot_start = () => '';
  F.robot_move_steering = b => `api.steer(${num(b, 'STEER', 0)}, ${num(b, 'POWER', 50)});\n`;
  F.robot_move_tank = b => `api.tank(${num(b, 'LEFT', 50)}, ${num(b, 'RIGHT', 50)});\n`;
  F.robot_move_for = b => `await api.moveFor(${num(b, 'STEER', 0)}, ${num(b, 'POWER', 50)}, ${num(b, 'SECS', 1)});\n`;
  F.robot_stop = () => 'api.stop();\n';
  F.robot_turn = b => `await api.turn(${num(b, 'DEG', 90)});\n`;
  F.robot_wait = b => `await api.wait(${num(b, 'SECS', 1)});\n`;
  F.robot_forever = b => `while (true) {\n${gen.statementToCode(b, 'DO')}  await api.tick();\n}\n`;
  F.robot_wait_until = b => `while (!(${gen.valueToCode(b, 'COND', O.NONE) || 'false'})) { await api.tick(); }\n`;
  // api.read port to'g'riligini tekshiradi va xato bo'lsa shu blokni ko'rsatadi
  const rd = (b, type) => `api.read('${type}', ${gen.quote_(b.getFieldValue('PORT'))}, ${gen.quote_(b.id)})`;
  F.sensor_reflected = b => [`${rd(b, 'color')}.reflected`, O.MEMBER];
  F.sensor_color = b => [`${rd(b, 'color')}.color`, O.MEMBER];
  F.sensor_color_is = b => [`(${rd(b, 'color')}.color === ${gen.quote_(b.getFieldValue('COLOR'))})`, O.EQUALITY];
  F.sensor_distance = b => [`${rd(b, 'distance')}.distance`, O.MEMBER];
  F.sensor_gyro = b => [`${rd(b, 'gyro')}.gyro`, O.MEMBER];
  F.sensor_gyro_reset = b => `${rd(b, 'gyro')};\napi.resetGyro();\n`;
  F.sensor_motor = b => [`api.s().motor${b.getFieldValue('PORT')}`, O.MEMBER];
  F.sensor_motor_reset = () => 'api.resetMotors();\n';
  F.sensor_timer = () => ['api.timer()', O.FUNCTION_CALL];
  F.screen_print = b => `api.print(${gen.valueToCode(b, 'TEXT', O.NONE) || "''"});\n`;

  const shadowNum = n => ({ shadow: { type: 'math_number', fields: { NUM: n } } });

  window.ROBOT_TOOLBOX = {
    kind: 'categoryToolbox',
    contents: [
      { kind: 'category', name: 'Harakat', colour: C_MOVE, contents: [
        { kind: 'block', type: 'robot_move_steering', inputs: { STEER: shadowNum(0), POWER: shadowNum(50) } },
        { kind: 'block', type: 'robot_move_for', inputs: { STEER: shadowNum(0), POWER: shadowNum(50), SECS: shadowNum(1) } },
        { kind: 'block', type: 'robot_move_tank', inputs: { LEFT: shadowNum(50), RIGHT: shadowNum(50) } },
        { kind: 'block', type: 'robot_turn', inputs: { DEG: shadowNum(90) } },
        { kind: 'block', type: 'robot_stop' },
      ] },
      { kind: 'category', name: 'Sensorlar', colour: C_SENSOR, contents: [
        { kind: 'block', type: 'sensor_reflected', fields: { PORT: '3' } },
        { kind: 'block', type: 'sensor_color', fields: { PORT: '3' } },
        { kind: 'block', type: 'sensor_color_is', fields: { PORT: '3' } },
        { kind: 'block', type: 'sensor_distance', fields: { PORT: '4' } },
        { kind: 'block', type: 'sensor_gyro', fields: { PORT: '2' } },
        { kind: 'block', type: 'sensor_gyro_reset', fields: { PORT: '2' } },
        { kind: 'block', type: 'sensor_motor' },
        { kind: 'block', type: 'sensor_motor_reset' },
        { kind: 'block', type: 'sensor_timer' },
      ] },
      { kind: 'category', name: 'Boshqaruv', colour: C_CTRL, contents: [
        { kind: 'block', type: 'robot_start' },
        { kind: 'block', type: 'robot_forever' },
        { kind: 'block', type: 'controls_repeat_ext', inputs: { TIMES: shadowNum(4) } },
        { kind: 'block', type: 'controls_whileUntil' },
        { kind: 'block', type: 'robot_wait', inputs: { SECS: shadowNum(1) } },
        { kind: 'block', type: 'robot_wait_until' },
        { kind: 'block', type: 'controls_if' },
        { kind: 'block', type: 'controls_if', extraState: { hasElse: true } },
        { kind: 'block', type: 'controls_flow_statements' },
      ] },
      { kind: 'category', name: 'Mantiq', colour: '#5b80a5', contents: [
        { kind: 'block', type: 'logic_compare' },
        { kind: 'block', type: 'logic_operation' },
        { kind: 'block', type: 'logic_negate' },
        { kind: 'block', type: 'logic_boolean' },
      ] },
      { kind: 'category', name: 'Matematika', colour: '#5b67a5', contents: [
        { kind: 'block', type: 'math_number' },
        { kind: 'block', type: 'math_arithmetic' },
        { kind: 'block', type: 'math_single' },
        { kind: 'block', type: 'math_round' },
        { kind: 'block', type: 'math_constrain', inputs: { LOW: shadowNum(-100), HIGH: shadowNum(100) } },
        { kind: 'block', type: 'math_random_int', inputs: { FROM: shadowNum(1), TO: shadowNum(100) } },
      ] },
      { kind: 'category', name: 'O\'zgaruvchilar', colour: '#a55b80', custom: 'VARIABLE' },
      { kind: 'category', name: 'Ekran', colour: C_SCREEN, contents: [
        { kind: 'block', type: 'screen_print', inputs: { TEXT: { shadow: { type: 'text', fields: { TEXT: 'Salom!' } } } } },
        { kind: 'block', type: 'text' },
        { kind: 'block', type: 'text_join' },
      ] },
    ],
  };
})();
