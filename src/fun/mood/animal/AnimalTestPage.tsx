// «Яка ти тварина?»: веселий тест. Питання - випадковий порядок, варіанти - випадковий порядок.
import React, { useMemo, useState } from 'react';
import { shuffled } from '../../shared/seed';
import { ANIMALS, ANIMAL_QUESTIONS, type AnimalId } from './animals';

const AnimalTestPage: React.FC = () => {
  const [round, setRound] = useState(0);
  const questions = useMemo(
    () => shuffled(ANIMAL_QUESTIONS).map((q) => ({ ...q, options: shuffled(q.options) })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [round]
  );
  const [i, setI] = useState(0);
  const [votes, setVotes] = useState<Record<AnimalId, number>>({ fox: 0, wolf: 0, dolphin: 0, owl: 0 });

  const restart = () => {
    setRound((r) => r + 1);
    setI(0);
    setVotes({ fox: 0, wolf: 0, dolphin: 0, owl: 0 });
  };

  if (i >= questions.length) {
    const best = (Object.keys(votes) as AnimalId[]).sort((a, b) => votes[b] - votes[a] || Math.random() - 0.5)[0];
    const a = ANIMALS[best];
    return (
      <div className="w-full h-full overflow-auto flex flex-col items-center justify-center gap-4 p-6 text-white text-center">
        <div className="text-8xl">{a.emoji}</div>
        <h2 className="text-3xl md:text-5xl font-extrabold">Ти — {a.name}!</h2>
        <p className="text-xl md:text-2xl text-slate-200 max-w-3xl">{a.text}</p>
        <ul className="flex flex-col gap-2 w-full max-w-xl">
          {a.strengths.map((s) => (
            <li key={s} className="bg-slate-800/90 rounded-xl px-4 py-3 text-lg md:text-xl">
              ⭐ {s}
            </li>
          ))}
        </ul>
        <button onClick={restart} className="px-8 py-4 rounded-2xl bg-green-600 hover:bg-green-500 text-xl font-bold active:scale-95">
          🔁 Пройти ще раз
        </button>
      </div>
    );
  }

  const q = questions[i];
  return (
    <div className="w-full h-full flex flex-col gap-3 p-3 md:p-6 text-white overflow-auto">
      <div className="text-slate-400 font-semibold">
        Питання {i + 1} з {questions.length}
      </div>
      <div className="h-2 rounded-full bg-slate-700 overflow-hidden shrink-0">
        <div className="h-full bg-green-500 transition-all" style={{ width: `${(i / questions.length) * 100}%` }} />
      </div>
      <h2 className="text-2xl md:text-4xl font-bold leading-snug">{q.q}</h2>
      <div className="grid gap-3 md:grid-cols-2">
        {q.options.map((o) => (
          <button
            key={o.text}
            onClick={() => {
              setVotes((v) => ({ ...v, [o.animal]: v[o.animal] + 1 }));
              setI(i + 1);
            }}
            className="px-5 py-5 rounded-2xl bg-slate-700 hover:bg-slate-600 text-lg md:text-2xl font-semibold text-left active:scale-[0.98]"
          >
            {o.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AnimalTestPage;
