// «Тест настрою»: 6 питань з емодзі-відповідями -> «профіль» настрою, поради, дихальна вправа.
// Нічого не зберігається й нікуди не надсилається. Це гра, не медичний тест.
import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Breathing } from './Breathing';
import { MOOD_QUESTIONS, profileFor, type MoodQuestion } from './mood';
import { shuffled } from '../../shared/seed';

const PER_TEST = 6;

/** Випадкові 6 питань із банку, відповіді в кожному - у випадковому порядку */
const makeTest = (): MoodQuestion[] =>
  shuffled(MOOD_QUESTIONS)
    .slice(0, PER_TEST)
    .map((q) => ({ ...q, options: shuffled(q.options) }));

const MoodTestPage: React.FC = () => {
  const navigate = useNavigate();
  const [i, setI] = useState(0);
  const [total, setTotal] = useState(0);
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);
  const [picked, setPicked] = useState<number | null>(null);
  const [round, setRound] = useState(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const questions = useMemo(makeTest, [round]);

  const restart = () => {
    setRound((r) => r + 1);
    setI(0);
    setTotal(0);
    setPicked(null);
    setDone(false);
  };

  if (!started) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-5 p-6 text-white text-center overflow-auto">
        <div className="text-8xl">😊</div>
        <h2 className="text-3xl md:text-5xl font-extrabold">Який у тебе сьогодні настрій?</h2>
        <p className="text-xl md:text-2xl text-slate-300 max-w-2xl">
          Відповідай на 6 коротких питань — і дізнайся, як почувається твій день і що допоможе почуватися ще краще.
        </p>
        <p className="text-base text-slate-400 max-w-xl">Це гра, а не діагноз. Результат нікуди не зберігається й ніхто його не побачить.</p>
        <button onClick={() => setStarted(true)} className="px-10 py-5 rounded-2xl bg-pink-600 hover:bg-pink-500 text-2xl font-bold active:scale-95">
          Почати ▶
        </button>
      </div>
    );
  }

  if (done) {
    const p = profileFor(total);
    return (
      <div className="w-full h-full overflow-auto p-3 md:p-6 text-white flex flex-col items-center gap-4">
        <div className="text-7xl">{p.emoji}</div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-center">{p.title}</h2>
        <p className="text-xl md:text-2xl text-slate-200 text-center max-w-3xl">{p.text}</p>
        <ul className="w-full max-w-3xl flex flex-col gap-2">
          {p.tips.map((t) => (
            <li key={t} className="bg-slate-800/90 rounded-2xl px-4 py-3 text-lg md:text-xl">
              ✨ {t}
            </li>
          ))}
        </ul>
        <Breathing />
        <div className="flex flex-wrap gap-3 justify-center pb-2">
          {p.needSupport && (
            <button
              onClick={() => navigate('/kiosk/psypho/phones')}
              className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-lg font-bold active:scale-95"
            >
              📞 Телефони психологічної допомоги
            </button>
          )}
          <button onClick={restart} className="px-6 py-3 rounded-xl bg-green-600 hover:bg-green-500 text-lg font-bold active:scale-95">
            🔁 Пройти ще раз
          </button>
        </div>
      </div>
    );
  }

  const q = questions[i];
  const choose = (idx: number) => {
    if (picked != null) return;
    setPicked(idx);
    const pts = q.options[idx].points;
    window.setTimeout(() => {
      setTotal((t) => t + pts);
      setPicked(null);
      if (i + 1 >= questions.length) setDone(true);
      else setI(i + 1);
    }, 350);
  };

  return (
    <div className="w-full h-full flex flex-col gap-3 p-3 md:p-6 text-white overflow-auto">
      <div className="text-slate-400 font-semibold">
        Питання {i + 1} з {questions.length}
      </div>
      <div className="h-2 rounded-full bg-slate-700 overflow-hidden shrink-0">
        <div className="h-full bg-pink-500 transition-all" style={{ width: `${(i / questions.length) * 100}%` }} />
      </div>
      <h2 className="text-2xl md:text-4xl font-bold leading-snug">{q.q}</h2>
      <div className="grid gap-3 md:grid-cols-2 flex-1 content-start">
        {q.options.map((o, idx) => (
          <button
            key={idx}
            onClick={() => choose(idx)}
            className={`flex items-center gap-4 px-5 py-5 rounded-2xl text-lg md:text-2xl font-semibold text-left transition-all active:scale-[0.98] ${
              picked === idx ? 'bg-pink-600 ring-2 ring-pink-300' : 'bg-slate-700 hover:bg-slate-600'
            }`}
          >
            <span className="text-4xl md:text-5xl">{o.emoji}</span>
            <span>{o.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MoodTestPage;
