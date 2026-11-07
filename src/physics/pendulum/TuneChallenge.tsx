// 🎯 Виклик: налаштуй довжину нитки так, щоб період дорівнював заданому (±0,03 с).
import React, { useState } from 'react';
import { BigSlider } from '../shared/BigSlider';
import { ActionButton, LabLayout, StatBox, fmt } from '../shared/ui';
import { useBest } from '../shared/useBest';
import { playBeep, unlockAudio } from '../shared/sound';
import { SoundToggle } from '../shared/SoundToggle';
import { PendulumView, periodOf } from './PendulumView';

const TARGETS = [0.8, 1, 1.2, 1.5, 2, 2.5];
const ROUNDS = 5;
const TOL = 0.03;

const makeRounds = () => [...TARGETS].sort(() => Math.random() - 0.5).slice(0, ROUNDS);

export const TuneChallenge: React.FC = () => {
  const [best, submit] = useBest('pendulum-tune');
  const [targets, setTargets] = useState(makeRounds);
  const [round, setRound] = useState(0);
  const [length, setLength] = useState(1.5);
  const [score, setScore] = useState(0);
  const [checked, setChecked] = useState<null | { ok: boolean; gain: number }>(null);
  const [done, setDone] = useState(false);
  const [record, setRecord] = useState(false);
  const [reset, setReset] = useState(0);

  const target = targets[round];
  const T = periodOf(length);

  const check = () => {
    unlockAudio();
    const err = Math.abs(T - target);
    const ok = err <= TOL;
    const gain = Math.max(0, Math.round(100 * (1 - err / 0.3)));
    setChecked({ ok, gain });
    setScore((s) => s + gain);
    playBeep(ok);
  };
  const next = () => {
    if (round + 1 >= ROUNDS) {
      setDone(true);
      setRecord(submit(score));
    } else {
      setRound(round + 1);
      setChecked(null);
      setLength(1.5);
      setReset((r) => r + 1);
    }
  };
  const restart = () => {
    setTargets(makeRounds());
    setRound(0);
    setScore(0);
    setChecked(null);
    setDone(false);
    setLength(1.5);
    setRecord(false);
    setReset((r) => r + 1);
  };

  const panel = done ? (
    <div className="bg-slate-800/90 rounded-xl p-4 text-white text-center">
      <div className="text-5xl">{record ? '🏆' : '🕰️'}</div>
      <div className="text-2xl font-bold">Бали: {score}</div>
      <div className="text-slate-300 mb-3">{record ? 'Новий рекорд!' : `Рекорд: ${best}`}</div>
      <ActionButton onClick={restart}>🔁 Ще раз</ActionButton>
    </div>
  ) : (
    <>
      <div className="grid grid-cols-3 gap-2">
        <StatBox label="Раунд" value={`${round + 1}/${ROUNDS}`} />
        <StatBox label="Бали" value={score} />
        <StatBox label="Рекорд" value={best || '—'} />
      </div>
      <div className="bg-indigo-900/50 border border-indigo-400/40 rounded-xl p-3 text-white text-lg">
        Налаштуй маятник так, щоб <b>період = {fmt(target, 1)} с</b>
      </div>
      <BigSlider label="Довжина нитки" value={length} min={0.1} max={3.5} step={0.01} unit="м" format={(v) => fmt(v, 2)} disabled={!!checked} onChange={setLength} />
      <div className="bg-slate-800/80 rounded-xl px-4 py-3 text-white">
        Розрахований період: <b>{fmt(T, 2)} с</b>
      </div>
      {!checked ? (
        <ActionButton onClick={check}>✔ Перевірити</ActionButton>
      ) : (
        <div className="bg-slate-800/90 rounded-xl p-3 text-white">
          <div className="text-xl font-bold mb-1">{checked.ok ? '✅ Точно!' : '❌ Не зовсім.'} +{checked.gain}</div>
          <div className="text-slate-300 mb-2">Правильна довжина: {fmt((target / (2 * Math.PI)) ** 2 * 9.81, 2)} м</div>
          <ActionButton onClick={next}>{round + 1 >= ROUNDS ? 'Результат' : 'Далі ▶'}</ActionButton>
        </div>
      )}
      <SoundToggle />
    </>
  );

  return <LabLayout scene={<PendulumView length={length} mass={1} amplitude={20} resetKey={reset} />} panel={panel} />;
};
