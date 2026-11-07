// Сторінка «Гармата козаків»: 🔬 лабораторія · 🎯 гра · 💡 факти · ✅ тест.
import React from 'react';
import { Lesson } from '../shared/Lesson';
import { FactCards } from '../shared/FactCards';
import { Quiz } from '../shared/Quiz';
import { CannonSim } from './CannonSim';
import { FACTS, QUIZ } from './content';

const CannonPage: React.FC = () => (
  <Lesson
    tabs={[
      { id: 'lab', icon: '🔬', label: 'Дослідити', content: <CannonSim mode="lab" /> },
      { id: 'game', icon: '🎯', label: '10 цілей', content: <CannonSim mode="game" /> },
      { id: 'facts', icon: '💡', label: 'Чи знаєте ви?', content: <FactCards facts={FACTS} /> },
      { id: 'quiz', icon: '✅', label: 'Перевір себе', content: <Quiz questions={QUIZ} /> },
    ]}
  />
);

export default CannonPage;
