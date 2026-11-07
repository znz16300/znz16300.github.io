// 🎯 Кислота, луг чи нейтральна? 10 випадкових речовин.
import React, { useState } from 'react';
import { useBest } from '../../../physics/shared/useBest';
import { playBeep, unlockAudio } from '../../../physics/shared/sound';
import { shuffled } from '../../shared/seed';
import { PhScale } from './Beaker';
import { SUBS, kind, kindName } from './data';

const ROUNDS = 10;
type K = 'acid' | 'neutral' | 'base';

export const SortGame: React.FC = () => {
  const [best, submit] = useBest('chem-ph-sort');
  const [deck, setDeck] = useState(() => shuffled(SUBS).slice(0, ROUNDS));
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const [pick, setPick] = useState<K | null>(null);
  const [done, setDone] = useState(false);
  const [rec, setRec] = useState(false);
  const s = deck[i];
  const truth = kind(s.ph);

  const choose = (k: K) => {
    if (pick) return;
    unlockAudio();
    setPick(k);
    if (k === truth) setScore((x) => x + 1);
    playBeep(k === truth);
  };
  const next = () => {
    if (i + 1 >= ROUNDS) { setDone(true); setRec(submit(score)); return; }
    setI(i + 1); setPick(null);
  };
  const restart = () => { setDeck(shuffled(SUBS).slice(0, ROUNDS)); setI(0); setScore(0); setPick(null); setDone(false); setRec(false); };

  if (done)
    return (
      <div className="h-full flex items-center justify-center p-4">
        <div className="bg-slate-800/90 rounded-2xl p-8 text-white text-center">
          <div className="text-6xl">{rec ? '🏆' : '🥬'}</div>
          <div className="text-3xl font-bold">{score} з {ROUNDS}</div>
          <div className="text-slate-300 mb-4">{rec ? 'Новий рекорд!' : `Рекорд: ${best}`}</div>
          <button onClick={restart} className="px-6 py-3 rounded-xl bg-indigo-500 text-xl font-bold active:scale-95">🔁 Ще раз</button>
        </div>
      </div>
    );
  const opts: { k: K; label: string; cls: string }[] = [
    { k: 'acid', label: '🍋 Кислота', cls: 'bg-red-600' },
    { k: 'neutral', label: '💧 Нейтральна', cls: 'bg-green-600' },
    { k: 'base', label: '🧼 Луг', cls: 'bg-blue-600' },
  ];
  return (
    <div className="h-full overflow-y-auto p-4 flex flex-col items-center gap-4">
      <div className="text-slate-300">Запитання {i + 1}/{ROUNDS} · правильно: {score}</div>
      <div className="bg-slate-800/90 rounded-2xl px-10 py-6 text-center text-white">
        <div className="text-7xl">{s.emoji}</div>
        <div className="text-2xl md:text-3xl font-bold mt-2">{s.name}</div>
      </div>
      <div className="grid grid-cols-3 gap-3 w-full max-w-xl">
        {opts.map((o) => (
          <button key={o.k} onClick={() => choose(o.k)} className={`${o.cls} text-white rounded-xl py-4 text-base md:text-xl font-bold active:scale-95 ${pick && o.k !== truth && o.k !== pick ? 'opacity-40' : ''} ${pick && o.k === truth ? 'ring-4 ring-white' : ''}`}>
            {o.label}
          </button>
        ))}
      </div>
      {pick && (
        <div className={`w-full max-w-xl rounded-xl p-4 text-white ${pick === truth ? 'bg-green-900/60' : 'bg-red-900/60'}`}>
          <div className="font-bold text-lg">{pick === truth ? 'Правильно!' : 'Ні'} — {kindName[truth]}, pH ≈ {String(s.ph).replace('.', ',')}</div>
          <div className="mb-2">{s.note}</div>
          <PhScale ph={s.ph} />
          <button onClick={next} className="mt-3 px-6 py-2 rounded-xl bg-white/90 text-slate-900 font-bold active:scale-95">{i + 1 >= ROUNDS ? 'Результат' : 'Далі ▶'}</button>
        </div>
      )}
    </div>
  );
};
