// Сторінка «Лазерний лабіринт»: 🪞 відбивання · 🌈 призма · 🎯 лабіринт · 💡 факти · ✅ тест.
import React from 'react';
import { Lesson } from '../shared/Lesson';
import { FactCards } from '../shared/FactCards';
import { Quiz } from '../shared/Quiz';
import { ReflectionLab } from './ReflectionLab';
import { PrismLab } from './PrismLab';
import { LaserGame } from './LaserGame';
import { FACTS, QUIZ } from './content';

const LaserPage: React.FC = () => (
  <Lesson
    tabs={[
      { id: 'mirror', icon: '🪞', label: 'Відбивання', content: <ReflectionLab /> },
      { id: 'prism', icon: '🌈', label: 'Призма', content: <PrismLab /> },
      { id: 'game', icon: '🎯', label: 'Лабіринт', content: <LaserGame /> },
      { id: 'facts', icon: '💡', label: 'Чи знаєте ви?', content: <FactCards facts={FACTS} /> },
      { id: 'quiz', icon: '✅', label: 'Перевір себе', content: <Quiz questions={QUIZ} /> },
    ]}
  />
);

export default LaserPage;
