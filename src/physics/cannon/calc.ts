// Фізика польоту снаряда (без опору повітря). Метри, секунди, градуси.
export const G = 9.81;
export const rad = (deg: number) => (deg * Math.PI) / 180;

/** Положення снаряда в момент t (x - вздовж, y - висота над землею) */
export const pos = (v: number, angleDeg: number, t: number) => ({
  x: v * Math.cos(rad(angleDeg)) * t,
  y: v * Math.sin(rad(angleDeg)) * t - 0.5 * G * t * t,
});

export const flightTime = (v: number, angleDeg: number) => (2 * v * Math.sin(rad(angleDeg))) / G;
export const range = (v: number, angleDeg: number) => (v * v * Math.sin(2 * rad(angleDeg))) / G;
export const maxHeight = (v: number, angleDeg: number) => (v * Math.sin(rad(angleDeg))) ** 2 / (2 * G);

export const V_MIN = 10;
export const V_MAX = 34;
