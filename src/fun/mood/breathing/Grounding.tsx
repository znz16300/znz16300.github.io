// Вправа «5-4-3-2-1»: по кроках назви те, що бачиш, чуєш, торкаєшся тощо. Повертає у «тут і зараз».
import React, { useState } from 'react';

const STEPS = [
  { n: 5, emoji: '👀', text: 'Назви 5 речей, які ти бачиш навколо.' },
  { n: 4, emoji: '✋', text: 'Торкнись 4 предметів і відчуй їхню поверхню.' },
  { n: 3, emoji: '👂', text: 'Прислухайся: назви 3 звуки, які чуєш.' },
  { n: 2, emoji: '👃', text: 'Назви 2 запахи, які відчуваєш (або які любиш).' },
  { n: 1, emoji: '👅', text: 'Назви 1 смак, який зараз (чи нещодавно) відчував(-ла).' },
];

export const Grounding: React.FC = () => {
  const [i, setI] = useState(0);
  const done = i >= STEPS.length;
  return (
    <div className="w-full h-full overflow-auto flex flex-col items-center justify-center gap-5 p-4 text-white text-center">
      <p className="text-lg md:text-2xl text-slate-200 max-w-2xl">Ця вправа допомагає повернутися в «тут і зараз», коли хвилюєшся. Виконуй кроки повільно.</p>
      {done ? (
        <>
          <div className="text-7xl">🌟</div>
          <div className="text-2xl md:text-3xl font-bold">Молодець! Зроби повільний вдих і видих.</div>
          <button onClick={() => setI(0)} className="px-8 py-4 rounded-2xl bg-green-600 hover:bg-green-500 text-xl font-bold active:scale-95">
            🔁 Ще раз
          </button>
        </>
      ) : (
        <>
          <div className="text-8xl md:text-9xl font-extrabold text-sky-300">{STEPS[i].n}</div>
          <div className="text-6xl">{STEPS[i].emoji}</div>
          <div className="text-2xl md:text-4xl font-bold max-w-3xl">{STEPS[i].text}</div>
          <button onClick={() => setI(i + 1)} className="px-8 py-4 rounded-2xl bg-sky-600 hover:bg-sky-500 text-xl font-bold active:scale-95">
            Готово ▶
          </button>
        </>
      )}
    </div>
  );
};
