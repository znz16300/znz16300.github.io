// 🎯 Хто приїде першим? Різні швидкості й відстані - порахуй і вгадай.
import React, { useState } from 'react';
import { ActionButton, LabLayout, StatBox } from '../shared/ui';
import { SoundToggle } from '../shared/SoundToggle';
import { useBest } from '../shared/useBest';
import { playBeep, unlockAudio } from '../shared/sound';
import { RaceTrack, fmtTime, hoursOf, type Car } from './RaceTrack';

const ROUNDS = 8;
const pick = <T,>(a: T[]): T => a[Math.floor(Math.random() * a.length)];

const makeCars = (): [Car, Car] => {
  for (;;) {
    const a: Car = { emoji: '🚗', label: 'Червона', v: pick([30, 40, 50, 60, 80, 90, 100, 120]), s: pick([60, 90, 120, 150, 180, 240]), color: '#ef4444' };
    const b: Car = { emoji: '🚙', label: 'Синя', v: pick([30, 40, 50, 60, 80, 90, 100, 120]), s: pick([60, 90, 120, 150, 180, 240]), color: '#3b82f6' };
    const d = Math.abs(hoursOf(a) - hoursOf(b));
    if (a.v === b.v && a.s === b.s) continue;
    if (d > 0.1 || d < 1e-6) return [a, b];
  }
};

type Guess = 0 | 1 | 2; // 0 - червона, 1 - синя, 2 - нічия

export const WinnerGame: React.FC = () => {
  const [best, submit] = useBest('speed-winner');
  const [cars, setCars] = useState(makeCars);
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [guess, setGuess] = useState<Guess | null>(null);
  const [run, setRun] = useState(0);
  const [finished, setFinished] = useState(false);
  const [done, setDone] = useState(false);
  const [rec, setRec] = useState(false);

  const t0 = hoursOf(cars[0]), t1 = hoursOf(cars[1]);
  const truth: Guess = Math.abs(t0 - t1) < 1e-6 ? 2 : t0 < t1 ? 0 : 1;
  const ok = guess === truth;

  const choose = (g: Guess) => {
    if (guess != null) return;
    unlockAudio();
    setGuess(g);
    setRun(1);
    if (g === truth) setScore((s) => s + 100);
    playBeep(g === truth);
  };
  const next = () => {
    if (round + 1 >= ROUNDS) { setDone(true); setRec(submit(score)); return; }
    setRound(round + 1); setCars(makeCars()); setGuess(null); setRun(0); setFinished(false);
  };
  const restart = () => {
    setRound(0); setScore(0); setCars(makeCars()); setGuess(null); setRun(0); setFinished(false); setDone(false); setRec(false);
  };

  const panel = done ? (
    <div className="bg-slate-800/90 rounded-xl p-4 text-white text-center">
      <div className="text-5xl">{rec ? '🏆' : '🏁'}</div>
      <div className="text-2xl font-bold">Бали: {score}</div>
      <div className="text-slate-300 mb-3">{rec ? 'Новий рекорд!' : `Рекорд: ${best}`}</div>
      <ActionButton onClick={restart}>🔁 Ще раз</ActionButton>
    </div>
  ) : (
    <>
      <div className="grid grid-cols-2 gap-2">
        <StatBox label="Раунд" value={`${round + 1}/${ROUNDS}`} />
        <StatBox label="Бали" value={score} />
      </div>
      <div className="bg-slate-800/80 rounded-xl p-3 text-white text-lg">
        🚗 <b>{cars[0].v} км/год</b>, їде <b>{cars[0].s} км</b><br />
        🚙 <b>{cars[1].v} км/год</b>, їде <b>{cars[1].s} км</b><br />
        <span className="text-slate-300 text-sm">Хто приїде першим? Підказка: час = відстань ÷ швидкість.</span>
      </div>
      {guess == null ? (
        <div className="grid gap-2">
          <ActionButton onClick={() => choose(0)}>🚗 Червона</ActionButton>
          <ActionButton onClick={() => choose(1)}>🚙 Синя</ActionButton>
          <ActionButton onClick={() => choose(2)} variant="secondary">🤝 Одночасно</ActionButton>
        </div>
      ) : (
        <div className={`rounded-xl p-3 text-white border ${ok ? 'bg-green-900/60 border-green-400/50' : 'bg-red-900/60 border-red-400/50'}`}>
          <div className="text-xl font-bold mb-1">{ok ? 'Правильно! +100' : 'Не вгадав'}</div>
          <div className="text-sm mb-2">
            🚗 {cars[0].s} ÷ {cars[0].v} = {fmtTime(t0)}<br />
            🚙 {cars[1].s} ÷ {cars[1].v} = {fmtTime(t1)}
          </div>
          {finished && <ActionButton onClick={next}>{round + 1 >= ROUNDS ? 'Результат' : 'Далі ▶'}</ActionButton>}
        </div>
      )}
      <SoundToggle />
    </>
  );
  return <LabLayout scene={<RaceTrack cars={cars} runId={run} onFinish={() => setFinished(true)} />} panel={panel} />;
};
