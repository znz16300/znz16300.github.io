// «Кислоти й луги»: тест рідин · нейтралізація · гра · факти · тест.
import React from 'react';
import { Lesson } from '../../../physics/shared/Lesson';
import { FactCards } from '../../../physics/shared/FactCards';
import { TopicQuiz } from '../../shared/TopicQuiz';
import { TestLab } from './TestLab';
import { Neutralize } from './Neutralize';
import { SortGame } from './SortGame';
import { QUESTIONS } from './questions';

const FACTS = [
  { emoji: '🥬', title: 'Капуста як лакмус', text: 'Червонокачанна капуста містить антоціани — пігменти, які змінюють колір залежно від кислотності. Відвар можна зробити вдома.' },
  { emoji: '🍋', title: 'Кислі ≠ небезпечні', text: 'Лимон, яблуко, йогурт — кислі й корисні. Кислота небезпечна, лише якщо вона сильна й концентрована.' },
  { emoji: '🦷', title: 'Кислоти псують зуби', text: 'Бактерії у роті перетворюють цукор на кислоту, а вона руйнує емаль. Тому чистимо зуби — паста трохи лужна.' },
  { emoji: '🌊', title: 'Підкислення океану', text: 'Океан поглинає вуглекислий газ і стає трохи кислішим. Через це страждають корали й черепашки.' },
  { emoji: '🧪', title: 'Шкала pH', text: 'Кожна одиниця pH — це різниця у 10 разів. Лимонний сік (pH 2) у 100 000 разів «кислотніший» за чисту воду.' },
  { emoji: '🧫', title: 'Шлунок', text: 'Соляна кислота у шлунку дуже сильна (pH 1–2), вона вбиває мікроби й допомагає перетравлювати їжу.' },
];

const PhPage: React.FC = () => (
  <Lesson
    tabs={[
      { id: 'test', icon: '🥬', label: 'Досліди', content: <TestLab /> },
      { id: 'neutral', icon: '⚖️', label: 'Нейтралізація', content: <Neutralize /> },
      { id: 'game', icon: '🎯', label: 'Кислота чи луг?', content: <SortGame /> },
      { id: 'facts', icon: '💡', label: 'Чи знаєте ви?', content: <FactCards facts={FACTS} /> },
      { id: 'quiz', icon: '✅', label: 'Перевір себе', content: <TopicQuiz bank={QUESTIONS} perRound={8} /> },
    ]}
  />
);

export default PhPage;
