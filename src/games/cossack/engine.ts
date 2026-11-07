// Рушій гри «Козак у підземеллі Змія»: фізика, ухоплення за край, бій на шаблях, пастки.
import { LEVELS, TILE as T, ROWS } from './levels';

export { T, ROWS };

export const GRAVITY = 1500;
export const JUMP_V = -537; // стрибок приблизно на 2,4 клітинки: дістає до краю підлоги поверхом вище
const RUN = 190;
const MAX_FALL = 900;

export type Act = 'none' | 'attack' | 'parry' | 'stun';

interface Body {
  x: number;
  y: number;
  w: number;
  h: number;
  vx: number;
  vy: number;
  onGround: boolean;
  face: number;
}
export interface Fighter extends Body {
  hp: number;
  maxHp: number;
  act: Act;
  actT: number;
  actDur: number;
  hitDone: boolean;
  invuln: number;
  dead: boolean;
  deadT: number;
}
export interface Hero extends Fighter {
  state: 'free' | 'hang' | 'climb';
  hangC: number;
  hangR: number;
  climbT: number;
  climbFrom: [number, number];
  climbTo: [number, number];
  minFootY: number;
  swordOut: boolean;
  crouch: boolean;
}
export interface Guard extends Fighter {
  alert: boolean;
  aiT: number;
  strong: boolean;
  speed: number;
  aggr: number;
  parryP: number;
  parryT: number;
}
export interface Item {
  c: number;
  r: number;
  kind: 'h' | 'H';
  taken: boolean;
}
export interface Plate {
  c: number;
  r: number;
  ch: string;
  pressed: boolean;
}
export interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  t: number;
  color: string;
}
export interface Debris {
  x: number;
  y: number;
  vy: number;
  rot: number;
}
export interface Inp {
  left: boolean;
  right: boolean;
  up: boolean;
  down: boolean;
  parry: boolean;
  upEdge: boolean;
  attackEdge: boolean;
}
export interface World {
  map: string[][];
  cols: number;
  hero: Hero;
  guards: Guard[];
  items: Item[];
  plates: Plate[];
  spikes: { c: number; r: number }[];
  torches: { x: number; y: number }[];
  exit: { x: number; y: number; w: number; h: number } | null;
  gateAmt: Record<string, number>;
  gateOpen: Record<string, boolean>;
  loose: Record<string, number>;
  debris: Debris[];
  sparks: Spark[];
  camX: number;
  time: number;
  event: 'restart' | 'levelDone' | null;
  msg: { text: string; t: number };
  levelIdx: number;
  deathReason: string;
}

const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
const sign = (v: number) => (v > 0 ? 1 : v < 0 ? -1 : 0);

// ---------- Побудова рівня ----------
export const createWorld = (levelIdx: number, maxHp = 3): World => {
  const lv = LEVELS[levelIdx];
  const map = lv.map.map((r) => r.split(''));
  const cols = map[0].length;
  const w: World = {
    map,
    cols,
    hero: null as unknown as Hero,
    guards: [],
    items: [],
    plates: [],
    spikes: [],
    torches: [],
    exit: null,
    gateAmt: { A: 0, B: 0 },
    gateOpen: { A: false, B: false },
    loose: {},
    debris: [],
    sparks: [],
    camX: 0,
    time: 0,
    event: null,
    msg: { text: '', t: 0 },
    levelIdx,
    deathReason: '',
  };
  const baseFighter = {
    vx: 0,
    vy: 0,
    onGround: false,
    face: 1,
    act: 'none' as Act,
    actT: 0,
    actDur: 0,
    hitDone: false,
    invuln: 0,
    dead: false,
    deadT: 0,
  };
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < cols; c++) {
      const ch = map[r][c];
      if (ch === 'S') {
        w.hero = {
          ...baseFighter,
          onGround: true,
          x: c * T + 10,
          y: (r + 1) * T - 34,
          w: 20,
          h: 34,
          hp: maxHp,
          maxHp,
          state: 'free',
          hangC: 0,
          hangR: 0,
          climbT: 0,
          climbFrom: [0, 0],
          climbTo: [0, 0],
          minFootY: (r + 1) * T,
          swordOut: false,
          crouch: false,
        };
        map[r][c] = ' ';
      } else if (ch === 'e' || ch === 'E') {
        const strong = ch === 'E';
        const hp = strong ? 5 : 3;
        w.guards.push({
          ...baseFighter,
          face: -1,
          x: c * T + 8,
          y: (r + 1) * T - (strong ? 38 : 36),
          w: strong ? 24 : 22,
          h: strong ? 38 : 36,
          hp,
          maxHp: hp,
          alert: false,
          aiT: 0.8,
          strong,
          speed: strong ? 85 : 65,
          aggr: strong ? 0.7 : 0.5,
          parryP: strong ? 0.4 : 0.25,
          parryT: 0.5,
        });
        map[r][c] = ' ';
      } else if (ch === 'h' || ch === 'H') {
        w.items.push({ c, r, kind: ch, taken: false });
        map[r][c] = ' ';
      } else if (ch === '^') {
        w.spikes.push({ c, r });
        map[r][c] = ' ';
      } else if (ch === 'a' || ch === 'b') {
        w.plates.push({ c, r, ch: ch.toUpperCase(), pressed: false });
        map[r][c] = ch;
      } else if (ch === 'D') {
        w.exit = { x: c * T + 2, y: (r + 1) * T - 64, w: 36, h: 64 };
        map[r][c] = ' ';
      } else if (ch === 't') {
        w.torches.push({ x: c * T + T / 2, y: r * T + T / 2 });
        map[r][c] = ' ';
      }
    }
  }
  w.hero.face = 1;
  return w;
};

// ---------- Плитки ----------
export const solid = (w: World, c: number, r: number): boolean => {
  if (c < 0 || c >= w.cols || r < 0) return true;
  if (r >= ROWS) return false;
  const ch = w.map[r][c];
  if (ch === '#' || ch === 'F') return true;
  if (ch === 'A' || ch === 'B') return (w.gateAmt[ch] ?? 0) < 0.8;
  return false;
};

const moveBody = (w: World, b: Body, dt: number): void => {
  b.x += b.vx * dt;
  let x0 = Math.floor(b.x / T);
  let x1 = Math.floor((b.x + b.w - 0.01) / T);
  let y0 = Math.floor(b.y / T);
  let y1 = Math.floor((b.y + b.h - 0.01) / T);
  for (let r = y0; r <= y1; r++) {
    for (let c = x0; c <= x1; c++) {
      if (!solid(w, c, r)) continue;
      if (b.vx > 0) b.x = c * T - b.w;
      else if (b.vx < 0) b.x = (c + 1) * T;
      b.vx = 0;
    }
  }
  b.y += b.vy * dt;
  b.onGround = false;
  x0 = Math.floor(b.x / T);
  x1 = Math.floor((b.x + b.w - 0.01) / T);
  y0 = Math.floor(b.y / T);
  y1 = Math.floor((b.y + b.h - 0.01) / T);
  for (let r = y0; r <= y1; r++) {
    for (let c = x0; c <= x1; c++) {
      if (!solid(w, c, r)) continue;
      if (b.vy > 0) {
        b.y = r * T - b.h;
        b.vy = 0;
        b.onGround = true;
      } else if (b.vy < 0) {
        b.y = (r + 1) * T;
        b.vy = 0;
      }
    }
  }
};

const spark = (w: World, x: number, y: number, color: string, n = 8) => {
  for (let i = 0; i < n; i++) {
    const a = Math.random() * Math.PI * 2;
    const sp = 60 + Math.random() * 140;
    w.sparks.push({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 40, t: 0.3 + Math.random() * 0.3, color });
  }
};

const killHero = (w: World, reason: string) => {
  const h = w.hero;
  if (h.dead) return;
  h.dead = true;
  h.hp = 0;
  h.deadT = 0;
  h.vx = 0;
  h.state = 'free';
  w.deathReason = reason;
};

const hurt = (w: World, f: Fighter, from: Fighter): void => {
  const isHero = f === w.hero;
  if (isHero && f.invuln > 0) return;
  f.hp -= 1;
  f.act = 'stun';
  f.actT = 0;
  f.actDur = 0.32;
  f.vx = from.face * 150;
  spark(w, f.x + f.w / 2, f.y + f.h / 2, isHero ? '#ef4444' : '#a3e635', 10);
  if (isHero) {
    f.invuln = 0.7;
    if (f.hp <= 0) killHero(w, 'Вас переміг вартовий');
  } else if (f.hp <= 0) {
    f.dead = true;
    f.deadT = 0;
  }
};

// ---------- Герой ----------
const tryGrab = (w: World, h: Hero): boolean => {
  const frontX = h.x + h.w / 2 + h.face * (h.w / 2 + 3);
  const c = Math.floor(frontX / T);
  const own = Math.floor((h.x + h.w / 2) / T);
  if (c === own) return false;
  const handY = h.y + 4;
  for (let r = Math.floor((handY - 10) / T); r <= Math.floor((handY + 18) / T); r++) {
    const top = r * T;
    if (solid(w, c, r) && !solid(w, c, r - 1) && handY >= top - 10 && handY <= top + 18 && !solid(w, own, r)) {
      h.state = 'hang';
      h.hangC = c;
      h.hangR = r;
      h.x = h.face > 0 ? c * T - h.w - 1 : (c + 1) * T + 1;
      h.y = top - 4;
      h.vx = 0;
      h.vy = 0;
      return true;
    }
  }
  return false;
};

const updateHero = (w: World, inp: Inp, dt: number): void => {
  const h = w.hero;
  if (h.dead) {
    h.deadT += dt;
    h.vy = Math.min(MAX_FALL, h.vy + GRAVITY * dt);
    h.vx = 0;
    moveBody(w, h, dt);
    if (h.deadT > 1.7) w.event = 'restart';
    return;
  }
  h.invuln = Math.max(0, h.invuln - dt);

  const engaged = w.guards.filter((g) => !g.dead && g.alert);
  h.swordOut = engaged.length > 0 && h.state === 'free';

  if (h.state === 'climb') {
    h.climbT += dt;
    const t = Math.min(1, h.climbT / 0.55);
    const up = Math.min(1, t * 1.6);
    const over = Math.max(0, (t - 0.45) / 0.55);
    h.x = h.climbFrom[0] + (h.climbTo[0] - h.climbFrom[0]) * over;
    h.y = h.climbFrom[1] + (h.climbTo[1] - h.climbFrom[1]) * up;
    if (t >= 1) {
      h.state = 'free';
      h.x = h.climbTo[0];
      h.y = h.climbTo[1];
      h.vx = 0;
      h.vy = 0;
      h.minFootY = h.y + h.h;
    }
    return;
  }
  if (h.state === 'hang') {
    h.vx = 0;
    h.vy = 0;
    if (!solid(w, h.hangC, h.hangR)) {
      h.state = 'free';
      h.minFootY = h.y + h.h;
      return;
    }
    if (inp.upEdge || inp.up) {
      const top = h.hangR * T;
      h.state = 'climb';
      h.climbT = 0;
      h.climbFrom = [h.x, h.y];
      h.climbTo = [h.hangC * T + (T - h.w) / 2, top - h.h];
    } else if (inp.down) {
      h.state = 'free';
      h.minFootY = h.y + h.h;
    }
    return;
  }

  // бій
  if (h.act === 'stun' || h.act === 'attack') {
    h.actT += dt;
    if (h.actT >= h.actDur) h.act = 'none';
  }
  if (h.swordOut) {
    let near = engaged[0];
    for (const g of engaged) if (Math.abs(g.x - h.x) < Math.abs(near.x - h.x)) near = g;
    if (h.act === 'none' || h.act === 'parry') h.face = sign(near.x - h.x) || h.face;
    if (inp.attackEdge && h.act === 'none') {
      h.act = 'attack';
      h.actT = 0;
      h.actDur = 0.45;
      h.hitDone = false;
    }
    if (h.act === 'none' && inp.parry) {
      h.act = 'parry';
      h.actT = 0;
    } else if (h.act === 'parry' && !inp.parry) h.act = 'none';
  } else if (h.act === 'attack' || h.act === 'parry') h.act = 'none';

  const busy = h.act === 'attack' || h.act === 'stun';
  h.crouch = h.onGround && inp.down && !h.swordOut;
  const dir = busy || h.crouch || h.act === 'parry' ? 0 : (inp.right ? 1 : 0) - (inp.left ? 1 : 0);
  const maxSp = h.swordOut ? 80 : RUN;
  if (h.onGround) {
    h.vx += clamp(dir * maxSp - h.vx, -1800 * dt, 1800 * dt);
  } else if (dir !== 0) {
    h.vx += clamp(dir * maxSp - h.vx, -600 * dt, 600 * dt);
  }
  if (!h.swordOut && dir !== 0) h.face = dir;

  if (inp.upEdge && h.onGround && !h.swordOut && !h.crouch && !busy) {
    h.vy = JUMP_V;
    h.onGround = false;
    if (Math.abs(h.vx) < 40) h.vx = 0;
  }
  h.vy = Math.min(MAX_FALL, h.vy + GRAVITY * dt);

  const wasGround = h.onGround;
  moveBody(w, h, dt);
  if (!h.onGround) {
    if (wasGround) h.minFootY = h.y + h.h;
    else h.minFootY = Math.min(h.minFootY, h.y + h.h);
  } else if (!wasGround) {
    const d = h.y + h.h - h.minFootY;
    if (d > 5.2 * T) killHero(w, 'Ви розбилися при падінні');
    else if (d > 3.3 * T) {
      h.hp -= 1;
      h.invuln = 0.6;
      spark(w, h.x + h.w / 2, h.y + h.h, '#ef4444', 8);
      if (h.hp <= 0) killHero(w, 'Ви розбилися при падінні');
    }
  }

  if (!h.onGround && inp.up && h.vy > -250 && !h.swordOut) tryGrab(w, h);

  if (h.y > ROWS * T + 60) killHero(w, 'Ви впали в прірву');
};

// ---------- Вартові ----------
const groundAhead = (w: World, g: Guard, dir: number): boolean => {
  const c = Math.floor((g.x + g.w / 2 + dir * (g.w / 2 + 8)) / T);
  const r = Math.floor((g.y + g.h + 3) / T);
  return solid(w, c, r);
};

const updateGuards = (w: World, dt: number): void => {
  const hero = w.hero;
  for (const g of w.guards) {
    if (g.dead) {
      g.deadT += dt;
      continue;
    }
    g.vy = Math.min(MAX_FALL, g.vy + GRAVITY * dt);
    moveBody(w, g, dt);
    if (g.y > ROWS * T + 100) {
      g.dead = true;
      continue;
    }
    const dx = hero.x - g.x;
    const dist = Math.abs(dx);
    const feetDiff = Math.abs(hero.y + hero.h - (g.y + g.h));
    if (!g.alert && !hero.dead && feetDiff < 50 && dist < 240 && hero.state === 'free') g.alert = true;
    if (g.alert && (hero.dead || feetDiff > 100 || dist > 540)) {
      g.alert = false;
      g.act = 'none';
    }
    if (g.act === 'stun') {
      g.actT += dt;
      g.vx *= 0.85;
      if (g.actT >= g.actDur) g.act = 'none';
      continue;
    }
    if (!g.alert) {
      g.vx = 0;
      continue;
    }
    const SP = 52;
    if (g.act === 'attack') {
      g.actT += dt;
      g.vx = 0;
      if (g.actT >= g.actDur) g.act = 'none';
    } else if (g.act === 'parry') {
      g.actT += dt;
      g.vx = 0;
      if (g.actT >= g.parryT) g.act = 'none';
    } else {
      g.face = dx >= 0 ? 1 : -1;
      let vx = 0;
      if (dist > SP + 8) vx = g.face * g.speed;
      else if (dist < SP - 16) vx = -g.face * g.speed * 0.7;
      if (vx !== 0 && !groundAhead(w, g, sign(vx))) vx = 0;
      g.vx = vx;
      if (hero.act === 'attack' && hero.actT < 0.12 && dist < 64 && Math.random() < g.parryP * dt * 9) {
        g.act = 'parry';
        g.actT = 0;
        g.parryT = 0.45;
      }
      g.aiT -= dt;
      if (g.aiT <= 0) {
        g.aiT = (0.45 + Math.random() * 0.7) * (g.strong ? 0.75 : 1);
        if (dist <= SP + 14) {
          const r = Math.random();
          if (r < g.aggr) {
            g.act = 'attack';
            g.actT = 0;
            g.actDur = 0.5;
            g.hitDone = false;
          } else if (r < g.aggr + g.parryP) {
            g.act = 'parry';
            g.actT = 0;
            g.parryT = 0.45 + Math.random() * 0.3;
          }
        }
      }
    }
  }
};

const resolveCombat = (w: World): void => {
  const all: Fighter[] = [w.hero, ...w.guards];
  for (const a of all) {
    if (a.dead || a.act !== 'attack' || a.hitDone || a.actT < 0.12 || a.actT > 0.3) continue;
    for (const t of all) {
      if (t === a || t.dead || (a === w.hero) === (t === w.hero)) continue;
      const dx = t.x + t.w / 2 - (a.x + a.w / 2);
      if (dx * a.face <= 0 || Math.abs(dx) > 58 || Math.abs(t.y + t.h - (a.y + a.h)) > 30) continue;
      a.hitDone = true;
      const blocked = t.act === 'parry' && t.face * -dx > 0;
      if (blocked) {
        a.act = 'stun';
        a.actT = 0;
        a.actDur = 0.45;
        a.vx = -a.face * 130;
        spark(w, (a.x + t.x) / 2 + 10, a.y + a.h * 0.4, '#fde68a', 9);
      } else hurt(w, t, a);
      break;
    }
  }
};

// ---------- Пастки, предмети, камера ----------
const updateTraps = (w: World, dt: number): void => {
  const h = w.hero;
  for (const k of Object.keys(w.gateAmt)) {
    const target = w.gateOpen[k] ? 1 : 0;
    w.gateAmt[k] = clamp(w.gateAmt[k] + (target > w.gateAmt[k] ? dt : -dt) * 0.9, 0, 1);
  }
  if (!h.dead) {
    // шипи
    for (const s of w.spikes) {
      const sx = s.c * T + 6;
      const sy = s.r * T + T - 16;
      if (h.x + h.w > sx && h.x < sx + T - 12 && h.y + h.h > sy && h.y < sy + 16 + 4 && h.state === 'free') {
        killHero(w, 'Ви напоролися на шипи');
        spark(w, h.x + h.w / 2, h.y + h.h, '#ef4444', 14);
      }
    }
    // плити-кнопки
    for (const p of w.plates) {
      const on = h.onGround && h.x + h.w > p.c * T + 6 && h.x < p.c * T + T - 6 && Math.abs(h.y + h.h - (p.r * T + T)) < 4;
      if (on && !p.pressed) {
        w.gateOpen[p.ch] = true;
        w.msg = { text: 'Щось заскрипіло — ґрати відчинилися!', t: 2.4 };
      }
      p.pressed = on || p.pressed;
    }
    // нестійка підлога
    if (h.onGround) {
      const r = Math.floor((h.y + h.h + 1) / T);
      for (const c of [Math.floor((h.x + 2) / T), Math.floor((h.x + h.w - 3) / T)]) {
        if (w.map[r]?.[c] === 'F') {
          const key = `${r},${c}`;
          w.loose[key] = (w.loose[key] ?? 0) + dt;
          if (w.loose[key] > 0.35) {
            w.map[r][c] = ' ';
            delete w.loose[key];
            w.debris.push({ x: c * T, y: r * T, vy: 0, rot: 0 });
          }
        }
      }
    }
    for (const key of Object.keys(w.loose)) {
      // якщо не стоїмо - плита «заспокоюється»
      const [r, c] = key.split(',').map(Number);
      const standing = h.onGround && Math.floor((h.y + h.h + 1) / T) === r && (Math.floor((h.x + 2) / T) === c || Math.floor((h.x + h.w - 3) / T) === c);
      if (!standing) {
        w.loose[key] -= dt * 1.5;
        if (w.loose[key] <= 0) delete w.loose[key];
      }
    }
    // настійки
    for (const it of w.items) {
      if (it.taken) continue;
      const cx = it.c * T + T / 2;
      const cy = it.r * T + T / 2;
      if (Math.abs(h.x + h.w / 2 - cx) < 20 && Math.abs(h.y + h.h / 2 - cy) < 26) {
        it.taken = true;
        if (it.kind === 'h') {
          h.hp = Math.min(h.maxHp, h.hp + 1);
          w.msg = { text: '+1 здоров\'я', t: 1.6 };
        } else {
          h.maxHp += 1;
          h.hp = h.maxHp;
          w.msg = { text: 'Максимум здоров\'я збільшено!', t: 2 };
        }
        spark(w, cx, cy, it.kind === 'h' ? '#f87171' : '#60a5fa', 12);
      }
    }
    // вихід
    if (w.exit && h.x + h.w > w.exit.x && h.x < w.exit.x + w.exit.w && Math.abs(h.y + h.h - (w.exit.y + w.exit.h)) < 12) {
      if (w.guards.every((g) => g.dead || !g.alert)) w.event = 'levelDone';
    }
  }
  // уламки плит
  for (const d of w.debris) {
    d.vy += GRAVITY * dt;
    d.y += d.vy * dt;
    d.rot += dt * 3;
  }
  w.debris = w.debris.filter((d) => d.y < ROWS * T + 80);
  for (const s of w.sparks) {
    s.x += s.vx * dt;
    s.y += s.vy * dt;
    s.vy += 500 * dt;
    s.t -= dt;
  }
  w.sparks = w.sparks.filter((s) => s.t > 0);
  w.msg.t = Math.max(0, w.msg.t - dt);
};

export const updateWorld = (w: World, inp: Inp, dt: number, viewW: number): void => {
  w.time += dt;
  updateHero(w, inp, dt);
  updateGuards(w, dt);
  resolveCombat(w);
  updateTraps(w, dt);
  const target = clamp(w.hero.x + w.hero.w / 2 - viewW * 0.45, 0, w.cols * T - viewW);
  w.camX += (target - w.camX) * Math.min(1, dt * 6);
  inp.upEdge = false;
  inp.attackEdge = false;
};
