// «Слова-антоніми»: до слова - протилежне за значенням. Випадкові слова, перемішані варіанти.
import React, { useMemo, useState } from 'react';
import { QuizRunner, shuffleOptions, type Verdict } from '../../shared/QuizRunner';
import { shuffled } from '../../shared/seed';
import { ANTONYMS } from './words';

const verdict = (score: number, total: number): Verdict => {
  const r = score / total;
  if (r === 1) return { emoji: '🏆', title: 'Майстер слова!', text: 'Усі антоніми відгадані.' };
  if (r >= 0.6) return { emoji: '🌟', title: 'Дуже добре!', text: 'Спробуй ще раз — слова будуть іншими.' };
  return { emoji: '📖', title: 'Збагачуй словник!', text: 'Антоніми допомагають говорити точніше. Спробуй ще.' };
};

const AntonymsPage: React.FC = () => {
  const [round, setRound] = useState(0);
  const questions = useMemo(
    () =>
      shuffled(ANTONYMS)
        .slice(0, 8)
        .map(([a, b]) => {
          // напрям пари вибираємо випадково
          const [w, right] = Math.random() < 0.5 ? [a, b] : [b, a];
          const wrongs = shuffled(ANTONYMS.flat().filter((x) => x !== a && x !== b)).slice(0, 3);
          return shuffleOptions({
            q: `Добери антонім до слова «${w}»`,
            options: [right, ...wrongs],
            answer: 0,
            explain: `«${w}» — «${right}». Антоніми — слова з протилежним значенням.`,
            tag: '↔️ Антоніми',
          });
        }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [round]
  );
  return <QuizRunner key={round} questions={questions} verdict={verdict} onRestart={() => setRound((r) => r + 1)} restartLabel="🔁 Нові слова" />;
};

export default AntonymsPage;
