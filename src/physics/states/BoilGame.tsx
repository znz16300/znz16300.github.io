// 🎯 Закип'ятити вчасно: обери найслабший нагрівач, якому вистачить часу. Q = 4200·m·ΔT, t = Q / P.
import React, { useEffect, useRef, useState } from 'react';
import { ActionButton, Chip, LabLayout, StatBox } from '../shared/ui';
import { SoundToggle } from '../shared/SoundToggle';
import { useBest } from '../shared/useBest';
import { playBeep, unlockAudio } from '../shared/sound';
import { StatesSim } from './StatesSim';

const POWERS = [500, 1000, 1500, 2000, 3000];
const ROUNDS = 5;
const T0 = 20;
const C = 4200;

interface Task { m: number; limit: number }
const makeTask = (): Task => {
  const m = [0.2, 0.3, 0.5, 0.6, 1][Math.floor(Math.random() * 5)];
  const idx = 1 + Math.floor(Math.random() * 4);
  const need = (C * m * (100 - T0)) / POWERS[idx]; // секунди для обраного «ідеального» нагрівача
  return { m, limit: Math.ceil(need / 10) * 10 + 10 };
};
const timeFor = (m: number, P: number) => (C * m * (100 - T0)) / P;
const best = (t: Task) => POWERS.find((P) => timeFor(t.m, P) <= t.limit) ?? 3000;

export const BoilGame: React.FC = () => {
  const [record, submitBest] = useBest('states-boil');
  const [task, setTask] = useState(makeTask);
  const [P, setP] = useState(1000);
  const [temp, setTemp] = useState(T0);
  const [phase, setPhase] = useState<'pick' | 'run' | 'res'>('pick');
  const [clock, setClock] = useState(0);
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [gain, setGain] = useState(0);
  const [done, setDone] = useState(false);
  const [rec, setRec] = useState(false);
  const raf = useRef(0);

  useEffect(() => () => cancelAnimationFrame(raf.current), []);

  const start = () => {
    unlockAudio();
    setPhase('run');
    const total = timeFor(task.m, P);
    const speed = Math.max(total, task.limit) / 6; // гра-секунд за реальну секунду: усе вкладається у ~6 с
    let last = performance.now();
    let sim = 0;
    const step = (now: number) => {
      sim += ((now - last) / 1000) * speed;
      last = now;
      const frac = Math.min(1, sim / total);
      setTemp(T0 + 80 * frac);
      setClock(Math.min(sim, Math.max(total, task.limit)));
      if (sim >= Math.max(total, task.limit) || (frac >= 1 && sim >= total && total > task.limit)) {
        finish(total);
        return;
      }
      raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
  };
  const finish = (total: number) => {
    const ok = total <= task.limit;
    const g = !ok ? 0 : P === best(task) ? 100 : 50;
    setGain(g);
    setScore((s) => s + g);
    setPhase('res');
    playBeep(ok);
  };
  const next = () => {
    if (round + 1 >= ROUNDS) {
      setDone(true);
      setRec(submitBest(score));
      return;
    }
    setRound(round + 1);
    setTask(makeTask());
    setTemp(T0);
    setClock(0);
    setPhase('pick');
  };
  const restart = () => {
    setRound(0); setScore(0); setTask(makeTask()); setTemp(T0); setClock(0); setPhase('pick'); setDone(false); setRec(false);
  };

  const total = timeFor(task.m, P);
  const panel = done ? (
    <div className="bg-slate-800/90 rounded-xl p-4 text-white text-center">
      <div className="text-5xl">{rec ? '🏆' : '☕'}</div>
      <div className="text-2xl font-bold">Бали: {score}</div>
      <div className="text-slate-300 mb-3">{rec ? 'Новий рекорд!' : `Рекорд: ${record}`}</div>
      <ActionButton onClick={restart}>🔁 Ще раз</ActionButton>
    </div>
  ) : (
    <>
      <div className="grid grid-cols-3 gap-2">
        <StatBox label="Раунд" value={`${round + 1}/${ROUNDS}`} />
        <StatBox label="Бали" value={score} />
        <StatBox label="Час, с" value={Math.round(clock)} hint={`ліміт ${task.limit}`} />
      </div>
      <div className="bg-slate-800/80 rounded-xl p-3 text-white text-lg">
        Закип'ятити <b>{String(task.m).replace('.', ',')} кг</b> води від 20 °C за <b>{task.limit} с</b>. Обери <b>найслабший</b> нагрівач, якого вистачить!
      </div>
      <div className="flex gap-2 flex-wrap">
        {POWERS.map((p) => (
          <Chip key={p} selected={P === p} onClick={() => phase === 'pick' && setP(p)}>
            {p} Вт
          </Chip>
        ))}
      </div>
      {phase === 'pick' && <ActionButton onClick={start}>🔥 Увімкнути</ActionButton>}
      {phase === 'run' && <div className="text-white text-center">Гріємо…</div>}
      {phase === 'res' && (
        <div className={`rounded-xl p-3 text-white border ${gain ? 'bg-green-900/60 border-green-400/50' : 'bg-red-900/60 border-red-400/50'}`}>
          <div className="text-xl font-bold mb-1">{gain === 100 ? 'Ідеально! +100' : gain === 50 ? 'Закипіла, але міг слабший: +50' : 'Не встигла закипіти: +0'}</div>
          <div className="mb-2 text-sm">З нагрівачем {P} Вт потрібно {Math.round(total)} с. Для цього завдання вистачало {best(task)} Вт.</div>
          <ActionButton onClick={next}>{round + 1 >= ROUNDS ? 'Результат' : 'Далі ▶'}</ActionButton>
        </div>
      )}
      <SoundToggle />
    </>
  );
  return <LabLayout scene={<StatesSim temp={temp} />} panel={panel} />;
};
