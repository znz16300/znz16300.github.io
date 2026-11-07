export type RGBA = [number, number, number, number];
export type Kind = 'gas' | 'precip' | 'color' | 'heat' | 'none';

export interface Sub {
  id: string;
  emoji: string;
  name: string;
  /** рідина (true) чи тверда речовина (false) */
  liquid: boolean;
  color: RGBA;
  /** колір твердих частинок */
  solid?: string;
  danger?: boolean;
}

export const SUBS: Sub[] = [
  { id: 'water', emoji: '💧', name: 'Вода', liquid: true, color: [147, 197, 253, 0.5] },
  { id: 'vinegar', emoji: '🍶', name: 'Оцет', liquid: true, color: [253, 224, 140, 0.45] },
  { id: 'hcl', emoji: '🧪', name: 'Соляна кислота (розб.)', liquid: true, color: [186, 230, 253, 0.45], danger: true },
  { id: 'naoh', emoji: '🧴', name: 'Луг NaOH (розб.)', liquid: true, color: [191, 219, 254, 0.45], danger: true },
  { id: 'cuso4', emoji: '🔵', name: 'Мідний купорос', liquid: true, color: [37, 99, 235, 0.75] },
  { id: 'agno3', emoji: '⚪', name: 'Нітрат срібла', liquid: true, color: [226, 232, 240, 0.3], danger: true },
  { id: 'iodine', emoji: '🟤', name: 'Йод (настоянка)', liquid: true, color: [180, 83, 9, 0.8] },
  { id: 'starch', emoji: '🥣', name: 'Крохмальний клейстер', liquid: true, color: [255, 255, 255, 0.6] },
  { id: 'ki', emoji: '🧂', name: 'Розчин KI', liquid: true, color: [226, 232, 240, 0.3] },
  { id: 'pb', emoji: '🫗', name: 'Розчин Pb(NO₃)₂', liquid: true, color: [226, 232, 240, 0.3], danger: true },
  { id: 'phenol', emoji: '💧', name: 'Фенолфталеїн', liquid: true, color: [254, 226, 226, 0.25] },
  { id: 'h2o2', emoji: '🩹', name: 'Пероксид водню', liquid: true, color: [226, 232, 240, 0.3] },
  { id: 'soda', emoji: '🥄', name: 'Харчова сода', liquid: false, color: [255, 255, 255, 1], solid: '#f8fafc' },
  { id: 'chalk', emoji: '🪨', name: 'Крейда', liquid: false, color: [255, 255, 255, 1], solid: '#e2e8f0' },
  { id: 'zinc', emoji: '🔩', name: 'Цинк', liquid: false, color: [255, 255, 255, 1], solid: '#94a3b8' },
  { id: 'iron', emoji: '📌', name: 'Залізний цвях', liquid: false, color: [255, 255, 255, 1], solid: '#64748b' },
  { id: 'yeast', emoji: '🍞', name: 'Дріжджі', liquid: false, color: [255, 255, 255, 1], solid: '#d6a35c' },
  { id: 'salt', emoji: '🧂', name: 'Кухонна сіль', liquid: false, color: [255, 255, 255, 1], solid: '#f1f5f9' },
  { id: 'sugar', emoji: '🍬', name: 'Цукор', liquid: false, color: [255, 255, 255, 1], solid: '#fafaf9' },
  { id: 'sodium', emoji: '⚡', name: 'Натрій (метал)', liquid: false, color: [255, 255, 255, 1], solid: '#cbd5e1', danger: true },
];

export interface Reaction {
  a: string;
  b: string;
  kind: Kind;
  title: string;
  eq: string;
  text: string;
  /** кінцевий колір рідини */
  liq?: RGBA;
  /** бульбашки газу 0…1 */
  gas?: number;
  /** колір осаду */
  precip?: string;
  heat?: number;
  foam?: boolean;
  flash?: boolean;
}

export const REACTIONS: Reaction[] = [
  { a: 'soda', b: 'vinegar', kind: 'gas', gas: 1, foam: true, title: 'Сода + оцет', eq: 'NaHCO₃ + CH₃COOH → CH₃COONa + H₂O + CO₂↑', text: 'Бурхливо виділяється вуглекислий газ — звідси піна. Так працює «вулкан» зі соди й оцту.' },
  { a: 'soda', b: 'hcl', kind: 'gas', gas: 1, foam: true, title: 'Сода + кислота', eq: 'NaHCO₃ + HCl → NaCl + H₂O + CO₂↑', text: 'Кислота «витісняє» з соди вуглекислий газ.' },
  { a: 'chalk', b: 'vinegar', kind: 'gas', gas: 0.6, title: 'Крейда + оцет', eq: 'CaCO₃ + 2CH₃COOH → (CH₃COO)₂Ca + H₂O + CO₂↑', text: 'Крейда — це карбонат кальцію. Кислота її «їсть», виділяючи газ. Так кислотні дощі руйнують мармур.' },
  { a: 'chalk', b: 'hcl', kind: 'gas', gas: 1, title: 'Крейда + кислота', eq: 'CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑', text: 'Реакція йде швидше з сильною кислотою.' },
  { a: 'zinc', b: 'hcl', kind: 'gas', gas: 0.8, title: 'Цинк + кислота', eq: 'Zn + 2HCl → ZnCl₂ + H₂↑', text: 'Метал розчиняється, виділяється горючий газ водень. (Підпалювати водень можна тільки вчителю!)' },
  { a: 'zinc', b: 'vinegar', kind: 'gas', gas: 0.25, title: 'Цинк + оцет', eq: 'Zn + 2CH₃COOH → (CH₃COO)₂Zn + H₂↑', text: 'Оцет — слабка кислота, тому водень виділяється повільно.' },
  { a: 'iron', b: 'hcl', kind: 'gas', gas: 0.5, liq: [190, 220, 170, 0.5], title: 'Залізо + кислота', eq: 'Fe + 2HCl → FeCl₂ + H₂↑', text: 'Залізо реагує повільніше за цинк; розчин стає зеленуватим.' },
  { a: 'iron', b: 'cuso4', kind: 'color', precip: '#b45309', liq: [120, 200, 190, 0.55], title: 'Залізо + мідний купорос', eq: 'Fe + CuSO₄ → FeSO₄ + Cu↓', text: 'Залізо «виганяє» мідь із розчину: цвях вкривається червоною міддю, а синій колір блякне.' },
  { a: 'hcl', b: 'naoh', kind: 'heat', heat: 1, title: 'Нейтралізація', eq: 'HCl + NaOH → NaCl + H₂O', text: 'Кислота й луг утворюють сіль і воду та виділяють тепло — пробірка нагрівається.' },
  { a: 'vinegar', b: 'naoh', kind: 'heat', heat: 0.5, title: 'Оцет + луг', eq: 'CH₃COOH + NaOH → CH₃COONa + H₂O', text: 'Слабка кислота + луг: нейтралізація з невеликим нагріванням.' },
  { a: 'cuso4', b: 'naoh', kind: 'precip', precip: '#60a5fa', liq: [200, 225, 250, 0.4], title: 'Мідь + луг', eq: 'CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄', text: 'Випадає блакитний драглистий осад гідроксиду міді.' },
  { a: 'agno3', b: 'salt', kind: 'precip', precip: '#f8fafc', title: 'Срібло + сіль', eq: 'AgNO₃ + NaCl → AgCl↓ + NaNO₃', text: 'Утворюється білий сирнистий осад хлориду срібла. Так виявляють хлор-іони.' },
  { a: 'agno3', b: 'hcl', kind: 'precip', precip: '#f8fafc', title: 'Срібло + кислота', eq: 'AgNO₃ + HCl → AgCl↓ + HNO₃', text: 'Знову білий осад AgCl — характерна реакція на хлорид-іони.' },
  { a: 'iodine', b: 'starch', kind: 'color', liq: [30, 27, 75, 0.9], title: 'Йод + крохмаль', eq: 'I₂ + крохмаль → темно-синій комплекс', text: 'Крохмаль забарвлюється йодом у синьо-чорний. Так перевіряють, чи є крохмаль у картоплі чи хлібі.' },
  { a: 'ki', b: 'pb', kind: 'precip', precip: '#facc15', title: 'Золотий дощ', eq: 'Pb(NO₃)₂ + 2KI → PbI₂↓ + 2KNO₃', text: 'Яскраво-жовтий осад повільно осідає, як золоті пластівці. Сполуки свинцю отруйні — це демонстрація лише для вчителя.' },
  { a: 'phenol', b: 'naoh', kind: 'color', liq: [219, 39, 119, 0.8], title: 'Фенолфталеїн + луг', eq: 'індикатор + OH⁻ → малиновий колір', text: 'У лужному середовищі фенолфталеїн стає малиновим. У кислоті він безбарвний.' },
  { a: 'h2o2', b: 'yeast', kind: 'gas', gas: 0.9, foam: true, title: 'Пероксид + дріжджі', eq: '2H₂O₂ → 2H₂O + O₂↑ (фермент каталаза)', text: 'Дріжджі містять фермент, що розкладає пероксид на воду й кисень. Утворюється піна (особливо із краплею миючого засобу).' },
  { a: 'sodium', b: 'water', kind: 'gas', gas: 1, heat: 1, flash: true, liq: [186, 230, 253, 0.4], title: 'Натрій + вода', eq: '2Na + 2H₂O → 2NaOH + H₂↑', text: 'Натрій бігає по воді, шипить і може спалахнути. Утворюється луг. ЦЕ НЕБЕЗПЕЧНО — тільки в лабораторії під наглядом!' },
  { a: 'salt', b: 'water', kind: 'none', title: 'Сіль + вода', eq: 'NaCl → Na⁺ + Cl⁻ (розчинення)', text: 'Сіль розчиняється: кристали розпадаються на іони. Це фізичний процес, нова речовина не утворилася.' },
  { a: 'sugar', b: 'water', kind: 'none', title: 'Цукор + вода', eq: 'C₁₂H₂₂O₁₁ (тв.) → C₁₂H₂₂O₁₁ (розчин)', text: 'Цукор розчиняється, а вода стає солодкою. Це розчинення, а не хімічна реакція.' },
];

export const findReaction = (x: string, y: string): Reaction | undefined => REACTIONS.find((r) => (r.a === x && r.b === y) || (r.a === y && r.b === x));
export const byId = (id: string) => SUBS.find((s) => s.id === id)!;

export const KIND_LABEL: Record<Kind, string> = {
  gas: '🫧 Виділяється газ',
  precip: '🧱 Випадає осад',
  color: '🎨 Змінюється колір',
  heat: '🔥 Виділяється тепло',
  none: '😐 Нічого особливого',
};
