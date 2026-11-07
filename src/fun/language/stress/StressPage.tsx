// «Де наголос?»: наголошена голосна пишеться ВЕЛИКОЮ літерою. Обери правильну форму слова.
import React, { useMemo, useState } from 'react';
import { QuizRunner, shuffleOptions, type Verdict } from '../../shared/QuizRunner';
import { shuffled } from '../../shared/seed';
import { STRESS_WORDS } from './words';

const VOWELS = 'аеєиіїоуюя';

/** Повертає слово з великою літерою на n-й голосній (n з 1) */
const withStress = (word: string, n: number): string => {
  let k = 0;
  return [...word]
    .map((ch) => {
      if (VOWELS.includes(ch)) {
        k++;
        if (k === n) return ch.toUpperCase();
      }
      return ch;
    })
    .join('');
};
const vowelCount = (w: string) => [...w].filter((c) => VOWELS.includes(c)).length;

const verdict = (score: number, total: number): Verdict => {
  const r = score / total;
  if (r === 1) return { emoji: '🏆', title: 'Грамотій!', text: 'Усі наголоси правильні. Ти говориш бездоганно!' };
  if (r >= 0.6) return { emoji: '🌟', title: 'Гарний результат!', text: 'Пройди ще раз, щоб запам\'ятати складні слова.' };
  return { emoji: '📖', title: 'Тренуємося!', text: 'Наголос треба запам\'ятовувати. Спробуй ще раз.' };
};

const StressPage: React.FC = () => {
  const [round, setRound] = useState(0);
  const questions = useMemo(
    () =>
      shuffled(STRESS_WORDS)
        .slice(0, 8)
        .map((w) => {
          const total = vowelCount(w.word);
          const others = shuffled(Array.from({ length: total }, (_, i) => i + 1).filter((n) => n !== w.stress)).slice(0, 3);
          return shuffleOptions({
            q: `Як правильно наголошувати слово «${w.word}»?`,
            options: [withStress(w.word, w.stress), ...others.map((n) => withStress(w.word, n))],
            answer: 0,
            explain: `Правильно: ${withStress(w.word, w.stress)}. Велика літера — наголошений склад.`,
            hint: 'Наголошена голосна написана великою літерою.',
            tag: '🔊 Наголос',
          });
        }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [round]
  );
  return <QuizRunner key={round} questions={questions} verdict={verdict} onRestart={() => setRound((r) => r + 1)} restartLabel="🔁 Нові слова" />;
};

export default StressPage;
