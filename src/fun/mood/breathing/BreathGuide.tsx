// Універсальна дихальна вправа: набір фаз (вдих/затримка/видих) × кількість циклів, анімоване коло.
import React, { useEffect, useState } from 'react';

export interface BreathPhase {
  text: string;
  secs: number;
  /** розмір кола в кінці фази: 1 - велике, 0.55 - мале */
  scale: number;
}

export const BreathGuide: React.FC<{ phases: BreathPhase[]; cycles: number; description: string }> = ({ phases, cycles, description }) => {
  const [running, setRunning] = useState(false);
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!running) return;
    const phase = phases[step % phases.length];
    const t = window.setTimeout(() => {
      if (step + 1 >= cycles * phases.length) {
        setRunning(false);
        setDone(true);
      } else setStep(step + 1);
    }, phase.secs * 1000);
    return () => window.clearTimeout(t);
  }, [running, step, phases, cycles]);

  const start = () => {
    setStep(0);
    setDone(false);
    setRunning(true);
  };

  const phase = phases[step % phases.length];
  const prevScale = phases[(step + phases.length - 1) % phases.length].scale;
  const scale = running ? phase.scale : 0.55;
  const growing = running && phase.scale !== prevScale;
  const cycle = Math.floor(step / phases.length) + 1;

  return (
    <div className="w-full h-full overflow-auto flex flex-col items-center justify-center gap-4 p-4 text-white text-center">
      <p className="text-lg md:text-2xl text-slate-200 max-w-2xl">{description}</p>
      <div className="w-52 h-52 md:w-72 md:h-72 flex items-center justify-center">
        <div
          className="rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 shadow-2xl flex items-center justify-center font-bold text-2xl"
          style={{
            width: '100%',
            height: '100%',
            transform: `scale(${scale})`,
            transition: `transform ${growing ? phase.secs : 0.4}s ease-in-out`,
          }}
        >
          {running ? phase.text : done ? '👍' : '😮‍💨'}
        </div>
      </div>
      {running && (
        <div className="text-slate-300 text-lg">
          Цикл {cycle} з {cycles}
        </div>
      )}
      {!running && (
        <button onClick={start} className="px-8 py-4 rounded-2xl bg-sky-600 hover:bg-sky-500 text-xl font-bold active:scale-95">
          {done ? '🔁 Ще раз' : '▶ Почати'}
        </button>
      )}
      {done && <div className="text-xl text-sky-200">Гарна робота! Помічаєш, як стало спокійніше?</div>}
    </div>
  );
};
