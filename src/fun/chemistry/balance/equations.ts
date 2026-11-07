export interface Equation {
  id: string;
  title: string;
  emoji: string;
  note: string;
  left: string[];
  right: string[];
  /** Правильні коефіцієнти: спочатку ліва частина, потім права */
  answer: number[];
}

export const EQUATIONS: Equation[] = [
  { id: 'water', emoji: '💧', title: 'Утворення води', note: 'Водень горить у кисні — утворюється вода. Саме так працюють водневі двигуни.', left: ['H2', 'O2'], right: ['H2O'], answer: [2, 1, 2] },
  { id: 'nacl', emoji: '🧂', title: 'Кухонна сіль', note: 'Із вибухонебезпечного металу натрію й отруйного хлору утворюється звичайна сіль!', left: ['Na', 'Cl2'], right: ['NaCl'], answer: [2, 1, 2] },
  { id: 'mg', emoji: '🎆', title: 'Горіння магнію', note: 'Магній горить сліпучим білим полум\'ям — так роблять бенгальські вогні.', left: ['Mg', 'O2'], right: ['MgO'], answer: [2, 1, 2] },
  { id: 'h2o2', emoji: '🩹', title: 'Розклад пероксиду', note: 'Перекис водню розкладається на воду й кисень — тому шипить на рані.', left: ['H2O2'], right: ['H2O', 'O2'], answer: [2, 2, 1] },
  { id: 'nh3', emoji: '🌾', title: 'Синтез аміаку', note: 'З азоту повітря й водню роблять аміак — основу добрив, що годують пів світу.', left: ['N2', 'H2'], right: ['NH3'], answer: [1, 3, 2] },
  { id: 'zn', emoji: '🧪', title: 'Цинк і кислота', note: 'Метал у соляній кислоті «кипить»: виділяється водень.', left: ['Zn', 'HCl'], right: ['ZnCl2', 'H2'], answer: [1, 2, 1, 1] },
  { id: 'ch4', emoji: '🔥', title: 'Горіння метану', note: 'Так горить газ у вашій кухонній плиті.', left: ['CH4', 'O2'], right: ['CO2', 'H2O'], answer: [1, 2, 1, 2] },
  { id: 'naoh', emoji: '⚖️', title: 'Нейтралізація', note: 'Луг і кислота дають сіль і воду.', left: ['NaOH', 'H2SO4'], right: ['Na2SO4', 'H2O'], answer: [2, 1, 1, 2] },
  { id: 'rust', emoji: '🟫', title: 'Іржавіння заліза', note: 'Залізо повільно реагує з киснем — виходить іржа.', left: ['Fe', 'O2'], right: ['Fe2O3'], answer: [4, 3, 2] },
  { id: 'al', emoji: '✨', title: 'Горіння алюмінію', note: 'Алюміній вкривається тонкою міцною плівкою оксиду — тому не «іржавіє».', left: ['Al', 'O2'], right: ['Al2O3'], answer: [4, 3, 2] },
  { id: 'kclo3', emoji: '🎇', title: 'Розклад бертолетової солі', note: 'Раніше цією реакцією добували кисень у лабораторії.', left: ['KClO3'], right: ['KCl', 'O2'], answer: [2, 2, 3] },
  { id: 'c3h8', emoji: '🏕️', title: 'Горіння пропану', note: 'Пропан у газових балонах для туристів і плит.', left: ['C3H8', 'O2'], right: ['CO2', 'H2O'], answer: [1, 5, 3, 4] },
];

export const parse = (f: string): Record<string, number> => {
  const out: Record<string, number> = {};
  for (const m of f.matchAll(/([A-Z][a-z]?)(\d*)/g)) out[m[1]] = (out[m[1]] ?? 0) + (m[2] ? +m[2] : 1);
  return out;
};

const SUB = '₀₁₂₃₄₅₆₇₈₉';
export const pretty = (f: string) => f.replace(/\d/g, (d) => SUB[+d]);

export const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : a);

export const count = (side: string[], coefs: number[]): Record<string, number> => {
  const t: Record<string, number> = {};
  side.forEach((f, i) => {
    for (const [e, n] of Object.entries(parse(f))) t[e] = (t[e] ?? 0) + n * coefs[i];
  });
  return t;
};
