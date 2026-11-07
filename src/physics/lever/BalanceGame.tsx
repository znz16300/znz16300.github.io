// 🎯 Терези: ліворуч - готовий вантаж, праворуч - клади гирі й врівноваж. Чим менше гир, тим більше балів.
import React, { useState } from 'react';
import { ActionButton, Chip, LabLayout, StatBox } from '../shared/ui';
import { SoundToggle } from '../shared/SoundToggle';
import { useBest } from '../shared/useBest';
import { playBeep, unlockAudio } from '../shared/sound';
import { MASSES, count, minWeights, torque, type Load } from './calc';
import { LeverSim } from './LeverSim';

const ROUNDS = 5;

interface Task {
  left: Load;
  min: number;
}

const makeTask = (): Task => {
  for (;;) {
    const left: Load = new Map();
    const k = 1 + Math.floor(Math.random() * 2);
    for (let i = 0; i < k; i++) {
      const slot = -(1 + Math.floor(Math.random() * 5));
      const m = MASSES[Math.floor(Math.random() * MASSES.length)];
      left.set(slot, [...(left.get(slot) ?? []), m]);
    }
    const T = torque(left);
    if (T < 6 || T > 40) continue;
    const min = minWeights(T, 4);
    if (min != null && min >= 1) return { left, min };
  }
};

export const BalanceGame: React.FC = () => {
  const [best, submit] = useBest('lever-balance');
  const [task, setTask] = useState(makeTask);
  const [right, setRight] = useState<Load>(new Map());
  const [mass, setMass] = useState(2);
  const [mode, setMode] = useState<'add' | 'remove'>('add');
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [gain, setGain] = useState<number | null>(null);
  const [done, setDone] = useState(false);
  const [record, setRecord] = useState(false);

  const full: Load = new Map([...task.left, ...right]);
  const L = torque(task.left);
  const R = torque(right);
  const used = count(right);
  const balanced = L === R && used > 0;

  const tap = (slot: number) => {
    if (gain != null) return;
    const next: Load = new Map(right);
    const cur = [...(next.get(slot) ?? [])];
    if (mode === 'add') {
      if (cur.length >= 3) return;
      cur.push(mass);
    } else cur.pop();
    if (cur.length) next.set(slot, cur);
    else next.delete(slot);
    setRight(next);
  };

  const confirm = () => {
    unlockAudio();
    const g = Math.max(20, 100 - (used - task.min) * 25);
    setGain(g);
    setScore((s) => s + g);
    playBeep(true);
  };
  const next = () => {
    if (round + 1 >= ROUNDS) {
      setDone(true);
      setRecord(submit(score));
      return;
    }
    setRound(round + 1);
    setTask(makeTask());
    setRight(new Map());
    setGain(null);
  };
  const restart = () => {
    setRound(0);
    setScore(0);
    setTask(makeTask());
    setRight(new Map());
    setGain(null);
    setDone(false);
    setRecord(false);
  };

  const panel = done ? (
    <div className="bg-slate-800/90 rounded-xl p-4 text-white text-center">
      <div className="text-5xl">{record ? '🏆' : '⚖️'}</div>
      <div className="text-2xl font-bold">Бали: {score}</div>
      <div className="text-slate-300 mb-3">{record ? 'Новий рекорд!' : `Рекорд: ${best}`}</div>
      <ActionButton onClick={restart}>🔁 Ще раз</ActionButton>
    </div>
  ) : (
    <>
      <div className="grid grid-cols-3 gap-2">
        <StatBox label="Раунд" value={`${round + 1}/${ROUNDS}`} />
        <StatBox label="Гир" value={used} />
        <StatBox label="Бали" value={score} />
      </div>
      <div className="flex gap-2 flex-wrap">
        {MASSES.map((m) => (
          <Chip key={m} selected={mass === m && mode === 'add'} onClick={() => { setMass(m); setMode('add'); }}>
            ➕ {m} кг
          </Chip>
        ))}
        <Chip selected={mode === 'remove'} onClick={() => setMode('remove')}>➖ Зняти</Chip>
      </div>
      <div className="bg-slate-800/80 rounded-xl p-3 text-white text-lg">
        Ліворуч: <b>{L}</b> · Праворуч: <b>{R}</b>
        <div className="text-slate-300 text-sm">Врівноваж гойдалку якомога меншою кількістю гир.</div>
      </div>
      {gain == null ? (
        <ActionButton onClick={confirm} disabled={!balanced}>✔ Готово</ActionButton>
      ) : (
        <div className="bg-green-900/60 border border-green-400/50 rounded-xl p-3 text-white">
          <div className="text-xl font-bold mb-1">+{gain} балів</div>
          <div className="mb-2">{used === task.min ? 'Ідеально — менше гир неможливо!' : `Можна було за ${task.min} ${task.min === 1 ? 'гирю' : 'гирі'}.`}</div>
          <ActionButton onClick={next}>{round + 1 >= ROUNDS ? 'Результат' : 'Далі ▶'}</ActionButton>
        </div>
      )}
      <ActionButton onClick={() => setRight(new Map())} variant="secondary" disabled={gain != null}>↺ Скинути</ActionButton>
      <SoundToggle />
    </>
  );

  return <LabLayout scene={<LeverSim load={full} editable="R" onTap={tap} />} panel={panel} />;
};
