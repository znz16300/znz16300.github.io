// «Дихаємо разом»: коло збільшується (вдих), тримається, зменшується (видих). Цикл 4-2-4 с, 4 повтори.
import React, { useEffect, useState } from 'react';

const PHASES = [
  { text: 'Вдих…', secs: 4, scale: 1.0 },
  { text: 'Тримай…', secs: 2, scale: 1.0 },
  { text: 'Видих…', secs: 4, scale: 0.55 },
];
const CYCLES = 4;

export const Breathing: React.FC = () => {
  const [running, setRunning] = useState(false);
  const [step, setStep] = useState(0); // 0..CYCLES*3-1
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!running) return;
    const phase = PHASES[step % PHASES.length];
    const t = window.setTimeout(() => {
      if (step + 1 >= CYCLES * PHASES.length) {
        setRunning(false);
        setDone(true);
      } else setStep(step + 1);
    }, phase.secs * 1000);
    return () => window.clearTimeout(t);
  }, [running, step]);

  const start = () => {
    setStep(0);
    setDone(false);
    setRunning(true);
  };

  const phase = PHASES[step % PHASES.length];
  // перед стартом коло «маленьке»; на вдиху росте до 1, на видиху стискається
  const scale = running ? phase.scale : 0.55;
  const dur = running && phase.text !== 'Тримай…' ? phase.secs : 0.4;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-44 h-44 md:w-56 md:h-56 flex items-center justify-center">
        <div
          className="rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 shadow-2xl flex items-center justify-center text-white font-bold text-xl"
          style={{
            width: '100%',
            height: '100%',
            transform: `scale(${scale})`,
            transition: `transform ${dur}s ease-in-out`,
          }}
        >
          {running ? phase.text : done ? '👍' : '😮‍💨'}
        </div>
      </div>
      {!running && (
        <button onClick={start} className="px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-lg font-bold text-white active:scale-95">
          {done ? '🔁 Ще раз подихати' : '🌬️ Дихаємо разом'}
        </button>
      )}
      {done && <div className="text-lg text-sky-200">Гарна робота! Як почуваєшся?</div>}
    </div>
  );
};
