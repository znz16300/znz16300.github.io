// «Продовж прислів'я»: випадкові 8 прислів'їв, варіанти закінчень перемішані.
import React, { useMemo, useState } from 'react';
import { QuizRunner, shuffleOptions, type Verdict } from '../../shared/QuizRunner';
import { shuffled } from '../../shared/seed';
import { PROVERBS } from './proverbs';

const verdict = (score: number, total: number): Verdict => {
  const r = score / total;
  if (r === 1) return { emoji: '🏆', title: 'Мудрець!', text: 'Ти знаєш народну мудрість на відмінно.' };
  if (r >= 0.6) return { emoji: '🌟', title: 'Дуже добре!', text: 'Пройди ще раз — прислів\'я будуть іншими.' };
  return { emoji: '📖', title: 'Прислів\'я — це цікаво!', text: 'Прочитай значення після кожної відповіді й спробуй знову.' };
};

const ProverbsPage: React.FC = () => {
  const [round, setRound] = useState(0);
  const questions = useMemo(
    () =>
      shuffled(PROVERBS)
        .slice(0, 8)
        .map((p) => {
          const wrongs = shuffled(PROVERBS.filter((o) => o.end !== p.end))
            .slice(0, 3)
            .map((o) => o.end);
          return shuffleOptions({
            q: `Продовж прислів'я: «${p.start} …»`,
            options: [p.end, ...wrongs],
            answer: 0,
            explain: `«${p.start} ${p.end}». Значення: ${p.meaning}.`,
            tag: '🪶 Прислів\'я',
          });
        }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [round]
  );
  return <QuizRunner key={round} questions={questions} verdict={verdict} onRestart={() => setRound((r) => r + 1)} restartLabel="🔁 Нові прислів'я" />;
};

export default ProverbsPage;
