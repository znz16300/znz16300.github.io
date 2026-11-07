// Логіка файтингу: чиста, без React. Світ 800 × 450, бійці стоять на землі (y = GROUND).
import type { FighterDef } from './fighters';

export const W = 800;
export const H = 450;
export const GROUND = 385;
export const MIN_X = 45;
export const MAX_X = W - 45;
export const ROUND_TIME = 60;
export const GRAVITY = 1900;
export const JUMP_V = 700;
const BOX_W = 22; // півширини хітбокса
const BOX_H = 112;

export interface Inp { left: boolean; right: boolean; jump: boolean; punch: boolean; kick: boolean; special: boolean; block: boolean }
export const noInput = (): Inp => ({ left: false, right: false, jump: false, punch: false, kick: false, special: false, block: false });

export type ActKind = 'punch' | 'kick' | 'special';
interface Act { kind: ActKind; t: number; dur: number; st: number; ac: number; hit: boolean; spawned: boolean }

export interface Fighter {
  def: FighterDef;
  idx: 0 | 1;
  x: number; y: number; vx: number; vy: number;
  face: 1 | -1;
  hp: number; maxHp: number; en: number;
  act: Act | null;
  stun: number;
  blocking: boolean;
  combo: number; comboT: number;
  ko: boolean;
  flash: number;
  prev: Inp;
  walkT: number;
  held: number; // «заморозка» від лози
}

export interface Proj { x: number; y: number; vx: number; owner: 0 | 1; dmg: number; stun: number; kind: 'fire' | 'vine'; life: number; r: number }
export interface Spark { x: number; y: number; t: number; color: string; big: boolean }
export type EventType = 'hit' | 'block' | 'special' | 'ko' | 'round' | 'fight' | 'jump' | 'win';

export interface World {
  f: [Fighter, Fighter];
  proj: Proj[];
  sparks: Spark[];
  phase: 'intro' | 'fight' | 'ko' | 'end';
  t: number; // час у фазі
  timer: number;
  round: number;
  wins: [number, number];
  roundWinner: -1 | 0 | 1 | 2; // 2 - нічия
  matchWinner: -1 | 0 | 1;
  shake: number;
  events: EventType[];
  arena: number;
  banner: string;
}

const emptyFighter = (def: FighterDef, idx: 0 | 1): Fighter => ({
  def, idx, x: idx === 0 ? 240 : 560, y: GROUND, vx: 0, vy: 0, face: idx === 0 ? 1 : -1, hp: def.hp, maxHp: def.hp, en: 0, act: null,
  stun: 0, blocking: false, combo: 0, comboT: 0, ko: false, flash: 0, prev: noInput(), walkT: 0, held: 0,
});

export function createWorld(a: FighterDef, b: FighterDef, arena = 0): World {
  const w: World = {
    f: [emptyFighter(a, 0), emptyFighter(b, 1)], proj: [], sparks: [], phase: 'intro', t: 0, timer: ROUND_TIME, round: 1, wins: [0, 0],
    roundWinner: -1, matchWinner: -1, shake: 0, events: [], arena, banner: 'Раунд 1',
  };
  return w;
}

function resetRound(w: World) {
  w.f = [emptyFighter(w.f[0].def, 0), emptyFighter(w.f[1].def, 1)];
  w.proj = []; w.sparks = []; w.phase = 'intro'; w.t = 0; w.timer = ROUND_TIME; w.roundWinner = -1;
  w.banner = `Раунд ${w.round}`;
  w.events.push('round');
}

const grounded = (f: Fighter) => f.y >= GROUND - 0.5;
const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

const ACTS: Record<'punch' | 'kick', { dur: number; st: number; ac: number }> = {
  punch: { dur: 0.3, st: 0.07, ac: 0.09 },
  kick: { dur: 0.48, st: 0.14, ac: 0.12 },
};
const SPECIAL: Record<string, { dur: number; st: number; ac: number }> = {
  slash: { dur: 0.75, st: 0.2, ac: 0.26 },
  fireball: { dur: 0.55, st: 0.22, ac: 0.05 },
  quake: { dur: 0.85, st: 0.35, ac: 0.18 },
  vine: { dur: 0.6, st: 0.25, ac: 0.05 },
};

function startAct(f: Fighter, kind: ActKind) {
  const p = kind === 'special' ? SPECIAL[f.def.special.kind] : ACTS[kind];
  f.act = { kind, t: 0, dur: p.dur, st: p.st, ac: p.ac, hit: false, spawned: false };
  if (kind === 'special') f.en -= f.def.special.cost;
}

/** Хітбокс удару в абсолютних координатах (null - якщо зараз нема активної фази). */
function attackBox(f: Fighter): { x1: number; x2: number; y1: number; y2: number } | null {
  const a = f.act;
  if (!a || a.hit || a.t < a.st || a.t > a.st + a.ac) return null;
  const s = f.def.scale;
  if (a.kind === 'punch') return box(f, 18, 62 * s, 100 * s, 55 * s);
  if (a.kind === 'kick') return box(f, 18, 80 * s, 70 * s, 12 * s);
  const sp = f.def.special.kind;
  if (sp === 'slash') return box(f, 10, 105 * s, 105 * s, 10 * s);
  if (sp === 'quake') return { x1: f.x - 140 * s, x2: f.x + 140 * s, y1: GROUND - 70, y2: GROUND + 5 };
  return null;
}
function box(f: Fighter, from: number, reach: number, top: number, bottom: number) {
  const x1 = f.x + f.face * from, x2 = f.x + f.face * (from + reach);
  return { x1: Math.min(x1, x2), x2: Math.max(x1, x2), y1: f.y - top, y2: f.y - bottom };
}
const hurt = (f: Fighter) => ({ x1: f.x - BOX_W, x2: f.x + BOX_W, y1: f.y - BOX_H * f.def.scale, y2: f.y });
const overlap = (a: { x1: number; x2: number; y1: number; y2: number }, b: { x1: number; x2: number; y1: number; y2: number }) =>
  a.x1 < b.x2 && a.x2 > b.x1 && a.y1 < b.y2 && a.y2 > b.y1;

function spark(w: World, x: number, y: number, color: string, big = false) { w.sparks.push({ x, y, t: 0, color, big }); }

function applyHit(w: World, att: Fighter, def: Fighter, dmgBase: number, stun: number, kb: number, kind: 'punch' | 'kick' | 'special' | 'proj', ignoreBlock = false) {
  const blocked = def.blocking && !def.ko && grounded(def) && def.stun <= 0 && !ignoreBlock;
  const midY = def.y - 70 * def.def.scale;
  if (blocked) {
    const d = Math.max(1, Math.round(dmgBase * 0.1));
    def.hp = Math.max(1, def.hp - d);
    def.stun = 0.12; def.vx = Math.sign(def.x - att.x) * 140;
    def.en = Math.min(100, def.en + 3);
    spark(w, def.x - def.face * 14, midY, '#93c5fd');
    w.events.push('block');
    return;
  }
  const scale = Math.max(0.5, 1 - 0.12 * att.combo);
  const d = Math.max(1, Math.round(dmgBase * scale));
  def.hp = Math.max(0, def.hp - d);
  def.act = null;
  def.stun = stun;
  def.vx = Math.sign(def.x - att.x || att.face) * kb;
  if (!grounded(def) || kind === 'kick') def.vy = Math.min(def.vy, -220);
  def.flash = 0.18;
  def.comboT = 0;
  att.combo = def.stun > 0 ? att.combo + 1 : 0;
  att.comboT = 1.2;
  att.en = Math.min(100, att.en + (kind === 'punch' ? 6 : kind === 'kick' ? 8 : 3));
  def.en = Math.min(100, def.en + 4);
  spark(w, def.x, midY, kind === 'special' || kind === 'proj' ? '#fb923c' : '#fde047', kind !== 'punch');
  w.shake = Math.max(w.shake, kind === 'punch' ? 0.1 : 0.2);
  w.events.push('hit');
  if (def.hp <= 0 && !def.ko) {
    def.ko = true; def.stun = 99; def.vy = -380; def.vx = Math.sign(def.x - att.x || att.face) * 260; def.act = null;
    w.phase = 'ko'; w.t = 0; w.roundWinner = att.idx; w.shake = 0.5; w.events.push('ko');
  }
}

function endRound(w: World) {
  if (w.roundWinner === 0 || w.roundWinner === 1) w.wins[w.roundWinner] += 1;
  const m = w.wins[0] >= 2 ? 0 : w.wins[1] >= 2 ? 1 : -1;
  if (m >= 0) { w.matchWinner = m as 0 | 1; w.phase = 'end'; w.events.push('win'); return; }
  if (w.roundWinner !== 2) w.round += 1;
  resetRound(w);
}

function stepFighter(w: World, f: Fighter, inp: Inp, foe: Fighter, dt: number) {
  const edge = (k: 'jump' | 'punch' | 'kick' | 'special') => inp[k] && !f.prev[k];
  const canAct = f.stun <= 0 && !f.act && !f.ko && w.phase === 'fight' && f.held <= 0;
  // стан
  if (f.stun > 0 && !f.ko) f.stun -= dt;
  if (f.held > 0) f.held -= dt;
  if (f.flash > 0) f.flash -= dt;
  if (f.comboT > 0) { f.comboT -= dt; if (f.comboT <= 0) f.combo = 0; }
  if (f.stun <= 0 && f.comboT <= 0 && f.combo > 0) f.combo = 0;
  if (!f.ko && w.phase === 'fight') f.en = Math.min(100, f.en + 2.2 * dt);

  const dir = (inp.right ? 1 : 0) - (inp.left ? 1 : 0);
  f.blocking = canAct && inp.block && grounded(f);
  // обличчям до суперника
  if (canAct || (grounded(f) && !f.act && !f.ko)) f.face = foe.x >= f.x ? 1 : -1;

  if (canAct && !f.blocking) {
    if (grounded(f)) {
      f.vx = dir * f.def.speed * (dir * f.face < 0 ? 0.8 : 1);
      if (dir !== 0) f.walkT += dt * 9;
      if (edge('jump')) { f.vy = -JUMP_V; f.vx = dir * f.def.speed * 1.1; w.events.push('jump'); }
    } else f.vx += (dir * f.def.speed - f.vx) * Math.min(1, dt * 4);
    if (edge('special') && f.en >= f.def.special.cost && (grounded(f) || f.def.special.kind === 'fireball' || f.def.special.kind === 'vine')) { startAct(f, 'special'); w.events.push('special'); }
    else if (edge('kick')) startAct(f, 'kick');
    else if (edge('punch')) startAct(f, 'punch');
  } else if (canAct && f.blocking) f.vx = 0;
  else if (grounded(f) && f.stun <= 0 && !f.ko && f.held > 0) f.vx = 0;
  f.prev = { ...inp };

  // дія
  const a = f.act;
  if (a) {
    a.t += dt;
    if (a.kind === 'special') {
      const sp = f.def.special;
      if (sp.kind === 'slash') {
        if (a.t >= a.st && a.t <= a.st + a.ac) f.vx = f.face * 520; else if (a.t < a.st) f.vx = 0; else f.vx *= 0.8;
      } else if (grounded(f)) f.vx = 0;
      if ((sp.kind === 'fireball' || sp.kind === 'vine') && !a.spawned && a.t >= a.st) {
        a.spawned = true;
        const vine = sp.kind === 'vine';
        w.proj.push({ x: f.x + f.face * 40, y: f.y - 66 * f.def.scale, vx: f.face * (vine ? 330 : f.def.id === 'zmiy' ? 560 : 500), owner: f.idx, dmg: sp.dmg, stun: vine ? 0.65 : 0.4, kind: vine ? 'vine' : 'fire', life: 2.2, r: 16 });
      }
      if (sp.kind === 'quake' && a.t >= a.st && !a.hit && a.t < a.st + 0.03) w.shake = Math.max(w.shake, 0.35);
    } else if (grounded(f)) f.vx = 0;
    const box1 = attackBox(f);
    if (box1 && !foe.ko) {
      if (overlap(box1, hurt(foe))) {
        const sp = f.def.special;
        a.hit = true;
        if (a.kind === 'punch') applyHit(w, f, foe, f.def.punch, 0.26, 150, 'punch');
        else if (a.kind === 'kick') applyHit(w, f, foe, f.def.kick, 0.36, 260, 'kick');
        else if (sp.kind === 'quake') applyHit(w, f, foe, sp.dmg, 0.55, 300, 'special', false);
        else applyHit(w, f, foe, sp.dmg, 0.5, 420, 'special', true);
      }
    }
    if (a.t >= a.dur) f.act = null;
  }

  // фізика
  f.vy += GRAVITY * dt;
  f.x += f.vx * dt; f.y += f.vy * dt;
  if (f.y >= GROUND) { f.y = GROUND; if (f.vy > 0) f.vy = 0; if (f.stun > 0 || f.ko) f.vx *= Math.pow(0.02, dt); }
  f.x = clamp(f.x, MIN_X, MAX_X);
}

export function step(w: World, i0: Inp, i1: Inp, dtRaw: number) {
  const dt = Math.min(dtRaw, 0.033);
  w.t += dt;
  if (w.shake > 0) w.shake = Math.max(0, w.shake - dt);
  w.sparks.forEach((s) => (s.t += dt));
  w.sparks = w.sparks.filter((s) => s.t < 0.35);

  if (w.phase === 'intro') {
    if (w.t > 0.8 && w.banner.startsWith('Раунд')) w.banner = 'Бій!';
    if (w.t > 1.5) { w.phase = 'fight'; w.t = 0; w.events.push('fight'); }
  }
  const inA = w.phase === 'fight' ? i0 : noInput();
  const inB = w.phase === 'fight' ? i1 : noInput();
  stepFighter(w, w.f[0], inA, w.f[1], dt);
  stepFighter(w, w.f[1], inB, w.f[0], dt);

  // не проходити крізь суперника на землі
  const [a, b] = w.f;
  if (!a.ko && !b.ko) {
    const dx = b.x - a.x;
    const low = a.y > GROUND - 55 && b.y > GROUND - 55;
    const minD = 40 * ((a.def.scale + b.def.scale) / 2);
    if (low && Math.abs(dx) < minD) {
      const push = (minD - Math.abs(dx)) / 2 * (dx >= 0 ? 1 : -1);
      a.x = clamp(a.x - push, MIN_X, MAX_X); b.x = clamp(b.x + push, MIN_X, MAX_X);
    }
  }

  // снаряди
  for (const p of w.proj) {
    p.x += p.vx * dt; p.life -= dt;
    const tgt = w.f[p.owner === 0 ? 1 : 0];
    if (!tgt.ko && p.life > 0 && overlap({ x1: p.x - p.r, x2: p.x + p.r, y1: p.y - p.r, y2: p.y + p.r }, hurt(tgt))) {
      p.life = 0;
      const att = w.f[p.owner];
      if (p.kind === 'vine') {
        const wasBlocked = tgt.blocking && grounded(tgt);
        applyHit(w, att, tgt, p.dmg, p.stun, 60, 'proj');
        if (!wasBlocked) { tgt.held = 0.5; tgt.stun = Math.max(tgt.stun, 0.6); }
      } else applyHit(w, att, tgt, p.dmg, p.stun, 280, 'proj');
    }
    if (p.x < -30 || p.x > W + 30) p.life = 0;
  }
  w.proj = w.proj.filter((p) => p.life > 0);

  if (w.phase === 'fight') {
    w.timer -= dt;
    if (w.timer <= 0) {
      w.timer = 0;
      const d = a.hp / a.maxHp - b.hp / b.maxHp;
      w.roundWinner = Math.abs(d) < 0.005 ? 2 : d > 0 ? 0 : 1;
      w.phase = 'ko'; w.t = 0; w.banner = 'Час вийшов!';
    }
  } else if (w.phase === 'ko') {
    if (w.t > 2.1) endRound(w);
  }
}

// ---------- Штучний інтелект ----------
export type Level = 'easy' | 'medium' | 'hard' | 'boss';
export const LEVELS: Record<Level, { label: string; react: number; aggr: number; block: number; special: number; jump: number }> = {
  easy: { label: 'Легко', react: 0.38, aggr: 0.4, block: 0.12, special: 0.25, jump: 0.05 },
  medium: { label: 'Середньо', react: 0.24, aggr: 0.6, block: 0.38, special: 0.45, jump: 0.08 },
  hard: { label: 'Складно', react: 0.14, aggr: 0.78, block: 0.62, special: 0.7, jump: 0.1 },
  boss: { label: 'Бос', react: 0.1, aggr: 0.85, block: 0.7, special: 0.85, jump: 0.12 },
};

export interface AI { level: Level; t: number; inp: Inp; blockT: number; pulse: Partial<Inp>; mode: 'approach' | 'wait' | 'retreat' }
export const createAI = (level: Level): AI => ({ level, t: 0, inp: noInput(), blockT: 0, pulse: {}, mode: 'approach' });

const range = (f: Fighter) => 62 * f.def.scale + 30;

export function aiInput(w: World, idx: 0 | 1, ai: AI, dt: number): Inp {
  const me = w.f[idx], foe = w.f[idx === 0 ? 1 : 0];
  const L = LEVELS[ai.level];
  const inp = noInput();
  if (w.phase !== 'fight' || me.ko) return inp;
  ai.t -= dt;
  ai.blockT -= dt;
  const dx = foe.x - me.x, d = Math.abs(dx), toward = dx > 0 ? 'right' : 'left', away = dx > 0 ? 'left' : 'right';
  const foeThreat = (foe.act && foe.act.t < foe.act.st + foe.act.ac + 0.05 && d < range(foe) + 90) || w.proj.some((p) => p.owner !== idx && Math.abs(p.x - me.x) < 170 && Math.sign(p.vx) === Math.sign(me.x - p.x));

  if (foeThreat && ai.blockT <= 0 && Math.random() < L.block * Math.min(1, dt * 14)) ai.blockT = 0.32;
  if (ai.blockT > 0 && me.y >= GROUND - 1) { inp.block = true; return inp; }

  if (ai.t <= 0) {
    ai.t = L.react * (0.7 + Math.random() * 0.6);
    ai.pulse = {};
    const specialReady = me.en >= me.def.special.cost;
    const ranged = me.def.special.kind === 'fireball' || me.def.special.kind === 'vine';
    if (d > range(me) + 40) {
      if (specialReady && ranged && d > 170 && Math.random() < L.special) ai.pulse.special = true;
      else if (Math.random() < L.aggr) ai.mode = 'approach';
      else ai.mode = Math.random() < 0.5 ? 'wait' : 'retreat';
      if (ai.mode === 'approach' && d > 200 && Math.random() < L.jump) ai.pulse.jump = true;
    } else {
      const r = Math.random();
      if (specialReady && !ranged && Math.random() < L.special) ai.pulse.special = true;
      else if (r < L.aggr * 0.55) ai.pulse.punch = true;
      else if (r < L.aggr * 0.95) ai.pulse.kick = true;
      else ai.mode = 'retreat';
      if (!ai.pulse.punch && !ai.pulse.kick && !ai.pulse.special) ai.mode = Math.random() < 0.5 ? 'retreat' : 'wait';
      if (Math.random() < L.jump * 0.5) ai.pulse.jump = true;
    }
  }
  if (ai.mode === 'approach' && d > range(me) - 8) inp[toward] = true;
  if (ai.mode === 'retreat') inp[away] = true;
  Object.assign(inp, ai.pulse);
  ai.pulse = {}; // імпульс - один кадр
  return inp;
}
