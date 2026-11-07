// Рух променя по клітинках: 0 - вправо, 1 - вниз, 2 - вліво, 3 - вгору. Дзеркала: '/' і '\'.
export const COLS = 9;
export const ROWS = 6;
export type Mirror = '/' | '\\';
export const DX = [1, 0, -1, 0];
export const DY = [0, 1, 0, -1];

export interface Level {
  source: { c: number; r: number; dir: number };
  target: { c: number; r: number };
  walls: { c: number; r: number }[];
  /** скільки дзеркал дозволено поставити */
  max: number;
}

/** '/' : вправо->вгору, вгору->вправо, вліво->вниз, вниз->вліво; '\\' : вправо->вниз, вниз->вправо, вліво->вгору, вгору->вліво */
export const reflect = (dir: number, m: Mirror): number => {
  const slash = [3, 2, 1, 0];
  const back = [1, 0, 3, 2];
  return (m === '/' ? slash : back)[dir];
};

export interface TraceResult {
  /** вершини ламаної в координатах клітинок (центри) */
  points: { x: number; y: number }[];
  hit: boolean;
}

export const key = (c: number, r: number) => `${c},${r}`;

export function trace(level: Level, mirrors: Map<string, Mirror>): TraceResult {
  let { c, r, dir } = level.source;
  const points = [{ x: c + 0.5, y: r + 0.5 }];
  const walls = new Set(level.walls.map((w) => key(w.c, w.r)));
  for (let step = 0; step < 200; step++) {
    c += DX[dir];
    r += DY[dir];
    if (c < 0 || c >= COLS || r < 0 || r >= ROWS) {
      points.push({ x: c + 0.5 - DX[dir] * 0.5, y: r + 0.5 - DY[dir] * 0.5 });
      return { points, hit: false };
    }
    if (walls.has(key(c, r))) {
      points.push({ x: c + 0.5 - DX[dir] * 0.5, y: r + 0.5 - DY[dir] * 0.5 });
      return { points, hit: false };
    }
    points.push({ x: c + 0.5, y: r + 0.5 });
    if (c === level.target.c && r === level.target.r) return { points, hit: true };
    const m = mirrors.get(key(c, r));
    if (m) dir = reflect(dir, m);
  }
  return { points, hit: false };
}

/** Мінімальна кількість дзеркал, що розв'язує рівень (перебір; для перевірки рівнів) */
export function solveMin(level: Level): number {
  const free: { c: number; r: number }[] = [];
  const walls = new Set(level.walls.map((w) => key(w.c, w.r)));
  for (let r = 0; r < ROWS; r++)
    for (let c = 0; c < COLS; c++) {
      if (walls.has(key(c, r))) continue;
      if (c === level.source.c && r === level.source.r) continue;
      if (c === level.target.c && r === level.target.r) continue;
      free.push({ c, r });
    }
  const rec = (start: number, left: number, m: Map<string, Mirror>): boolean => {
    if (trace(level, m).hit) return true;
    if (left === 0) return false;
    for (let i = start; i < free.length; i++) {
      for (const t of ['/', '\\'] as Mirror[]) {
        m.set(key(free[i].c, free[i].r), t);
        if (rec(i + 1, left - 1, m)) return true;
        m.delete(key(free[i].c, free[i].r));
      }
    }
    return false;
  };
  for (let k = 0; k <= level.max; k++) {
    // перебір з рівно ≤k дзеркалами за зростанням
    const limited = (kk: number) => rec(0, kk, new Map());
    if (limited(k)) return k;
  }
  return -1;
}
