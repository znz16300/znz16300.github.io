// Налаштування віртуальних стіків (зберігаються в localStorage).
export interface StickSettings {
  yawSens: number; // чутливість рискання (лівий стік, вісь X)
  rollSens: number; // чутливість крену (правий стік, вісь X)
  pitchSens: number; // чутливість тангажу (правий стік, вісь Y)
  expo: number; // експонента 0..1 (м'якість біля центру)
  dead: number; // мертва зона 0..0.3
  invertPitch: boolean; // інверсія тангажу
  size: number; // розмір стіків, множник
}

export const DEFAULT_SETTINGS: StickSettings = { yawSens: 1, rollSens: 1, pitchSens: 1, expo: 0, dead: 0.03, invertPitch: false, size: 1 };
const KEY = 'kiosk-fpv-stick-settings';

const num = (v: unknown, d: number, a: number, b: number) => (typeof v === 'number' && isFinite(v) ? Math.min(b, Math.max(a, v)) : d);

export const loadSettings = (): StickSettings => {
  try {
    const o = JSON.parse(localStorage.getItem(KEY) || '{}');
    const d = DEFAULT_SETTINGS;
    return {
      yawSens: num(o.yawSens, d.yawSens, 0.4, 1.6),
      rollSens: num(o.rollSens, d.rollSens, 0.4, 1.6),
      pitchSens: num(o.pitchSens, d.pitchSens, 0.4, 1.6),
      expo: num(o.expo, d.expo, 0, 1),
      dead: num(o.dead, d.dead, 0, 0.3),
      invertPitch: !!o.invertPitch,
      size: num(o.size, d.size, 0.7, 1.4),
    };
  } catch {
    return { ...DEFAULT_SETTINGS };
  }
};
export const saveSettings = (s: StickSettings) => {
  try {
    localStorage.setItem(KEY, JSON.stringify(s));
  } catch {
    /* ignore */
  }
};

/** Обробка осі стіка: мертва зона -> експонента -> чутливість. */
export const shape = (v: number, sens: number, expo: number, dead: number): number => {
  let a = Math.abs(v);
  if (a <= dead) return 0;
  a = (a - dead) / (1 - dead);
  a = (1 - expo) * a + expo * a * a * a;
  return Math.sign(v) * Math.min(1, a * sens);
};
