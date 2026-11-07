// «Цікава мова»: вікторина «Що означає вираз?», словничок фразеологізмів і цікавинки про слова.
import React, { useMemo, useState } from 'react';
import { Lesson } from '../../../physics/shared/Lesson';
import { FactCards, type Fact } from '../../../physics/shared/FactCards';
import { QuizRunner, shuffleOptions, type RunnerQuestion, type Verdict } from '../../shared/QuizRunner';
import { shuffled } from '../../shared/seed';
import { PHRASES } from './phrases';
import { WORD_FACTS } from './words';

const ROUND = 8;

const makeRound = (): RunnerQuestion[] =>
  shuffled(PHRASES)
    .slice(0, ROUND)
    .map((p) => {
      const others = shuffled(PHRASES.filter((o) => o.phrase !== p.phrase && (!p.group || o.group !== p.group)));
      const wrongs: string[] = [];
      for (const o of others) {
        if (wrongs.length === 3) break;
        if (!wrongs.includes(o.meaning)) wrongs.push(o.meaning);
      }
      return shuffleOptions({
        q: `Що означає вираз «${p.phrase}»?`,
        options: [p.meaning, ...wrongs],
        answer: 0,
        explain: `«${p.phrase}» — це ${p.meaning}. Наприклад: ${p.example}`,
        tag: '💬 Фразеологізм',
      });
    });

const verdict = (score: number, total: number): Verdict => {
  const r = score / total;
  if (r === 1) return { emoji: '🏆', title: 'Знавець мови!', text: 'Усі фразеологізми розгадано. Ти справжній майстер слова!' };
  if (r >= 0.6) return { emoji: '🌟', title: 'Гарний результат!', text: 'Заглянь у вкладку «Словничок» — там є значення й приклади всіх виразів.' };
  return { emoji: '📖', title: 'Мова — це цікаво!', text: 'Перегляньте «Словничок» і спробуй ще раз — вирази швидко запам\'ятовуються.' };
};

const GuessTab: React.FC = () => {
  const [round, setRound] = useState(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const questions = useMemo(makeRound, [round]);
  return <QuizRunner key={round} questions={questions} verdict={verdict} onRestart={() => setRound((r) => r + 1)} restartLabel="🔁 Нові вирази" />;
};

const DICTIONARY: Fact[] = PHRASES.map((p) => ({
  emoji: '💬',
  title: p.phrase,
  text: `${p.meaning[0].toUpperCase()}${p.meaning.slice(1)}. Наприклад: ${p.example}`,
}));

const PhraseologyPage: React.FC = () => (
  <Lesson
    tabs={[
      { id: 'guess', icon: '🎯', label: 'Що це означає?', content: <GuessTab /> },
      { id: 'dict', icon: '📖', label: 'Словничок', content: <FactCards facts={DICTIONARY} /> },
      { id: 'words', icon: '✨', label: 'Цікаві слова', content: <FactCards facts={WORD_FACTS} /> },
    ]}
  />
);

export default PhraseologyPage;
