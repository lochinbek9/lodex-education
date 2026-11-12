// 3D maydon, robot fizikasi va sensorlar.
// Koordinatalar: metr; maydon XZ tekisligida, Y yuqoriga.
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import * as RAPIER from 'rapier';
import { PX } from './fields.js';

export const FIELD = { w: 2.0, h: 1.4 };

// Robot o'lchamlari
const BODY = { hx: 0.075, hy: 0.03, hz: 0.06 };
const WHEEL_BASE = 0.12;               // g'ildiraklar orasidagi masofa
const WHEEL_D = 0.056;                 // g'ildirak diametri
const MAX_V = 0.4;                     // 100% quvvatda tezlik, m/s
const COLOR_OFFSET = 0.08;             // rang sensori markazdan oldinda
const BOX_HALF = 0.04;
const WALL_HY = 0.05;

// ---------- Maydon rasmi (rang sensori shu rasmdan o'qiydi) ----------
function drawField(canvas, field) {
  const g = canvas.getContext('2d');
  const X = x => (x + FIELD.w / 2) * PX;
  const Z = z => (z + FIELD.h / 2) * PX;
  g.save();
  g.fillStyle = '#ffffff'; g.fillRect(0, 0, canvas.width, canvas.height);
  // Juda och to'r chiziqlar (dekor)
  g.strokeStyle = '#eef1f4'; g.lineWidth = 2;
  for (let x = 100; x < canvas.width; x += 100) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x, canvas.height); g.stroke(); }
  for (let z = 100; z < canvas.height; z += 100) { g.beginPath(); g.moveTo(0, z); g.lineTo(canvas.width, z); g.stroke(); }
  // Devorlar izi
  g.fillStyle = '#9aa4ae';
  for (const w of field.walls || []) g.fillRect(X(w.x - w.hx), Z(w.z - w.hz), w.hx * 2 * PX, w.hz * 2 * PX);
  field.draw(g, X, Z);
  g.restore();
  // Chegara
  g.strokeStyle = '#3b4552'; g.lineWidth = 12; g.setLineDash([]);
  g.strokeRect(6, 6, canvas.width - 12, canvas.height - 12);
}

// ---------- Rang tasnifi ----------
function classify(r, g, b) {
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const light = (0.299 * r + 0.587 * g + 0.114 * b) / 255 * 100;
  const sat = max === 0 ? 0 : (max - min) / max;
  if (sat < 0.35) return light < 35 ? 'qora' : light > 70 ? 'oq' : 'kulrang';
  let h;
  if (max === r) h = ((g - b) / (max - min)) % 6;
  else if (max === g) h = (b - r) / (max - min) + 2;
  else h = (r - g) / (max - min) + 4;
  h = (h * 60 + 360) % 360;
  if (h < 20 || h >= 330) return 'qizil';
  if (h < 70) return 'sariq';
  if (h < 170) return 'yashil';
  if (h < 260) return 'ko\'k';
  return 'qizil';
}

export class Sim {
  constructor(container) {
    this.container = container;
    this.motor = { B: 0, C: 0 };        // maqsad quvvat, -100..100
    this.vel = { B: 0, C: 0 };          // haqiqiy tezlik, m/s (inertsiya bilan)
    this.enc = { B: 0, C: 0 };          // motor burchagi, gradus
    this.time = 0;                      // simulyatsiya vaqti, s
    this.camMode = 'free';
    this.listeners = [];
    this.paused = false;                // qadam rejimida fizika to'xtatiladi
    // Qaysi portga qaysi sensor ulangan (EV3 odatiy sozlamasi)
    this.ports = { 1: null, 2: 'gyro', 3: 'color', 4: 'distance' };
    this.fieldBodies = [];
    this.fieldMeshes = [];
    this.boxes = [];
    this.cpMeshes = [];
  }

  async init(field) {
    await RAPIER.init();
    this.fieldCanvas = document.createElement('canvas');
    this.fieldCanvas.width = FIELD.w * PX; this.fieldCanvas.height = FIELD.h * PX;
    this.initThree();
    this.initPhysics();
    this.loadField(field);
    this.last = performance.now();
    this.acc = 0;
    requestAnimationFrame(t => this.frame(t));
  }

  // ---------- Grafika ----------
  initThree() {
    const w = this.container.clientWidth, h = this.container.clientHeight;
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    this.renderer.setSize(w, h);
    this.renderer.shadowMap.enabled = true;
    this.container.appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xe9edf2);
    this.camera = new THREE.PerspectiveCamera(45, w / h, 0.01, 50);
    this.camera.position.set(0, 1.6, 1.7);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.target.set(0, 0, 0.05);
    this.controls.maxPolarAngle = Math.PI / 2 - 0.05;
    this.controls.update();

    this.scene.add(new THREE.HemisphereLight(0xffffff, 0x8a96a3, 1.6));
    const sun = new THREE.DirectionalLight(0xffffff, 1.4);
    sun.position.set(0.8, 2.5, 1.2); sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    Object.assign(sun.shadow.camera, { left: -1.3, right: 1.3, top: 1.0, bottom: -1.0 });
    this.scene.add(sun);

    // Stol va maydon
    const table = new THREE.Mesh(new THREE.BoxGeometry(FIELD.w + 0.4, 0.04, FIELD.h + 0.4), new THREE.MeshStandardMaterial({ color: 0xc9b38f }));
    table.position.y = -0.021; table.receiveShadow = true; this.scene.add(table);
    this.fieldTex = new THREE.CanvasTexture(this.fieldCanvas);
    this.fieldTex.colorSpace = THREE.SRGBColorSpace;
    this.fieldTex.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
    const mat = new THREE.Mesh(new THREE.PlaneGeometry(FIELD.w, FIELD.h), new THREE.MeshStandardMaterial({ map: this.fieldTex, roughness: 0.9 }));
    mat.rotation.x = -Math.PI / 2; mat.receiveShadow = true; this.scene.add(mat);

    // Chegara devorlari
    this.wallMat = new THREE.MeshStandardMaterial({ color: 0x59636e });
    for (const wd of this.borderWalls()) this.scene.add(this.wallMesh(wd));

    this.robotMesh = this.buildRobot(); this.scene.add(this.robotMesh);
    this.boxGeo = new THREE.BoxGeometry(BOX_HALF * 2, BOX_HALF * 2, BOX_HALF * 2);
    this.boxMat = new THREE.MeshStandardMaterial({ color: 0xe36209 });

    // Masofa sensori nuri
    this.rayLine = new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]), new THREE.LineBasicMaterial({ color: 0xcf222e, transparent: true, opacity: 0.6 }));
    this.scene.add(this.rayLine);

    new ResizeObserver(() => this.resize()).observe(this.container);
  }

  wallMesh(wd) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(wd.hx * 2, WALL_HY * 2, wd.hz * 2), this.wallMat);
    m.position.set(wd.x, WALL_HY, wd.z); m.castShadow = m.receiveShadow = true;
    return m;
  }

  buildRobot() {
    const g = new THREE.Group();
    const std = c => new THREE.MeshStandardMaterial({ color: c, roughness: 0.6 });
    const add = (geo, mat, x, y, z) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.castShadow = true; g.add(m); return m; };
    add(new THREE.BoxGeometry(BODY.hx * 2, BODY.hy * 2 * 0.8, BODY.hz * 2 * 0.75), std(0xf0f0f0), 0, 0.03, 0);
    add(new THREE.BoxGeometry(0.09, 0.03, 0.075), std(0x2b3440), -0.01, 0.068, 0);
    add(new THREE.BoxGeometry(0.04, 0.002, 0.04), new THREE.MeshBasicMaterial({ color: 0x9fe2b0 }), -0.01, 0.0841, 0);
    const wheelGeo = new THREE.CylinderGeometry(WHEEL_D / 2, WHEEL_D / 2, 0.022, 28);
    const tyre = std(0x222222);
    for (const s of [-1, 1]) { const w = add(wheelGeo, tyre, 0.01, WHEEL_D / 2 - 0.002, s * WHEEL_BASE / 2); w.rotation.x = Math.PI / 2; }
    add(new THREE.SphereGeometry(0.01, 16, 12), std(0x888888), -0.06, 0.01, 0);
    add(new THREE.BoxGeometry(0.02, 0.02, 0.02), std(0xcf222e), COLOR_OFFSET, 0.018, 0);
    add(new THREE.BoxGeometry(0.015, 0.025, 0.05), std(0x1f2937), BODY.hx + 0.006, 0.05, 0);
    for (const s of [-1, 1]) { const e = add(new THREE.CylinderGeometry(0.008, 0.008, 0.004, 16), std(0x3b82f6), BODY.hx + 0.014, 0.05, s * 0.013); e.rotation.z = Math.PI / 2; }
    return g;
  }

  resize() {
    const w = this.container.clientWidth, h = this.container.clientHeight;
    if (!w || !h) return;
    this.camera.aspect = w / h; this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
  }

  setCamera(mode) {
    this.camMode = mode;
    if (mode === 'top') { this.camera.position.set(0, 2.3, 0.001); this.controls.target.set(0, 0, 0); }
    if (mode === 'free') { this.camera.position.set(0, 1.6, 1.7); this.controls.target.set(0, 0, 0.05); }
    this.controls.enabled = mode !== 'follow';
    this.controls.update();
  }

  // ---------- Fizika ----------
  borderWalls() {
    const t = 0.02, W = FIELD.w / 2, H = FIELD.h / 2;
    return [
      { x: 0, z: -H - t, hx: W + 2 * t, hz: t },
      { x: 0, z: H + t, hx: W + 2 * t, hz: t },
      { x: -W - t, z: 0, hx: t, hz: H },
      { x: W + t, z: 0, hx: t, hz: H },
    ];
  }

  addWallBody(wd) {
    const b = this.world.createRigidBody(RAPIER.RigidBodyDesc.fixed().setTranslation(wd.x, WALL_HY, wd.z));
    this.world.createCollider(RAPIER.ColliderDesc.cuboid(wd.hx, WALL_HY, wd.hz), b);
    return b;
  }

  initPhysics() {
    const R = RAPIER;
    this.world = new R.World({ x: 0, y: -9.81, z: 0 });
    const ground = this.world.createRigidBody(R.RigidBodyDesc.fixed().setTranslation(0, -0.05, 0));
    this.world.createCollider(R.ColliderDesc.cuboid(FIELD.w, 0.05, FIELD.h).setFriction(0.8), ground);
    for (const wd of this.borderWalls()) this.addWallBody(wd);
    // Robot: faqat vertikal o'q atrofida aylanadi; g'ildiraklar tezligi to'g'ridan-to'g'ri beriladi
    this.robot = this.world.createRigidBody(R.RigidBodyDesc.dynamic().setTranslation(0, BODY.hy + 0.001, 0).enabledRotations(false, true, false).setCcdEnabled(true));
    // Ishqalanish 0 va "Min" qoidasi: harakat to'liq g'ildirak tezliklari bilan boshqariladi, pol robotni burmaydi
    this.world.createCollider(R.ColliderDesc.cuboid(BODY.hx, BODY.hy, BODY.hz).setDensity(1500).setFriction(0)
      .setFrictionCombineRule(R.CoefficientCombineRule.Min), this.robot);
  }

  // Maydonni almashtirish: rasm, devorlar, yuklar, nazorat nuqtalari
  loadField(field) {
    this.field = field;
    for (const b of this.fieldBodies) this.world.removeRigidBody(b);
    for (const m of this.fieldMeshes) this.scene.remove(m);
    this.fieldBodies = []; this.fieldMeshes = []; this.boxes = []; this.cpMeshes = [];

    drawField(this.fieldCanvas, field);
    this.fieldTex.needsUpdate = true;
    this.fieldData = this.fieldCanvas.getContext('2d').getImageData(0, 0, this.fieldCanvas.width, this.fieldCanvas.height).data;

    for (const wd of field.walls || []) {
      this.fieldBodies.push(this.addWallBody(wd));
      const m = this.wallMesh(wd); this.scene.add(m); this.fieldMeshes.push(m);
    }
    for (const bx of field.boxes || []) {
      const body = this.world.createRigidBody(RAPIER.RigidBodyDesc.dynamic().setTranslation(bx.x, BOX_HALF, bx.z).setLinearDamping(2).setAngularDamping(2));
      this.world.createCollider(RAPIER.ColliderDesc.cuboid(BOX_HALF, BOX_HALF, BOX_HALF).setDensity(300).setFriction(0.6), body);
      const mesh = new THREE.Mesh(this.boxGeo, this.boxMat); mesh.castShadow = true;
      this.scene.add(mesh);
      this.fieldBodies.push(body); this.fieldMeshes.push(mesh);
      this.boxes.push({ body, mesh, init: bx });
    }
    const pts = field.task && field.task.type === 'checkpoints' ? field.task.points : [];
    pts.forEach((cp, i) => {
      const last = i === pts.length - 1;
      const m = new THREE.Mesh(new THREE.TorusGeometry(field.task.radius * 0.75, 0.006, 8, 40), new THREE.MeshBasicMaterial({ color: last ? 0x2da44e : 0x8250df, transparent: true, opacity: 0.75 }));
      m.rotation.x = Math.PI / 2; m.position.set(cp.x, 0.004, cp.z);
      this.scene.add(m); this.fieldMeshes.push(m); this.cpMeshes.push(m);
    });
    this.reset();
  }

  reset() {
    const st = this.field.start;
    this.motor.B = this.motor.C = 0;
    this.vel.B = this.vel.C = 0;
    this.enc.B = this.enc.C = 0;
    this.time = 0;
    const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), st.yaw);
    this.robot.setTranslation({ x: st.x, y: BODY.hy + 0.001, z: st.z }, true);
    this.robot.setRotation({ x: q.x, y: q.y, z: q.z, w: q.w }, true);
    this.robot.setLinvel({ x: 0, y: 0, z: 0 }, true);
    this.robot.setAngvel({ x: 0, y: 0, z: 0 }, true);
    for (const b of this.boxes) {
      b.body.setTranslation({ x: b.init.x, y: BOX_HALF, z: b.init.z }, true);
      b.body.setRotation({ x: 0, y: 0, z: 0, w: 1 }, true);
      b.body.setLinvel({ x: 0, y: 0, z: 0 }, true);
      b.body.setAngvel({ x: 0, y: 0, z: 0 }, true);
    }
    this.cpMeshes.forEach((_, i) => this.setCheckpointDone(i, false));
    this.prevYaw = this.yaw();
    this.gyroAngle = 0;
    this.readSensors();
    this.syncMeshes();
  }

  yaw() {
    const r = this.robot.rotation();
    return new THREE.Euler().setFromQuaternion(new THREE.Quaternion(r.x, r.y, r.z, r.w), 'YXZ').y;
  }

  step(dt) {
    // Motor inertsiyasi: tezlik maqsadga silliq yaqinlashadi
    for (const p of ['B', 'C']) {
      const target = Math.max(-100, Math.min(100, this.motor[p])) / 100 * MAX_V;
      this.vel[p] += (target - this.vel[p]) * Math.min(1, dt * 12);
      this.enc[p] += this.vel[p] * dt / (Math.PI * WHEEL_D) * 360;
    }
    const v = (this.vel.B + this.vel.C) / 2;
    const w = (this.vel.C - this.vel.B) / WHEEL_BASE;     // o'ng tezroq -> chapga buriladi
    const yaw = this.yaw();
    const lv = this.robot.linvel();
    this.robot.setLinvel({ x: Math.cos(yaw) * v, y: lv.y, z: -Math.sin(yaw) * v }, true);
    this.robot.setAngvel({ x: 0, y: w, z: 0 }, true);
    this.world.timestep = dt;
    this.world.step();
    this.time += dt;

    // Giroskop: soat strelkasi bo'yicha musbat (EV3 kabi)
    const ny = this.yaw();
    let d = ny - this.prevYaw;
    if (d > Math.PI) d -= 2 * Math.PI;
    if (d < -Math.PI) d += 2 * Math.PI;
    this.gyroAngle -= d * 180 / Math.PI;
    this.prevYaw = ny;
    this.readSensors();
    for (const fn of this.listeners) fn(dt);
  }

  // ---------- Sensorlar ----------
  sensorPoint() {
    const p = this.robot.translation(), yaw = this.yaw();
    return { x: p.x + Math.cos(yaw) * COLOR_OFFSET, z: p.z - Math.sin(yaw) * COLOR_OFFSET };
  }

  readSensors() {
    const p = this.robot.translation(), yaw = this.yaw();
    const fx = Math.cos(yaw), fz = -Math.sin(yaw);

    // Rang sensori: sensor ostidagi ~8 mm radiusdagi doira bo'yicha o'rtacha
    const sp = this.sensorPoint();
    const cx = Math.round((sp.x + FIELD.w / 2) * PX), cz = Math.round((sp.z + FIELD.h / 2) * PX);
    let r = 0, g = 0, b = 0, n = 0;
    const W = this.fieldCanvas.width, H = this.fieldCanvas.height, rad = 8;
    for (let dz = -rad; dz <= rad; dz += 2) for (let dx = -rad; dx <= rad; dx += 2) {
      if (dx * dx + dz * dz > rad * rad) continue;
      const x = Math.min(W - 1, Math.max(0, cx + dx)), z = Math.min(H - 1, Math.max(0, cz + dz));
      const i = (z * W + x) * 4;
      r += this.fieldData[i]; g += this.fieldData[i + 1]; b += this.fieldData[i + 2]; n++;
    }
    r /= n; g /= n; b /= n;
    const reflected = Math.round((0.299 * r + 0.587 * g + 0.114 * b) / 255 * 100);

    // Masofa sensori: oldinga nur
    const origin = { x: p.x + fx * (BODY.hx + 0.02), y: 0.05, z: p.z + fz * (BODY.hx + 0.02) };
    const ray = new RAPIER.Ray(origin, { x: fx, y: 0, z: fz });
    const hit = this.world.castRay(ray, 2.55, true, undefined, undefined, undefined, this.robot);
    const toi = hit ? (hit.timeOfImpact ?? hit.toi) : null;
    const distance = toi == null ? 255 : Math.round(toi * 1000) / 10;
    const end = toi == null ? 2.55 : toi;
    this.rayLine.geometry.setFromPoints([
      new THREE.Vector3(origin.x, origin.y, origin.z),
      new THREE.Vector3(origin.x + fx * end, origin.y, origin.z + fz * end),
    ]);

    this.sensors = {
      reflected,
      color: classify(r, g, b),
      distance,
      gyro: Math.round(this.gyroAngle),
      motorB: Math.round(this.enc.B),
      motorC: Math.round(this.enc.C),
    };
  }

  portOf(type) {
    const p = Object.keys(this.ports).find(k => this.ports[k] === type);
    return p || null;
  }

  resetGyro() { this.gyroAngle = 0; }
  resetMotors() { this.enc.B = this.enc.C = 0; }

  position() { const p = this.robot.translation(); return { x: p.x, z: p.z }; }
  speed() { return Math.abs(this.vel.B) + Math.abs(this.vel.C); }
  boxPositions() { return this.boxes.map(b => { const t = b.body.translation(); return { x: t.x, z: t.z }; }); }

  syncMeshes() {
    const p = this.robot.translation(), r = this.robot.rotation();
    this.robotMesh.position.set(p.x, p.y - BODY.hy, p.z);
    this.robotMesh.quaternion.set(r.x, r.y, r.z, r.w);
    for (const b of this.boxes) {
      const t = b.body.translation(), q = b.body.rotation();
      b.mesh.position.set(t.x, t.y, t.z);
      b.mesh.quaternion.set(q.x, q.y, q.z, q.w);
    }
  }

  frame(t) {
    const dt = Math.min(0.1, (t - this.last) / 1000);
    this.last = t;
    this.acc = this.paused ? 0 : this.acc + dt;
    const h = 1 / 120;
    while (this.acc >= h) { this.step(h); this.acc -= h; }
    this.syncMeshes();
    if (this.camMode === 'follow') {
      const p = this.robotMesh.position, yaw = this.yaw();
      const want = new THREE.Vector3(p.x - Math.cos(yaw) * 0.45, 0.32, p.z + Math.sin(yaw) * 0.45);
      this.camera.position.lerp(want, 0.08);
      this.camera.lookAt(p.x + Math.cos(yaw) * 0.15, 0.03, p.z - Math.sin(yaw) * 0.15);
    } else {
      this.controls.update();
    }
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(tt => this.frame(tt));
  }

  setCheckpointDone(i, done) {
    const last = i === this.cpMeshes.length - 1;
    this.cpMeshes[i].material.color.set(done || last ? 0x2da44e : 0x8250df);
    this.cpMeshes[i].material.opacity = done ? 0.25 : 0.75;
  }
}
