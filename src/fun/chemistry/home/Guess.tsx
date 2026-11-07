// 🎯 Яка формула? За описом знайди хімічну формулу. 10 раундів.
import React, { useState } from 'react';
import { useBest } from '../../../physics/shared/useBest';
import { playBeep, unlockAudio } from '../../../physics/shared/sound';
import { shuffled } from '../../shared/seed';
import { THINGS, type Thing } from './data';

const ROUNDS = 10;
const make = () => shuffled(THINGS).slice(0, ROUNDS).map((t) => ({ t, options: shuffled([t, ...shuffled(THINGS.filter((x) => x.id !== t.id)).slice(0, 3)]) }));

export const Guess: React.FC = () => {
  const [best, submit] = useBest('chem-home-guess');
  const [deck, setDeck] = useState(make);
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const [pick, setPick] = useState<Thing | null>(null);
  const [done, setDone] = useState(false);
  const [rec, setRec] = useState(false);
  const { t, options } = deck[i];

  const choose = (o: Thing) => {
    if (pick) return;
    unlockAudio(); setPick(o);
    if (o.id === t.id) setScore((s) => s + 1);
    playBeep(o.id === t.id);
  };
  const next = () => { if (i + 1 >= ROUNDS) { setDone(true); setRec(submit(score)); return; } setI(i + 1); setPick(null); };
  const restart = () => { setDeck(make()); setI(0); setScore(0); setPick(null); setDone(false); setRec(false); };

  if (done)
    return (
      <div className="h-full flex items-center justify-center p-4">
        <div className="bg-slate-800/90 rounded-2xl p-8 text-white text-center">
          <div className="text-6xl">{rec ? '🏆' : '🏠'}</div>
          <div className="text-3xl font-bold">{score} з {ROUNDS}</div>
          <div className="text-slate-300 mb-4">{rec ? 'Новий рекорд!' : `Рекорд: ${best}`}</div>
          <button onClick={restart} className="px-6 py-3 rounded-xl bg-indigo-500 text-xl font-bold active:scale-95">🔁 Ще раз</button>
        </div>
      </div>
    );
  return (
    <div className="h-full overflow-y-auto p-4 flex flex-col items-center gap-4">
      <div className="text-slate-300">Запитання {i + 1}/{ROUNDS} · правильно: {score}</div>
      <div className="bg-slate-800/90 rounded-2xl px-8 py-5 text-center text-white max-w-xl">
        <div className="text-6xl">{t.emoji}</div>
        <div className="text-2xl font-bold mt-1">{t.name}</div>
        <div className="text-slate-300 mt-1">Де зустрічається: {t.where}</div>
        <div className="mt-2 text-slate-100">Яка в цієї речовини формула?</div>
      </div>
      <div className="grid grid-cols-2 gap-3 w-full max-w-xl">
        {options.map((o) => {
          const st = !pick ? '' : o.id === t.id ? 'bg-green-600' : o.id === pick.id ? 'bg-red-600' : 'opacity-40';
          return <button key={o.id} onClick={() => choose(o)} className={`rounded-xl py-4 text-2xl font-bold text-white bg-indigo-600 active:scale-95 ${st}`}>{o.formula}</button>;
        })}
      </div>
      {pick && (
        <div className="w-full max-w-xl bg-slate-800/90 rounded-xl p-4 text-white">
          <div>💡 {t.fact}</div>
          <button onClick={next} className="mt-3 px-6 py-2 rounded-xl bg-white/90 text-slate-900 font-bold active:scale-95">{i + 1 >= ROUNDS ? 'Результат' : 'Далі ▶'}</button>
        </div>
      )}
    </div>
  );
};
