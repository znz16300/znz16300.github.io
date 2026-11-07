// Прискорення вільного падіння g (м/с²) на поверхні небесних тіл (для Юпітера - на рівні хмар, "поверхні" в нього немає).
export interface Planet {
  id: string;
  name: string;
  emoji: string;
  g: number;
  /** Кольори неба (верх, низ) для малювання */
  sky: [string, string];
  ground: string;
}

export const EARTH: Planet = {
  id: 'earth',
  name: 'Земля',
  emoji: '🌍',
  g: 9.81,
  sky: ['#1e3a8a', '#60a5fa'],
  ground: '#3f6212',
};

export const PLANETS: Planet[] = [
  { id: 'moon', name: 'Місяць', emoji: '🌕', g: 1.62, sky: ['#020617', '#1e293b'], ground: '#94a3b8' },
  { id: 'pluto', name: 'Плутон', emoji: '🪨', g: 0.62, sky: ['#0b1020', '#312e81'], ground: '#a8a29e' },
  { id: 'mars', name: 'Марс', emoji: '🔴', g: 3.71, sky: ['#7c2d12', '#fdba74'], ground: '#9a3412' },
  { id: 'venus', name: 'Венера', emoji: '🟡', g: 8.87, sky: ['#854d0e', '#fde047'], ground: '#a16207' },
  { id: 'jupiter', name: 'Юпітер', emoji: '🟠', g: 24.79, sky: ['#9a3412', '#fed7aa'], ground: '#c2410c' },
  { id: 'sun', name: 'Сонце', emoji: '☀️', g: 274, sky: ['#b45309', '#fde68a'], ground: '#f59e0b' },
];

/** Планети, доступні в грі (без Сонця: там усе надто швидко) */
export const GAME_BODIES: Planet[] = [EARTH, ...PLANETS.filter((p) => p.id !== 'sun')];
