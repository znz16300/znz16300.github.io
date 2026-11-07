// 🎯 Що станеться? Передбач результат змішування.
import React, { useState } from 'react';
import { useBest } from '../../../physics/shared/useBest';
import { playBeep, unlockAudio } from '../../../physics/shared/sound';
import { shuffled } from '../../shared/seed';
import { KIND_LABEL, REACTIONS, byId, type Kind } from './data';

const ROUNDS = 8;
const KINDS: Kind[] = ['gas', 'precip', 'color', 'heat', 'none'];

const makeDeck = () => shuffled(REACTIONS).slice(0, ROUNDS).map((r) => {
  const others = shuffled(KINDS.filter((k) => k !== r.kind)).slice(0, 3);
  return { r, options: shuffled([r.kind, ...others]) };
});

export const Predict: React.FC = () => {
  const [best, submit] = useBest('chem-lab-predict');
  const [deck, setDeck] = useState(makeDeck);
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const [pick, setPick] = useState<Kind | null>(null);
  const [done, setDone] = useState(false);
  const [rec, setRec] = useState(false);
  const { r, options } = deck[i];

  const choose = (k: Kind) => {
    if (pick) return;
    unlockAudio();
    setPick(k);
    if (k === r.kind) setScore((s) => s + 1);
    playBeep(k === r.kind);
  };
  const next = () => { if (i + 1 >= ROUNDS) { setDone(true); setRec(submit(score)); return; } setI(i + 1); setPick(null); };
  const restart = () => { setDeck(makeDeck()); setI(0); setScore(0); setPick(null); setDone(false); setRec(false); };

  if (done)
    return (
      <div className="h-full flex items-center justify-center p-4">
        <div className="bg-slate-800/90 rounded-2xl p-8 text-white text-center">
          <div className="text-6xl">{rec ? '🏆' : '🔬'}</div>
          <div className="text-3xl font-bold">{score} з {ROUNDS}</div>
          <div className="text-slate-300 mb-4">{rec ? 'Новий рекорд!' : `Рекорд: ${best}`}</div>
          <button onClick={restart} className="px-6 py-3 rounded-xl bg-indigo-500 text-xl font-bold active:scale-95">🔁 Ще раз</button>
        </div>
      </div>
    );
  const A = byId(r.a), B = byId(r.b);
  return (
    <div className="h-full overflow-y-auto p-4 flex flex-col items-center gap-4">
      <div className="text-slate-300">Запитання {i + 1}/{ROUNDS} · правильно: {score}</div>
      <div className="bg-slate-800/90 rounded-2xl px-8 py-5 text-center text-white">
        <div className="text-slate-300 mb-1">Що станеться, якщо змішати</div>
        <div className="text-2xl md:text-3xl font-bold">{A.emoji} {A.name} + {B.emoji} {B.name}?</div>
      </div>
      <div className="grid grid-cols-2 gap-3 w-full max-w-xl">
        {options.map((k) => {
          const st = pick == null ? '' : k === r.kind ? 'bg-green-600' : k === pick ? 'bg-red-600' : 'opacity-40';
          return <button key={k} onClick={() => choose(k)} className={`rounded-xl py-4 px-2 text-white text-lg font-bold bg-indigo-600 active:scale-95 ${st}`}>{KIND_LABEL[k]}</button>;
        })}
      </div>
      {pick && (
        <div className="w-full max-w-xl bg-slate-800/90 rounded-xl p-4 text-white">
          <div className="font-bold">{r.title}</div>
          <div className="text-amber-200 text-sm font-mono my-1">{r.eq}</div>
          <div>{r.text}</div>
          <button onClick={next} className="mt-3 px-6 py-2 rounded-xl bg-white/90 text-slate-900 font-bold active:scale-95">{i + 1 >= ROUNDS ? 'Результат' : 'Далі ▶'}</button>
        </div>
      )}
    </div>
  );
};
