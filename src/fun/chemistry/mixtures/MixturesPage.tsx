// «Розділи суміш»: гра · факти · тест.
import React from 'react';
import { Lesson } from '../../../physics/shared/Lesson';
import { FactCards } from '../../../physics/shared/FactCards';
import { TopicQuiz } from '../../shared/TopicQuiz';
import { SeparateGame } from './SeparateGame';
import { QUESTIONS } from './questions';

const FACTS = [
  { emoji: '☕', title: 'Кава й чай — теж фільтрування', text: 'Паперовий фільтр у кавоварці й ситечко для чаю затримують тверді частинки й пропускають рідину.' },
  { emoji: '🛢️', title: 'Перегонка нафти', text: 'Нафту нагрівають у високих колонах: з різних «поверхів» збирають бензин, гас, дизельне пальне й мазут, бо вони кипять при різних температурах.' },
  { emoji: '🚰', title: 'Очищення води', text: 'Водоканал очищує воду відстоюванням, фільтруванням крізь пісок і знезараженням.' },
  { emoji: '🥇', title: 'Золотошукачі', text: 'Золотоносний пісок промивали водою: важкі крупинки золота осідали, а легкий пісок змивало.' },
  { emoji: '🌬️', title: 'Повітря — суміш', text: 'Повітря — це суміш газів. Його охолоджують до −190 °C і перегонкою отримують чистий азот і кисень.' },
];

const MixturesPage: React.FC = () => (
  <Lesson
    tabs={[
      { id: 'game', icon: '🧲', label: 'Розділи суміш', content: <SeparateGame /> },
      { id: 'facts', icon: '💡', label: 'Чи знаєте ви?', content: <FactCards facts={FACTS} /> },
      { id: 'quiz', icon: '✅', label: 'Перевір себе', content: <TopicQuiz bank={QUESTIONS} perRound={8} /> },
    ]}
  />
);

export default MixturesPage;
