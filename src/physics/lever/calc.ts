// Важіль: момент сили = маса × плече. Слоти -5…-1 (ліворуч) та 1…5 (праворуч).
export type Load = Map<number, number[]>;
export const MASSES = [1, 2, 5];
export const SLOTS = [-5, -4, -3, -2, -1, 1, 2, 3, 4, 5];

export const torque = (load: Load, side?: 'L' | 'R'): number => {
  let t = 0;
  load.forEach((ms, slot) => {
    if (side === 'L' && slot > 0) return;
    if (side === 'R' && slot < 0) return;
    for (const m of ms) t += m * Math.abs(slot);
  });
  return t;
};

export const count = (load: Load): number => {
  let n = 0;
  load.forEach((ms) => (n += ms.length));
  return n;
};

/** Найменше число гир (маси з MASSES) на правому боці (слоти 1…5), що дають момент T. Повертає null, якщо за ≤ maxN не вдається. */
export function minWeights(T: number, maxN = 4): number | null {
  const options: number[] = [];
  for (const m of MASSES) for (let d = 1; d <= 5; d++) options.push(m * d);
  let best: number | null = null;
  const rec = (left: number, n: number, start: number) => {
    if (best != null && n >= best) return;
    if (left === 0) {
      best = n;
      return;
    }
    if (n >= maxN) return;
    for (let i = start; i < options.length; i++) if (options[i] <= left) rec(left - options[i], n + 1, i);
  };
  rec(T, 0, 0);
  return best;
}
