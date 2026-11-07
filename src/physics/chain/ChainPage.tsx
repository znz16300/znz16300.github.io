// Сторінка «Конструктор ланцюгових реакцій»: 🧱 пісочниця · 🎯 рівні · 💡 факти · ✅ тест.
import React from 'react';
import { Lesson } from '../shared/Lesson';
import { FactCards } from '../shared/FactCards';
import { Quiz } from '../shared/Quiz';
import { Builder } from './Builder';
import { Levels } from './LevelsGame';
import { FACTS, QUIZ } from './content';

const ChainPage: React.FC = () => (
  <Lesson
    tabs={[
      { id: 'levels', icon: '🎯', label: '3 рівні', content: <Levels /> },
      { id: 'sandbox', icon: '🧱', label: 'Пісочниця', content: <Builder level={null} /> },
      { id: 'facts', icon: '💡', label: 'Чи знаєте ви?', content: <FactCards facts={FACTS} /> },
      { id: 'quiz', icon: '✅', label: 'Перевір себе', content: <Quiz questions={QUIZ} /> },
    ]}
  />
);

export default ChainPage;
