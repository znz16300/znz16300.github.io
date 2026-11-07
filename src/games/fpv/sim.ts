// Фізика FPV-дрона, побудова траси та перевірка зіткнень.
// Система координат: праворуч-вгору-«до глядача» (права): x - вправо, y - вгору, z - назад. Дрон спочатку дивиться в -z.
import { LEVELS, LevelCfg, LevelId } from './levels';
import { DRONES, DroneCfg, DroneId } from './drone';
import { genScenery, treeRadiusAt, buildingTop, Tree, Building } from './scenery';
export type { Tree, Building } from './scenery';

export type V3 = [number, number, number];
export const add = (a: V3, b: V3): V3 => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
export const sub = (a: V3, b: V3): V3 => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
export const mul = (a: V3, k: number): V3 => [a[0] * k, a[1] * k, a[2] * k];
export const dot = (a: V3, b: V3): number => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
export const cross = (a: V3, b: V3): V3 => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
export const norm = (a: V3): V3 => {
  const l = Math.hypot(a[0], a[1], a[2]) || 1;
  return [a[0] / l, a[1] / l, a[2] / l];
};
const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));

export const G = 9.81;
export const GROUND_H = 0.12;
const DEG = Math.PI / 180;

export interface Gate {
  c: V3; // центр
  n: V3; // напрям прольоту
  rt: V3; // «вправо» у площині воріт
  r: number;
}
export interface Input {
  yaw: number; // -1..1 (вправо +)
  thr: number; // 0..1
  pitch: number; // -1..1 (стік вгору = +1 = нахил вперед)
  roll: number; // -1..1 (вправо +)
}

export interface Sim {
  cfg: LevelCfg;
  gates: Gate[];
  trees: Tree[];
  buildings: Building[];
  drone: DroneCfg;
  p: V3;
  prevP: V3;
  v: V3;
  r: V3;
  u: V3;
  b: V3;
  wr: number;
  wu: number;
  wf: number;
  armed: boolean;
  primed: boolean;
  lowT: number;
  onGround: boolean;
  next: number;
  started: boolean;
  time: number;
  crashT: number;
  invuln: number;
  msg: { text: string; t: number; color: string };
  hoverRequest: number | null;
  event: 'finished' | 'timeout' | null;
  speed: number;
}

const mulberry32 = (seed: number) => () => {
  seed |= 0;
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

export const createSim = (id: LevelId, droneId: DroneId = 'standard'): Sim => {
  const base = LEVELS[id];
  const drone = DRONES[droneId];
  const cfg: LevelCfg = { ...base, ratio: base.ratio * drone.power, rate: base.rate * drone.rate, yawRate: base.yawRate * drone.yaw, crashV: base.crashV * drone.tough };
  const pts = cfg.gates;
  const gates: Gate[] = pts.map((g, i) => {
    const prev = i === 0 ? [0, 0] : [pts[i - 1][0], pts[i - 1][1]];
    const next = i === pts.length - 1 ? [g[0], g[1]] : [pts[i + 1][0], pts[i + 1][1]];
    let dx = next[0] - prev[0];
    let dz = next[1] - prev[1];
    const l = Math.hypot(dx, dz) || 1;
    dx /= l;
    dz /= l;
    return { c: [g[0], Math.max(g[2], cfg.gateR + 0.4), g[1]], n: [dx, 0, dz], rt: [-dz, 0, dx], r: cfg.gateR };
  });

  // дерева та будівлі навколо траси (не на самій трасі)
  const path: [number, number][] = [[0, 0], ...pts.map((g) => [g[0], g[1]] as [number, number])];
  const rnd = mulberry32(id === 'easy' ? 11 : id === 'medium' ? 22 : 33);
  const { trees, buildings } = genScenery(path, rnd);

  const s: Sim = {
    cfg,
    gates,
    trees,
    buildings,
    drone,
    p: [0, GROUND_H, 0],
    prevP: [0, GROUND_H, 0],
    v: [0, 0, 0],
    r: [1, 0, 0],
    u: [0, 1, 0],
    b: [0, 0, 1],
    wr: 0,
    wu: 0,
    wf: 0,
    armed: false,
    primed: false,
    lowT: 0,
    onGround: true,
    next: 0,
    started: false,
    time: 0,
    crashT: 0,
    invuln: 0,
    msg: { text: '', t: 0, color: '#fff' },
    hoverRequest: null,
    event: null,
    speed: 0,
  };
  return s;
};

const resetToPad = (s: Sim) => {
  s.p = [0, GROUND_H, 0];
  s.prevP = [0, GROUND_H, 0];
  s.v = [0, 0, 0];
  s.r = [1, 0, 0];
  s.u = [0, 1, 0];
  s.b = [0, 0, 1];
  s.wr = s.wu = s.wf = 0;
  s.armed = false;
  s.primed = false;
  s.lowT = 0;
  s.onGround = true;
  s.hoverRequest = 0.5;
};

const respawn = (s: Sim) => {
  if (s.next === 0) {
    resetToPad(s);
  } else {
    const g = s.gates[s.next - 1];
    s.p = [g.c[0] - g.n[0] * 6, g.c[1], g.c[2] - g.n[2] * 6];
    s.prevP = [...s.p] as V3;
    s.v = [0, 0, 0];
    s.r = [...g.rt] as V3;
    s.u = [0, 1, 0];
    s.b = [-g.n[0], 0, -g.n[2]];
    s.wr = s.wu = s.wf = 0;
    s.armed = true;
    s.onGround = false;
    s.hoverRequest = 1 / s.cfg.ratio; // газ у положенні зависання
  }
  s.invuln = 1.5;
  s.crashT = 0;
};

const crash = (s: Sim, text: string) => {
  if (s.invuln > 0 || s.crashT > 0) return;
  s.crashT = 1.4;
  s.armed = false;
  s.v = [0, 0, 0];
  s.msg = { text, t: 1.4, color: '#f87171' };
};

const expo = (x: number) => Math.sign(x) * (0.5 * Math.abs(x) + 0.5 * Math.abs(x) ** 3);

export const stepSim = (s: Sim, dt: number, inp: Input): void => {
  const cfg = s.cfg;
  s.msg.t = Math.max(0, s.msg.t - dt);

  // ---------- запуск моторів: лівий стік вниз, потім назад вгору ----------
  if (!s.armed && s.crashT <= 0) {
    if (inp.thr < 0.06) {
      s.lowT += dt;
      if (s.lowT > 0.25) s.primed = true;
    } else {
      s.lowT = 0;
      if (s.primed) {
        s.armed = true;
        s.primed = false;
        s.msg = { text: 'МОТОРИ ЗАПУЩЕНО', t: 1.5, color: '#4ade80' };
      }
    }
  }

  if (s.crashT > 0) {
    s.crashT -= dt;
    if (s.crashT <= 0) respawn(s);
    return;
  }
  s.invuln = Math.max(0, s.invuln - dt);

  if (s.armed) s.started = true;
  if (s.started) {
    s.time += dt;
    if (s.time >= cfg.limit) {
      s.event = 'timeout';
      return;
    }
  }

  s.prevP = [...s.p] as V3;
  const thr = inp.thr;
  let pit = inp.pitch;
  let rol = inp.roll;
  const mag = Math.hypot(pit, rol);
  if (mag > 1) {
    pit /= mag;
    rol /= mag;
  }

  const steps = Math.max(1, Math.ceil(dt / 0.008));
  const h = dt / steps;
  for (let i = 0; i < steps; i++) {
    const f: V3 = [-s.b[0], -s.b[1], -s.b[2]];

    // контролер положення: бажаний нахил за стіками -> бажані кутові швидкості
    const attitude = (pv: number, rv: number, maxTiltDeg: number): [number, number] => {
      let fh: V3 = [f[0], 0, f[2]];
      const l = Math.hypot(fh[0], fh[2]);
      if (l < 0.3) {
        const rh: V3 = [s.r[0], 0, s.r[2]];
        const lr = Math.hypot(rh[0], rh[2]) || 1;
        fh = [rh[2] / lr, 0, -rh[0] / lr];
      } else fh = [fh[0] / l, 0, fh[2] / l];
      const rh: V3 = [-fh[2], 0, fh[0]];
      const th = Math.tan(pv * maxTiltDeg * DEG);
      const ph = Math.tan(rv * maxTiltDeg * DEG);
      const ud = norm([fh[0] * th + rh[0] * ph, 1, fh[2] * th + rh[2] * ph]);
      let e = mul(cross(s.u, ud), 9);
      const em = Math.hypot(e[0], e[1], e[2]);
      const maxA = 7;
      if (em > maxA) e = mul(e, maxA / em);
      return [dot(e, s.r), dot(e, f)];
    };

    let cmdR = 0;
    let cmdF = 0;
    const rateRad = cfg.rate * DEG;
    if (cfg.mode === 'acro') {
      cmdR = -expo(pit) * rateRad;
      cmdF = expo(rol) * rateRad;
    } else if (cfg.mode === 'angle') {
      [cmdR, cmdF] = attitude(pit, rol, cfg.maxTilt);
    } else {
      const [ar, af] = attitude(pit, rol, cfg.maxTilt);
      const m = clamp((Math.hypot(pit, rol) - 0.75) / 0.25, 0, 1);
      cmdR = (1 - m) * ar + m * -expo(pit) * rateRad;
      cmdF = (1 - m) * af + m * expo(rol) * rateRad;
    }
    const cmdU = -(cfg.mode === 'acro' ? expo(inp.yaw) : inp.yaw) * cfg.yawRate * DEG;

    if (s.onGround) {
      // на землі дрон вирівнюється сам
      [cmdR, cmdF] = attitude(0, 0, 0);
    }

    const k = Math.min(1, h / s.drone.resp);
    s.wr += (cmdR - s.wr) * k;
    s.wf += (cmdF - s.wf) * k;
    s.wu += (cmdU - s.wu) * k;

    const wv: V3 = [
      s.r[0] * s.wr + s.u[0] * s.wu + f[0] * s.wf,
      s.r[1] * s.wr + s.u[1] * s.wu + f[1] * s.wf,
      s.r[2] * s.wr + s.u[2] * s.wu + f[2] * s.wf,
    ];
    s.r = add(s.r, mul(cross(wv, s.r), h));
    s.u = add(s.u, mul(cross(wv, s.u), h));
    s.b = add(s.b, mul(cross(wv, s.b), h));
    s.b = norm(s.b);
    s.u = norm(sub(s.u, mul(s.b, dot(s.u, s.b))));
    s.r = cross(s.u, s.b);

    // тяга та рух
    let T = s.armed ? cfg.ratio * G * thr : 0;
    if (cfg.tiltComp && s.u[1] > 0.2) T /= Math.max(0.7, s.u[1]);
    const sp = Math.hypot(s.v[0], s.v[1], s.v[2]);
    const lin = 0.2;
    const quad = 0.012;
    const a: V3 = [
      s.u[0] * T - lin * s.v[0] - quad * sp * s.v[0],
      s.u[1] * T - G - lin * s.v[1] - quad * sp * s.v[1] - cfg.dampY * s.v[1],
      s.u[2] * T - lin * s.v[2] - quad * sp * s.v[2],
    ];
    s.v = add(s.v, mul(a, h));
    s.p = add(s.p, mul(s.v, h));

    // земля
    if (s.p[1] < GROUND_H) {
      const down = -s.v[1];
      if (s.armed && !s.onGround && (down > cfg.crashV || s.u[1] < 0.3)) {
        crash(s, 'АВАРІЯ: удар об землю');
        if (s.crashT > 0) return;
      }
      s.p[1] = GROUND_H;
      if (s.v[1] < 0) s.v[1] = 0;
      const fr = Math.exp(-5 * h);
      s.v[0] *= fr;
      s.v[2] *= fr;
      s.onGround = true;
    } else s.onGround = false;
  }

  if (s.p[1] > 70) {
    s.p[1] = 70;
    if (s.v[1] > 0) s.v[1] = 0;
  }
  s.speed = Math.hypot(s.v[0], s.v[1], s.v[2]);

  // за межами зони
  if (Math.hypot(s.p[0], s.p[2]) > 700) crash(s, 'ВИ ВИЛЕТІЛИ ЗА МЕЖІ ЗОНИ');

  // дерева
  for (const t of s.trees) {
    const dx = s.p[0] - t.x;
    if (Math.abs(dx) > t.R + 1) continue;
    const dz = s.p[2] - t.z;
    if (Math.abs(dz) > t.R + 1 || s.p[1] > t.h) continue;
    const rad = treeRadiusAt(t, s.p[1]) + 0.3;
    if (dx * dx + dz * dz < rad * rad) {
      crash(s, 'АВАРІЯ: дерево');
      return;
    }
  }

  // будівлі
  for (const b of s.buildings) {
    if (s.p[1] < buildingTop(b) + 0.3 && Math.abs(s.p[0] - b.x) < b.hx + 0.4 && Math.abs(s.p[2] - b.z) < b.hz + 0.4) {
      crash(s, 'АВАРІЯ: будівля');
      return;
    }
  }

  // ворота: проліт та зіткнення з рамою
  for (let gi = 0; gi < s.gates.length; gi++) {
    const g = s.gates[gi];
    if (Math.abs(s.p[0] - g.c[0]) > 12 || Math.abs(s.p[2] - g.c[2]) > 12) continue;
    const d0 = dot(sub(s.prevP, g.c), g.n);
    const d1 = dot(sub(s.p, g.c), g.n);
    if (d0 * d1 > 0 || d0 === d1) continue;
    const t = d0 / (d0 - d1);
    const q = sub(add(s.prevP, mul(sub(s.p, s.prevP), t)), g.c);
    const lateral = Math.hypot(dot(q, g.rt), q[1]);
    if (lateral < g.r - 0.3) {
      if (gi === s.next && d0 < 0) {
        s.next++;
        if (s.next >= s.gates.length) {
          s.event = 'finished';
          return;
        }
        s.msg = { text: `ВОРОТА ${s.next}/${s.gates.length}`, t: 1.2, color: '#22d3ee' };
      }
    } else if (lateral < g.r + 0.5) {
      crash(s, 'АВАРІЯ: зачепили ворота');
      return;
    }
  }
};
