import type { Level } from './trace';

const W = (c: number, r: number) => ({ c, r });

export const LEVELS: Level[] = [
  { source: { c: 0, r: 4, dir: 0 }, target: W(6, 1), walls: [], max: 1 },
  { source: { c: 0, r: 0, dir: 1 }, target: W(7, 5), walls: [W(3, 5), W(1, 5)], max: 2 },
  { source: { c: 0, r: 2, dir: 0 }, target: W(4, 5), walls: [W(3, 2), W(4, 3)], max: 2 },
  { source: { c: 8, r: 0, dir: 2 }, target: W(1, 5), walls: [W(4, 0), W(1, 3)], max: 2 },
  { source: { c: 0, r: 5, dir: 0 }, target: W(2, 0), walls: [W(4, 5), W(1, 3), W(2, 3)], max: 3 },
  { source: { c: 4, r: 0, dir: 1 }, target: W(4, 5), walls: [W(4, 2), W(4, 3)], max: 4 },
  { source: { c: 0, r: 0, dir: 0 }, target: W(0, 5), walls: [W(0, 2), W(0, 3), W(1, 5)], max: 4 },
  { source: { c: 8, r: 5, dir: 2 }, target: W(0, 0), walls: [W(4, 5), W(6, 5), W(2, 0), W(0, 2), W(1, 0)], max: 5 },
];
