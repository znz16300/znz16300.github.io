// Дата-залежний вибір: «квіз дня» та «загадка тижня» однакові для всіх протягом дня/тижня, а потім змінюються.

export const hashStr = (s: string): number => {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
};

/** Детермінований генератор випадкових чисел 0..1 */
export const mulberry32 = (seed: number) => {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

export const shuffled = <T,>(arr: readonly T[], rng: () => number = Math.random): T[] => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const pad = (n: number) => String(n).padStart(2, '0');

/** Ключ сьогоднішнього дня за місцевим часом: 2026-11-05 */
export const todayKey = (d: Date = new Date()): string => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

export const formatDate = (d: Date): string => `${pad(d.getDate())}.${pad(d.getMonth() + 1)}.${d.getFullYear()}`;

/** Номер тижня (змінюється щопонеділка) */
export const weekIndex = (d: Date = new Date()): number =>
  Math.floor((Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 86400000 + 3) / 7);

/** Понеділок тижня з номером idx (місцевий час) */
export const weekStart = (idx: number): Date => {
  const utcDays = idx * 7 - 3;
  const u = new Date(utcDays * 86400000);
  return new Date(u.getUTCFullYear(), u.getUTCMonth(), u.getUTCDate());
};
