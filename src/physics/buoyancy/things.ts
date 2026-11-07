// Предмети та рідини з густинами (кг/м³). Допишіть свої за зразком.
export interface Thing {
  id: string;
  name: string;
  emoji: string;
  density: number;
}
export interface Liquid {
  id: string;
  name: string;
  density: number;
  color: string;
}

export const THINGS: Thing[] = [
  { id: 'cork', name: 'Корок', emoji: '🍾', density: 240 },
  { id: 'duck', name: 'Гумова качка', emoji: '🦆', density: 300 },
  { id: 'ship', name: 'Сталевий корабель', emoji: '🚢', density: 450 },
  { id: 'wood', name: 'Деревина', emoji: '🪵', density: 600 },
  { id: 'apple', name: 'Яблуко', emoji: '🍎', density: 800 },
  { id: 'ice', name: 'Лід', emoji: '🧊', density: 917 },
  { id: 'egg', name: 'Яйце', emoji: '🥚', density: 1080 },
  { id: 'potato', name: 'Картопля', emoji: '🥔', density: 1090 },
  { id: 'glass', name: 'Скляна кулька', emoji: '🔮', density: 2500 },
  { id: 'stone', name: 'Камінь', emoji: '🪨', density: 2700 },
  { id: 'iron', name: 'Залізна кулька', emoji: '⚫', density: 7800 },
];

export const LIQUIDS: Liquid[] = [
  { id: 'oil', name: 'Олія', density: 920, color: '#d9a300' },
  { id: 'water', name: 'Вода', density: 1000, color: '#2563eb' },
  { id: 'salt', name: 'Солоний розчин', density: 1200, color: '#5b8def' },
  { id: 'honey', name: 'Мед', density: 1420, color: '#b45309' },
];

export const floats = (t: Thing, l: Liquid) => t.density < l.density;
