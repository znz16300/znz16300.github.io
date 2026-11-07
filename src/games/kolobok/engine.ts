// Рушій гри «Колобок у лабіринті»: рух по клітинках, ШІ звірів, режими переслідування/переляку.
import { MAZE, TUNNEL_ROW } from './maze';

export const COLS = MAZE[0].length;
export const ROWS = MAZE.length;

export type Dir = [number, number];
export const UP: Dir = [0, -1];
export const LEFT: Dir = [-1, 0];
export const DOWN: Dir = [0, 1];
export const RIGHT: Dir = [1, 0];
const DIRS: Dir[] = [UP, LEFT, DOWN, RIGHT]; // порядок для розв'язання нічиїх

export interface Mover {
  tx: number;
  ty: number;
  dx: number;
  dy: number;
  t: number; // 0..1 - прогрес до наступної клітинки
}
export interface Hero extends Mover {
  desired: Dir;
  mouth: number;
}
export type GState = 'house' | 'leaving' | 'active' | 'eaten';
export interface Ghost extends Mover {
  kind: number; // 0 лисиця, 1 вовк, 2 ведмідь, 3 заєць
  state: GState;
  frightened: boolean;
  release: number;
  home: [number, number];
  bob: number;
}
export interface Popup {
  x: number;
  y: number;
  text: string;
  t: number;
}
export interface State {
  dots: boolean[][];
  pellets: boolean[][];
  dotsLeft: number;
  dotsEaten: number;
  hero: Hero;
  ghosts: Ghost[];
  score: number;
  lives: number;
  level: number;
  modeIdx: number;
  modeT: number;
  frightT: number;
  chain: number;
  fruit: { t: number } | null;
  fruitIdx: number;
  ready: number;
  dying: number;
  levelEnd: number;
  popups: Popup[];
  time: number;
  hudDirty: boolean;
  event: 'over' | null;
}

export const GHOST_NAMES = ['Лисиця', 'Вовк', 'Ведмідь', 'Заєць'];
const EXIT: [number, number] = [9, 7]; // клітинка над дверима хатинки (col,row)
const DEN: [number, number] = [9, 10];
const CORNERS: [number, number][] = [
  [17, 1],
  [1, 1],
  [17, 19],
  [1, 19],
];
const MODES = [7, 20, 7, 20, 5, 20, 5, Infinity]; // розсіювання / переслідування (парні - розсіювання)
const FRUIT_POS: [number, number] = [9, 12];

const chAt = (c: number, r: number): string => MAZE[r]?.[c] ?? '#';

const heroCan = (c: number, r: number): boolean => {
  if (c < 0 || c >= COLS) return r === TUNNEL_ROW;
  const ch = chAt(c, r);
  return ch !== '#' && ch !== '-' && ch !== 'g';
};
const ghostCan = (g: Ghost, c: number, r: number): boolean => {
  if (c < 0 || c >= COLS) return r === TUNNEL_ROW;
  const ch = chAt(c, r);
  if (ch === '#') return false;
  if (ch === '-') return g.state === 'leaving' || g.state === 'eaten';
  if (ch === 'g') return g.state !== 'active';
  return true;
};

const wrapCol = (c: number) => (c < 0 ? COLS - 1 : c >= COLS ? 0 : c);

export const posOf = (m: Mover): [number, number] => [m.tx + m.dx * m.t, m.ty + m.dy * m.t];

const reverse = (m: Mover) => {
  if (m.dx === 0 && m.dy === 0) return;
  m.tx = wrapCol(m.tx + m.dx);
  m.ty += m.dy;
  m.dx = -m.dx;
  m.dy = -m.dy;
  m.t = 1 - m.t;
};

const advance = (m: Mover, dist: number, choose: (m: Mover) => Dir | null): void => {
  let rem = dist;
  let guard = 0;
  while (rem > 1e-6 && guard++ < 6) {
    if (m.dx === 0 && m.dy === 0) {
      const d = choose(m);
      if (!d) return;
      m.dx = d[0];
      m.dy = d[1];
      m.t = 0;
    }
    const need = 1 - m.t;
    if (rem < need) {
      m.t += rem;
      return;
    }
    rem -= need;
    m.tx = wrapCol(m.tx + m.dx);
    m.ty += m.dy;
    m.t = 0;
    const d = choose(m);
    if (d) {
      m.dx = d[0];
      m.dy = d[1];
    } else {
      m.dx = 0;
      m.dy = 0;
      return;
    }
  }
};

// ---------- Створення ----------
const parse = () => {
  const dots: boolean[][] = [];
  const pellets: boolean[][] = [];
  let n = 0;
  for (let r = 0; r < ROWS; r++) {
    dots.push([]);
    pellets.push([]);
    for (let c = 0; c < COLS; c++) {
      const ch = MAZE[r][c];
      dots[r].push(ch === '.');
      pellets[r].push(ch === 'o');
      if (ch === '.' || ch === 'o') n++;
    }
  }
  return { dots, pellets, n };
};

const heroStart = (): Hero => {
  let tx = 9;
  let ty = 16;
  for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) if (MAZE[r][c] === 'P') [tx, ty] = [c, r];
  return { tx, ty, dx: 0, dy: 0, t: 0, desired: LEFT, mouth: 0 };
};

const makeGhosts = (level: number): Ghost[] => {
  const k = Math.max(0.4, 1 - 0.1 * (level - 1));
  const starts: [number, number][] = [
    [9, 7],
    [9, 10],
    [8, 10],
    [10, 10],
  ];
  const releases = [0, 2 * k, 5 * k, 8 * k];
  return starts.map((s, i) => ({
    tx: s[0],
    ty: s[1],
    dx: i === 0 ? -1 : 0,
    dy: 0,
    t: 0,
    kind: i,
    state: i === 0 ? 'active' : 'house',
    frightened: false,
    release: releases[i],
    home: s,
    bob: i,
  }));
};

export const createState = (level = 1, score = 0, lives = 3): State => {
  const p = parse();
  return {
    dots: p.dots,
    pellets: p.pellets,
    dotsLeft: p.n,
    dotsEaten: 0,
    hero: heroStart(),
    ghosts: makeGhosts(level),
    score,
    lives,
    level,
    modeIdx: 0,
    modeT: 0,
    frightT: 0,
    chain: 0,
    fruit: null,
    fruitIdx: 0,
    ready: 1.8,
    dying: 0,
    levelEnd: 0,
    popups: [],
    time: 0,
    hudDirty: true,
    event: null,
  };
};

const resetPositions = (s: State) => {
  s.hero = heroStart();
  s.ghosts = makeGhosts(s.level);
  s.modeIdx = 0;
  s.modeT = 0;
  s.frightT = 0;
  s.chain = 0;
  s.ready = 1.6;
};

// ---------- Швидкості ----------
const heroSpeed = (s: State) => 5.6 + Math.min(s.level, 10) * 0.12;
const ghostSpeed = (s: State, g: Ghost): number => {
  const base = 4.8 + Math.min(s.level, 10) * 0.18;
  if (g.state === 'eaten') return 9;
  if (g.state === 'house') return 0;
  let v = base;
  if (g.state === 'leaving') v = 3;
  else if (g.frightened) v = base * 0.55;
  if (g.ty === TUNNEL_ROW && (g.tx < 6 || g.tx > 12)) v *= 0.6;
  return v;
};

// ---------- ШІ ----------
const isChase = (s: State) => s.modeIdx % 2 === 1;

const targetFor = (s: State, g: Ghost): [number, number] => {
  if (g.state === 'leaving') return EXIT;
  if (g.state === 'eaten') return DEN;
  const h = s.hero;
  const hd: Dir = h.dx === 0 && h.dy === 0 ? h.desired : [h.dx, h.dy];
  if (!isChase(s)) return CORNERS[g.kind];
  switch (g.kind) {
    case 0: // лисиця: женеться прямо за Колобком
      return [h.tx, h.ty];
    case 1: // вовк: випереджає на 3 клітинки
      return [h.tx + hd[0] * 3, h.ty + hd[1] * 3];
    case 2: {
      // ведмідь: наздоганяє здалеку, а зблизька відступає в свій кут
      const d = Math.hypot(g.tx - h.tx, g.ty - h.ty);
      return d > 7 ? [h.tx, h.ty] : CORNERS[2];
    }
    default:
      // заєць: метушливий - то женеться, то тікає в кут
      return Math.random() < 0.5 ? [h.tx, h.ty] : CORNERS[3];
  }
};

const ghostChoose = (s: State, g: Ghost): Dir | null => {
  if (g.state === 'leaving' && g.tx === EXIT[0] && g.ty === EXIT[1]) g.state = 'active';
  if (g.state === 'eaten' && g.tx === DEN[0] && g.ty === DEN[1]) {
    g.state = 'leaving';
    g.frightened = false;
  }
  const back: Dir = [-g.dx, -g.dy];
  let cand = DIRS.filter((d) => ghostCan(g, g.tx + d[0], g.ty + d[1]) && !(d[0] === back[0] && d[1] === back[1] && (g.dx !== 0 || g.dy !== 0)));
  if (cand.length === 0) {
    cand = DIRS.filter((d) => ghostCan(g, g.tx + d[0], g.ty + d[1]));
    if (cand.length === 0) return null;
  }
  if (g.frightened && g.state === 'active') return cand[Math.floor(Math.random() * cand.length)];
  const [tx, ty] = targetFor(s, g);
  let best = cand[0];
  let bd = Infinity;
  for (const d of cand) {
    const dd = (g.tx + d[0] - tx) ** 2 + (g.ty + d[1] - ty) ** 2;
    if (dd < bd) {
      bd = dd;
      best = d;
    }
  }
  return best;
};

// ---------- Оновлення ----------
export const setDesired = (s: State, d: Dir) => {
  s.hero.desired = d;
};

const addPopup = (s: State, x: number, y: number, text: string) => s.popups.push({ x, y, text, t: 1 });

const startDeath = (s: State) => {
  s.dying = 1.4;
};

export const updateState = (s: State, dt: number): void => {
  s.time += dt;
  for (const p of s.popups) p.t -= dt;
  s.popups = s.popups.filter((p) => p.t > 0);
  for (const g of s.ghosts) g.bob += dt;

  if (s.ready > 0) {
    s.ready -= dt;
    return;
  }
  if (s.dying > 0) {
    s.dying -= dt;
    if (s.dying <= 0) {
      s.lives -= 1;
      s.hudDirty = true;
      if (s.lives <= 0) s.event = 'over';
      else resetPositions(s);
    }
    return;
  }
  if (s.levelEnd > 0) {
    s.levelEnd -= dt;
    if (s.levelEnd <= 0) {
      const n = createState(s.level + 1, s.score, s.lives);
      Object.assign(s, n);
    }
    return;
  }

  // режими
  if (s.frightT > 0) {
    s.frightT -= dt;
    if (s.frightT <= 0) {
      s.frightT = 0;
      for (const g of s.ghosts) g.frightened = false;
      s.chain = 0;
    }
  } else {
    s.modeT += dt;
    if (s.modeT >= MODES[s.modeIdx]) {
      s.modeIdx++;
      s.modeT = 0;
      for (const g of s.ghosts) if (g.state === 'active') reverse(g);
    }
  }

  // Колобок
  const h = s.hero;
  const hd = h.desired;
  if ((h.dx !== 0 || h.dy !== 0) && hd[0] === -h.dx && hd[1] === -h.dy) reverse(h);
  advance(h, heroSpeed(s) * dt, (m) => {
    if (heroCan(m.tx + hd[0], m.ty + hd[1])) return hd;
    const cur: Dir = [m.dx, m.dy];
    if ((cur[0] !== 0 || cur[1] !== 0) && heroCan(m.tx + cur[0], m.ty + cur[1])) return cur;
    return null;
  });
  if (h.dx !== 0 || h.dy !== 0) h.mouth += dt * 12;

  // їжа: найближча клітинка
  const [hx, hy] = posOf(h);
  const nc = wrapCol(Math.round(hx));
  const nr = Math.round(hy);
  if (Math.abs(hx - Math.round(hx)) < 0.5 && s.dots[nr]?.[nc]) {
    s.dots[nr][nc] = false;
    s.dotsLeft--;
    s.dotsEaten++;
    s.score += 10;
    s.hudDirty = true;
  }
  if (s.pellets[nr]?.[nc]) {
    s.pellets[nr][nc] = false;
    s.dotsLeft--;
    s.dotsEaten++;
    s.score += 50;
    s.chain = 0;
    s.frightT = Math.max(2.5, 8.5 - 0.9 * (s.level - 1));
    for (const g of s.ghosts) {
      if (g.state === 'active' || g.state === 'leaving') {
        if (g.state === 'active') reverse(g);
        g.frightened = true;
      }
    }
    s.hudDirty = true;
  }

  // бонус - яблуко
  const thresholds = [60, 120];
  if (!s.fruit && s.fruitIdx < thresholds.length && s.dotsEaten >= thresholds[s.fruitIdx]) {
    s.fruit = { t: 10 };
    s.fruitIdx++;
  }
  if (s.fruit) {
    s.fruit.t -= dt;
    if (s.fruit.t <= 0) s.fruit = null;
    else if (nc === FRUIT_POS[0] && nr === FRUIT_POS[1] && Math.abs(hx - nc) < 0.5) {
      const pts = 100 * Math.min(s.level, 7);
      s.score += pts;
      addPopup(s, FRUIT_POS[0], FRUIT_POS[1], `+${pts}`);
      s.fruit = null;
      s.hudDirty = true;
    }
  }

  // звірі
  for (const g of s.ghosts) {
    if (g.state === 'house') {
      g.release -= dt;
      if (g.release <= 0) g.state = 'leaving';
      continue;
    }
    advance(g, ghostSpeed(s, g) * dt, () => ghostChoose(s, g));
  }

  // зіткнення
  const [px, py] = posOf(h);
  for (const g of s.ghosts) {
    if (g.state === 'house' || g.state === 'eaten') continue;
    const [gx, gy] = posOf(g);
    if (Math.hypot(gx - px, gy - py) < 0.62) {
      if (g.frightened) {
        g.state = 'eaten';
        g.frightened = false;
        s.chain++;
        const pts = 200 * 2 ** (s.chain - 1);
        s.score += pts;
        addPopup(s, gx, gy, `+${pts}`);
        s.hudDirty = true;
      } else {
        startDeath(s);
        return;
      }
    }
  }

  if (s.dotsLeft <= 0) {
    s.levelEnd = 1.8;
    s.hudDirty = true;
  }
};
