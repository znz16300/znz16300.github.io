// Тематичний тест: щоразу випадкові питання з банку й випадковий порядок відповідей. «Ще раз» - новий набір.
import React, { useMemo, useState } from 'react';
import { QuizRunner, shuffleOptions, type RunnerQuestion, type Verdict } from './QuizRunner';
import { shuffled } from './seed';

interface Props {
  bank: RunnerQuestion[];
  /** Скільки питань у раунді */
  perRound?: number;
  /** Дрібний підпис/назва для підсумку */
  verdict?: (score: number, total: number) => Verdict;
}

const defaultVerdict = (score: number, total: number): Verdict => {
  const r = score / total;
  if (r === 1) return { emoji: '🏆', title: 'Бездоганно!', text: 'Усі відповіді правильні. Ти — справжній знавець!' };
  if (r >= 0.7) return { emoji: '🌟', title: 'Дуже гарно!', text: 'Майже всі відповіді правильні. Спробуй ще раз — питання будуть іншими.' };
  if (r >= 0.4) return { emoji: '👍', title: 'Непогано!', text: 'Ти вже знаєш чимало. Пройди ще раз — набір питань зміниться.' };
  return { emoji: '📚', title: 'Є що відкрити!', text: 'Не засмучуйся — тепер ти знаєш більше. Спробуй ще раз!' };
};

export const TopicQuiz: React.FC<Props> = ({ bank, perRound = 8, verdict = defaultVerdict }) => {
  const [round, setRound] = useState(0);
  const questions = useMemo(
    () => shuffled(bank).slice(0, perRound).map((q) => shuffleOptions(q)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [round]
  );
  return <QuizRunner key={round} questions={questions} verdict={verdict} onRestart={() => setRound((r) => r + 1)} restartLabel="🔁 Нові питання" />;
};
