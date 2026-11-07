// Картки «Чи знаєте ви?»: гортаються кнопками або свайпом.
import React, { useRef, useState } from 'react';

export interface Fact {
  emoji: string;
  title: string;
  text: string;
}

const GRADIENTS = [
  'from-indigo-600 to-purple-700',
  'from-teal-600 to-cyan-700',
  'from-amber-600 to-orange-700',
  'from-pink-600 to-rose-700',
  'from-emerald-600 to-green-700',
  'from-sky-600 to-blue-700',
];

export const FactCards: React.FC<{ facts: Fact[] }> = ({ facts }) => {
  const [i, setI] = useState(0);
  const start = useRef<number | null>(null);
  const go = (d: number) => setI((v) => (v + d + facts.length) % facts.length);
  const f = facts[i];

  return (
    <div className="w-full h-full flex flex-col gap-3 p-3 md:p-6">
      <div
        className={`flex-1 min-h-0 rounded-3xl bg-gradient-to-br ${GRADIENTS[i % GRADIENTS.length]} shadow-2xl p-5 md:p-10 flex flex-col items-center justify-center text-center text-white gap-3 md:gap-5 overflow-auto`}
        style={{ touchAction: 'pan-y' }}
        onPointerDown={(e) => (start.current = e.clientX)}
        onPointerUp={(e) => {
          if (start.current == null) return;
          const dx = e.clientX - start.current;
          start.current = null;
          if (Math.abs(dx) > 60) go(dx < 0 ? 1 : -1);
        }}
      >
        <div className="text-6xl md:text-8xl">{f.emoji}</div>
        <h2 className="text-2xl md:text-4xl font-extrabold">{f.title}</h2>
        <p className="text-lg md:text-3xl leading-snug max-w-4xl">{f.text}</p>
      </div>
      <div className="shrink-0 flex items-center justify-between gap-3">
        <button
          onClick={() => go(-1)}
          className="px-6 py-3 rounded-2xl bg-slate-700 hover:bg-slate-600 text-white text-xl font-bold active:scale-95"
          aria-label="Попередній факт"
        >
          ◀
        </button>
        <div className="text-slate-300 font-semibold">
          {i + 1} / {facts.length}
        </div>
        <button
          onClick={() => go(1)}
          className="px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white text-xl font-bold active:scale-95"
          aria-label="Наступний факт"
        >
          ▶
        </button>
      </div>
    </div>
  );
};
