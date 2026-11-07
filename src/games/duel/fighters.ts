// Бійці «Козацьких двобоїв». Усі герої - з українського фольклору, без крові й жорстокості: переможений «в нокауті».
export type SpecialKind = 'slash' | 'fireball' | 'quake' | 'vine';

export interface FighterDef {
  id: 'cossack' | 'witch' | 'leshy' | 'mavka' | 'zmiy';
  name: string;
  emoji: string;
  title: string;
  hp: number;
  speed: number; // px/с
  punch: number;
  kick: number;
  special: { kind: SpecialKind; name: string; cost: number; dmg: number; text: string };
  scale: number;
  /** кольори для малювання */
  c: { skin: string; main: string; accent: string; hair: string };
  desc: string;
  /** стилі 1-5 для вибору (сила, швидкість, дальність) */
  stats: [number, number, number];
}

export const ROSTER: FighterDef[] = [
  {
    id: 'cossack', name: 'Козак', emoji: '🗡️', title: 'Козак Мамай', hp: 100, speed: 235, punch: 6, kick: 10, scale: 1,
    special: { kind: 'slash', name: 'Шабля-вихор', cost: 50, dmg: 22, text: 'Блискавичний стрибок із шаблею' },
    c: { skin: '#f2c9a0', main: '#1d4ed8', accent: '#dc2626', hair: '#0f172a' },
    desc: 'Збалансований боєць. Удар шаблею-вихором прориває захист.', stats: [3, 3, 3],
  },
  {
    id: 'witch', name: 'Відьма', emoji: '🔮', title: 'Відьма з Лисої гори', hp: 100, speed: 255, punch: 6, kick: 10, scale: 1,
    special: { kind: 'fireball', name: 'Вогняна куля', cost: 40, dmg: 16, text: 'Летить через усю арену' },
    c: { skin: '#e7c3a5', main: '#581c87', accent: '#f97316', hair: '#ea580c' },
    desc: 'Швидка й обережна. Б\'є здалеку вогняними кулями.', stats: [2, 4, 5],
  },
  {
    id: 'leshy', name: 'Лісовик', emoji: '🌳', title: 'Лісовик-велетень', hp: 108, speed: 180, punch: 7, kick: 11, scale: 1.12,
    special: { kind: 'quake', name: 'Дубовий удар', cost: 50, dmg: 20, text: 'Земля дрижить — стрибни, щоб ухилитись!' },
    c: { skin: '#a3b18a', main: '#5b3a1e', accent: '#15803d', hair: '#166534' },
    desc: 'Повільний, але дуже міцний. Його удар по землі збиває з ніг.', stats: [5, 1, 2],
  },
  {
    id: 'mavka', name: 'Мавка', emoji: '🌸', title: 'Лісова Мавка', hp: 105, speed: 265, punch: 6, kick: 10, scale: 0.98,
    special: { kind: 'vine', name: 'Лоза-пастка', cost: 45, dmg: 14, text: 'Лоза обплутує супротивника' },
    c: { skin: '#d9f2d0', main: '#22c55e', accent: '#ec4899', hair: '#166534' },
    desc: 'Найспритніша. Її лоза надовго зупиняє суперника.', stats: [2, 5, 4],
  },
];

export const BOSS: FighterDef = {
  id: 'zmiy', name: 'Змій Горинич', emoji: '🐉', title: 'Змій Горинич', hp: 150, speed: 205, punch: 9, kick: 13, scale: 1.4,
  special: { kind: 'fireball', name: 'Полум\'я Змія', cost: 35, dmg: 14, text: 'Швидка кулька вогню' },
  c: { skin: '#15803d', main: '#7f1d1d', accent: '#facc15', hair: '#052e16' },
  desc: 'Фінальний бос турніру.', stats: [5, 2, 5],
};

export const byId = (id: string): FighterDef => (id === BOSS.id ? BOSS : ROSTER.find((r) => r.id === id) ?? ROSTER[0]);
