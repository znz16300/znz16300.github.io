// Чиста фізика сторінки (без React) - легко перевірити окремо.

/** Час падіння з висоти h (м) при прискоренні g: h = g t² / 2 */
export const fallTime = (h: number, g: number): number => Math.sqrt((2 * h) / g);

/** Швидкість у момент удару: v = g t */
export const impactSpeed = (h: number, g: number): number => Math.sqrt(2 * g * h);

/** Дальність польоту при кидку з рівня землі: R = v² sin2α / g */
export const throwRange = (v: number, angleDeg: number, g: number): number => {
  const a = (angleDeg * Math.PI) / 180;
  return (v * v * Math.sin(2 * a)) / g;
};

/** Час польоту: T = 2 v sinα / g */
export const flightTime = (v: number, angleDeg: number, g: number): number => {
  const a = (angleDeg * Math.PI) / 180;
  return (2 * v * Math.sin(a)) / g;
};

/** Координати м'яча в момент t */
export const ballAt = (v: number, angleDeg: number, g: number, t: number): { x: number; y: number } => {
  const a = (angleDeg * Math.PI) / 180;
  return { x: v * Math.cos(a) * t, y: Math.max(0, v * Math.sin(a) * t - 0.5 * g * t * t) };
};

/** Максимальна швидкість кидка в грі, м/с */
export const V_MAX = 25;
/** Дальність при максимальній швидкості й 45° - ширина "світу" гри */
export const maxRange = (g: number): number => (V_MAX * V_MAX) / g;

/** Красивий крок розмітки лінійки (1, 2, 5, 10, 20, 50 …) так, щоб було ~n поділок */
export const niceStep = (total: number, n = 6): number => {
  const raw = total / n;
  const pow = Math.pow(10, Math.floor(Math.log10(raw)));
  const m = raw / pow;
  return (m < 1.5 ? 1 : m < 3.5 ? 2 : m < 7.5 ? 5 : 10) * pow;
};
