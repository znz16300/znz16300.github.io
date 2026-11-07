export type AtomEl = 'H' | 'C' | 'N' | 'O' | 'Cl';

export const ATOMS: Record<AtomEl, { name: string; color: string; r: number; text: string }> = {
  H: { name: 'Водень', color: '#e2e8f0', r: 0.26, text: '#0f172a' },
  C: { name: 'Вуглець', color: '#475569', r: 0.4, text: '#fff' },
  N: { name: 'Азот', color: '#3b82f6', r: 0.38, text: '#fff' },
  O: { name: 'Кисень', color: '#ef4444', r: 0.38, text: '#fff' },
  Cl: { name: 'Хлор', color: '#22c55e', r: 0.45, text: '#fff' },
};
export const ORDER: AtomEl[] = ['H', 'C', 'N', 'O', 'Cl'];

export interface Mol {
  id: string;
  name: string;
  atoms: { el: AtomEl; x: number; y: number }[];
  bonds: [number, number, number][];
  fact: string;
}

export const MOLS: Mol[] = [
  { id: 'h2', name: 'Водень', atoms: [{ el: 'H', x: -0.55, y: 0 }, { el: 'H', x: 0.55, y: 0 }], bonds: [[0, 1, 1]], fact: 'Найлегший газ. Паливо майбутнього: при горінні утворює лише воду.' },
  { id: 'o2', name: 'Кисень', atoms: [{ el: 'O', x: -0.6, y: 0 }, { el: 'O', x: 0.6, y: 0 }], bonds: [[0, 1, 2]], fact: 'Газ, яким ми дихаємо. Без нього не горить вогонь.' },
  { id: 'n2', name: 'Азот', atoms: [{ el: 'N', x: -0.6, y: 0 }, { el: 'N', x: 0.6, y: 0 }], bonds: [[0, 1, 3]], fact: 'Складає 78% повітря. Потрійний зв\'язок дуже міцний, тому азот інертний.' },
  { id: 'hcl', name: 'Хлороводень', atoms: [{ el: 'H', x: -0.7, y: 0 }, { el: 'Cl', x: 0.6, y: 0 }], bonds: [[0, 1, 1]], fact: 'Розчин у воді — соляна кислота, що є в нашому шлунку.' },
  { id: 'h2o', name: 'Вода', atoms: [{ el: 'O', x: 0, y: -0.25 }, { el: 'H', x: -0.85, y: 0.5 }, { el: 'H', x: 0.85, y: 0.5 }], bonds: [[0, 1, 1], [0, 2, 1]], fact: 'Молекула води «зігнута» (кут ≈ 104,5°). Через це вода — чудовий розчинник.' },
  { id: 'co2', name: 'Вуглекислий газ', atoms: [{ el: 'C', x: 0, y: 0 }, { el: 'O', x: -1.1, y: 0 }, { el: 'O', x: 1.1, y: 0 }], bonds: [[0, 1, 2], [0, 2, 2]], fact: 'Видихаємо його ми, виділяють машини. Рослини використовують його для фотосинтезу.' },
  { id: 'o3', name: 'Озон', atoms: [{ el: 'O', x: 0, y: -0.25 }, { el: 'O', x: -0.9, y: 0.45 }, { el: 'O', x: 0.9, y: 0.45 }], bonds: [[0, 1, 1], [0, 2, 2]], fact: 'Озоновий шар у верхніх шарах атмосфери захищає нас від ультрафіолету.' },
  { id: 'nh3', name: 'Аміак', atoms: [{ el: 'N', x: 0, y: -0.2 }, { el: 'H', x: -0.9, y: 0.5 }, { el: 'H', x: 0, y: 0.8 }, { el: 'H', x: 0.9, y: 0.5 }], bonds: [[0, 1, 1], [0, 2, 1], [0, 3, 1]], fact: 'Різкий запах нашатирного спирту. З аміаку виробляють добрива.' },
  { id: 'h2o2', name: 'Пероксид водню', atoms: [{ el: 'H', x: -1.2, y: -0.3 }, { el: 'O', x: -0.45, y: 0.1 }, { el: 'O', x: 0.45, y: -0.1 }, { el: 'H', x: 1.2, y: 0.3 }], bonds: [[0, 1, 1], [1, 2, 1], [2, 3, 1]], fact: 'Розчин H₂O₂ (3%) — «перекис» з аптечки. Виділяє кисень і дезінфікує рану.' },
  { id: 'ch4', name: 'Метан', atoms: [{ el: 'C', x: 0, y: 0 }, { el: 'H', x: -0.95, y: -0.6 }, { el: 'H', x: 0.95, y: -0.6 }, { el: 'H', x: -0.7, y: 0.85 }, { el: 'H', x: 0.7, y: 0.85 }], bonds: [[0, 1, 1], [0, 2, 1], [0, 3, 1], [0, 4, 1]], fact: 'Основа природного газу, який горить у газових плитах.' },
  { id: 'c2h4', name: 'Етилен', atoms: [{ el: 'C', x: -0.6, y: 0 }, { el: 'C', x: 0.6, y: 0 }, { el: 'H', x: -1.3, y: -0.8 }, { el: 'H', x: -1.3, y: 0.8 }, { el: 'H', x: 1.3, y: -0.8 }, { el: 'H', x: 1.3, y: 0.8 }], bonds: [[0, 1, 2], [0, 2, 1], [0, 3, 1], [1, 4, 1], [1, 5, 1]], fact: 'Рослини виділяють етилен, щоб швидше дозрівали плоди. Ось чому банан біля яблука дозріває швидше.' },
];

export type Counts = Record<AtomEl, number>;
export const emptyCounts = (): Counts => ({ H: 0, C: 0, N: 0, O: 0, Cl: 0 });
export const molCounts = (m: Mol): Counts => {
  const c = emptyCounts();
  m.atoms.forEach((a) => (c[a.el] += 1));
  return c;
};
export const same = (a: Counts, b: Counts) => ORDER.every((e) => a[e] === b[e]);
export const findMol = (c: Counts) => MOLS.find((m) => same(molCounts(m), c));

const SUB = '₀₁₂₃₄₅₆₇₈₉';
export const formula = (c: Counts): string => {
  // Hill-подібний запис: C, H, потім за алфавітом; для неорганіки - H першим
  const order: AtomEl[] = c.C > 0 ? ['C', 'H', 'N', 'O', 'Cl'] : ['H', 'N', 'O', 'Cl', 'C'];
  return order.filter((e) => c[e] > 0).map((e) => e + (c[e] > 1 ? String(c[e]).split('').map((d) => SUB[+d]).join('') : '')).join('');
};
