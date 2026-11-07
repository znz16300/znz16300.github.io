export interface Sub { id: string; emoji: string; name: string; ph: number; note: string }

export const SUBS: Sub[] = [
  { id: 'lemon', emoji: '🍋', name: 'Лимонний сік', ph: 2, note: 'У ньому лимонна кислота — тому він такий кислий.' },
  { id: 'vinegar', emoji: '🍶', name: 'Оцет', ph: 2.8, note: 'Оцетна кислота. Ним можна відмити накип.' },
  { id: 'cola', emoji: '🥤', name: 'Кола', ph: 2.5, note: 'Містить фосфорну й вугільну кислоти.' },
  { id: 'apple', emoji: '🍎', name: 'Яблучний сік', ph: 3.5, note: 'Яблучна кислота робить сік кисленьким.' },
  { id: 'tomato', emoji: '🍅', name: 'Томатний сік', ph: 4.3, note: 'Слабка кислота, тому томати кисло-солодкі.' },
  { id: 'coffee', emoji: '☕', name: 'Кава', ph: 5, note: 'Слабко-кисла.' },
  { id: 'milk', emoji: '🥛', name: 'Молоко', ph: 6.6, note: 'Майже нейтральне; скисаючи, молоко стає кислішим.' },
  { id: 'water', emoji: '💧', name: 'Чиста вода', ph: 7, note: 'Нейтральна: pH = 7.' },
  { id: 'salt', emoji: '🧂', name: 'Розчин солі', ph: 7, note: 'Кухонна сіль не змінює pH води — нейтральна.' },
  { id: 'sea', emoji: '🌊', name: 'Морська вода', ph: 8.1, note: 'Дуже слабкий луг.' },
  { id: 'soda', emoji: '🥄', name: 'Розчин соди', ph: 8.4, note: 'Харчова сода — слабкий луг.' },
  { id: 'soap', emoji: '🧼', name: 'Мило (розчин)', ph: 9.8, note: 'Мило лужне — саме тому воно змиває жир.' },
  { id: 'ammonia', emoji: '🧴', name: 'Засіб для скла', ph: 11, note: 'Містить аміак — досить сильний луг.' },
  { id: 'bleach', emoji: '🧽', name: 'Відбілювач', ph: 12.5, note: 'Сильний луг! Небезпечний — берегти шкіру й очі.' },
];

const STOPS: [number, [number, number, number]][] = [
  [0, [220, 38, 38]], [2, [239, 68, 68]], [4, [236, 72, 153]], [6, [168, 85, 247]], [7, [139, 92, 246]],
  [8, [79, 70, 229]], [9, [59, 130, 246]], [10, [20, 184, 166]], [11, [34, 197, 94]], [12, [163, 230, 53]], [14, [250, 204, 21]],
];

/** Колір відвару червонокачанної капусти за pH. */
export const colorAt = (ph: number): string => {
  const p = Math.max(0, Math.min(14, ph));
  for (let i = 1; i < STOPS.length; i++) {
    if (p <= STOPS[i][0]) {
      const [a, ca] = STOPS[i - 1], [b, cb] = STOPS[i];
      const t = (p - a) / (b - a);
      return `rgb(${ca.map((c, k) => Math.round(c + (cb[k] - c) * t)).join(',')})`;
    }
  }
  return 'rgb(250,204,21)';
};

export const kind = (ph: number): 'acid' | 'neutral' | 'base' => (ph < 6.5 ? 'acid' : ph > 7.5 ? 'base' : 'neutral');
export const kindName = { acid: 'Кислота', neutral: 'Нейтральна', base: 'Луг' } as const;
