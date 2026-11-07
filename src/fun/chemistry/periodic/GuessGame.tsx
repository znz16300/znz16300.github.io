// 🎯 Вгадай елемент: за символом - назву або навпаки. 10 запитань, рекорд зберігається.
import React, { useState } from 'react';
import { useBest } from '../../../physics/shared/useBest';
import { playBeep, unlockAudio } from '../../../physics/shared/sound';
import { shuffled } from '../../shared/seed';
import { ELEMENTS, type El } from './data';

const POOL = ELEMENTS.filter((e) => e.z <= 56 || ['Pt', 'Au', 'Hg', 'Pb', 'U', 'W', 'Rn', 'Ra'].includes(e.s));
const ROUNDS = 10;

interface Q { el: El; reverse: boolean; options: El[] }
const make = (): Q[] =>
  shuffled(POOL).slice(0, ROUNDS).map((el) => ({
    el,
    reverse: Math.random() < 0.5,
    options: shuffled([el, ...shuffled(POOL.filter((x) => x.z !== el.z)).slice(0, 3)]),
  }));

export const GuessGame: React.FC = () => {
  const [best, submit] = useBest('chem-guess');
  const [qs, setQs] = useState(make);
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const [pick, setPick] = useState<number | null>(null);
  const [done, setDone] = useState(false);
  const [rec, setRec] = useState(false);
  const q = qs[i];

  const choose = (z: number) => {
    if (pick != null) return;
    unlockAudio();
    setPick(z);
    const ok = z === q.el.z;
    if (ok) setScore((s) => s + 1);
    playBeep(ok);
  };
  const next = () => {
    if (i + 1 >= ROUNDS) { setDone(true); setRec(submit(score)); return; }
    setI(i + 1); setPick(null);
  };
  const restart = () => { setQs(make()); setI(0); setScore(0); setPick(null); setDone(false); setRec(false); };

  if (done)
    return (
      <div className="h-full flex items-center justify-center p-4">
        <div className="bg-slate-800/90 rounded-2xl p-8 text-white text-center max-w-md">
          <div className="text-6xl mb-2">{rec ? '🏆' : score >= 7 ? '🌟' : '🧪'}</div>
          <div className="text-3xl font-bold">{score} з {ROUNDS}</div>
          <div className="text-slate-300 mb-4">{rec ? 'Новий рекорд!' : `Рекорд: ${best}`}</div>
          <button onClick={restart} className="px-6 py-3 rounded-xl bg-indigo-500 text-xl font-bold active:scale-95">🔁 Ще раз</button>
        </div>
      </div>
    );

  return (
    <div className="h-full overflow-y-auto p-4 flex flex-col items-center">
      <div className="text-slate-300 mb-2">Запитання {i + 1}/{ROUNDS} · правильно: {score}</div>
      <div className="bg-slate-800/90 rounded-2xl px-10 py-6 text-center mb-4">
        {q.reverse ? (
          <>
            <div className="text-slate-300">Який символ у цього елемента?</div>
            <div className="text-4xl md:text-5xl font-bold text-white">{q.el.name}</div>
          </>
        ) : (
          <>
            <div className="text-slate-300">Як називається елемент?</div>
            <div className="text-6xl md:text-7xl font-bold text-white">{q.el.s}</div>
          </>
        )}
      </div>
      <div className="grid grid-cols-2 gap-3 w-full max-w-xl">
        {q.options.map((o) => {
          const state = pick == null ? '' : o.z === q.el.z ? 'bg-green-600' : o.z === pick ? 'bg-red-600' : 'opacity-50';
          return (
            <button key={o.z} onClick={() => choose(o.z)} className={`rounded-xl py-4 text-xl md:text-2xl font-bold text-white bg-indigo-600 hover:bg-indigo-500 active:scale-95 ${state}`}>
              {q.reverse ? o.s : o.name}
            </button>
          );
        })}
      </div>
      {pick != null && (
        <button onClick={next} className="mt-4 px-8 py-3 rounded-xl bg-green-500 text-white text-xl font-bold active:scale-95">
          {i + 1 >= ROUNDS ? 'Результат' : 'Далі ▶'}
        </button>
      )}
    </div>
  );
};
