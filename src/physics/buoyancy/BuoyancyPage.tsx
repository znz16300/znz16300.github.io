// Сторінка «Плаває чи тоне?»: 🔬 лабораторія · 🎯 передбач і перевір · 💡 факти · ✅ тест.
import React from 'react';
import { Lesson } from '../shared/Lesson';
import { FactCards } from '../shared/FactCards';
import { Quiz } from '../shared/Quiz';
import { BuoyLab } from './BuoyLab';
import { PredictGame } from './PredictGame';
import { FACTS, QUIZ } from './content';

const BuoyancyPage: React.FC = () => (
  <Lesson
    tabs={[
      { id: 'lab', icon: '🔬', label: 'Дослідити', content: <BuoyLab /> },
      { id: 'game', icon: '🎯', label: 'Передбач', content: <PredictGame /> },
      { id: 'facts', icon: '💡', label: 'Чи знаєте ви?', content: <FactCards facts={FACTS} /> },
      { id: 'quiz', icon: '✅', label: 'Перевір себе', content: <Quiz questions={QUIZ} /> },
    ]}
  />
);

export default BuoyancyPage;
