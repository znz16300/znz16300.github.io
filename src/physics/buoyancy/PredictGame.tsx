// 🎯 Передбач і перевір: спершу вгадай - плаватиме чи потоне, потім кидаємо.
import React, { useState } from 'react';
import { ActionButton, LabLayout, StatBox } from '../shared/ui';
import { SoundToggle } from '../shared/SoundToggle';
import { useBest } from '../shared/useBest';
import { playBeep, unlockAudio } from '../shared/sound';
import { LIQUIDS, THINGS, floats, type Liquid, type Thing } from './things';
import { TankSim } from './TankSim';

const ROUNDS = 8;
interface Round {
  t: Thing;
  l: Liquid;
}
const makeRounds = (): Round[] => {
  const r: Round[] = [];
  while (r.length < ROUNDS) {
    const t = THINGS[Math.floor(Math.random() * THINGS.length)];
    const l = LIQUIDS[Math.floor(Math.random() * LIQUIDS.length)];
    if (!r.some((x) => x.t.id === t.id && x.l.id === l.id)) r.push({ t, l });
  }
  return r;
};

export const PredictGame: React.FC = () => {
  const [best, submit] = useBest('buoyancy-predict');
  const [rounds, setRounds] = useState(makeRounds);
  const [i, setI] = useState(0);
  const [guess, setGuess] = useState<null | boolean>(null); // true - плаває
  const [score, setScore] = useState(0);
  const [hint, setHint] = useState(false);
  const [done, setDone] = useState(false);
  const [record, setRecord] = useState(false);
  const [drop, setDrop] = useState(0);

  const { t, l } = rounds[i];
  const truth = floats(t, l);

  const answer = (g: boolean) => {
    if (guess != null) return;
    unlockAudio();
    setGuess(g);
    setDrop((d) => d + 1);
    const ok = g === truth;
    playBeep(ok);
    if (ok) setScore((s) => s + (hint ? 5 : 10));
  };
  const next = () => {
    if (i + 1 >= ROUNDS) {
      setDone(true);
      setRecord(submit(score));
    } else {
      setI(i + 1);
      setGuess(null);
      setHint(false);
      setDrop(0);
    }
  };
  const restart = () => {
    setRounds(makeRounds());
    setI(0);
    setGuess(null);
    setScore(0);
    setHint(false);
    setDone(false);
    setRecord(false);
    setDrop(0);
  };

  const panel = done ? (
    <div className="bg-slate-800/90 rounded-xl p-4 text-white text-center">
      <div className="text-5xl">{record ? '🏆' : '🚢'}</div>
      <div className="text-2xl font-bold">Бали: {score}</div>
      <div className="text-slate-300 mb-3">{record ? 'Новий рекорд!' : `Рекорд: ${best}`}</div>
      <ActionButton onClick={restart}>🔁 Ще раз</ActionButton>
    </div>
  ) : (
    <>
      <div className="grid grid-cols-3 gap-2">
        <StatBox label="Раунд" value={`${i + 1}/${ROUNDS}`} />
        <StatBox label="Бали" value={score} />
        <StatBox label="Рекорд" value={best || '—'} />
      </div>
      <div className="bg-indigo-900/50 border border-indigo-400/40 rounded-xl p-3 text-white text-lg">
        {t.emoji} <b>{t.name}</b> у рідині «{l.name}» — що буде?
      </div>
      {guess == null ? (
        <>
          <div className="grid grid-cols-2 gap-2">
            <ActionButton onClick={() => answer(true)}>🛟 Плаватиме</ActionButton>
            <ActionButton onClick={() => answer(false)} variant="warn">⚓ Потоне</ActionButton>
          </div>
          <ActionButton onClick={() => setHint(true)} variant="secondary" disabled={hint}>
            💡 Показати густини (−5 балів)
          </ActionButton>
        </>
      ) : (
        <div className="bg-slate-800/90 rounded-xl p-3 text-white">
          <div className="text-xl font-bold mb-1">{guess === truth ? '✅ Вгадав(-ла)!' : '❌ Ні…'}</div>
          <div className="text-slate-200 mb-2">
            {t.name}: {t.density} кг/м³, {l.name.toLowerCase()}: {l.density} кг/м³ → {truth ? 'плаває' : 'тоне'}.
          </div>
          <ActionButton onClick={next}>{i + 1 >= ROUNDS ? 'Результат' : 'Далі ▶'}</ActionButton>
        </div>
      )}
      <SoundToggle />
    </>
  );

  return <LabLayout scene={<TankSim thing={t} liquid={l} dropKey={drop} showDensity={hint || guess != null} hideThing={false} />} panel={panel} />;
};
