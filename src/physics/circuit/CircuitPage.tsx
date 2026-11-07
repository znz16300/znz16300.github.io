// Сторінка «Електричне коло»: 🔬 збери коло · 🎄 гра з гірляндою · 💡 факти · ✅ тест.
import React from 'react';
import { Lesson } from '../shared/Lesson';
import { FactCards } from '../shared/FactCards';
import { Quiz } from '../shared/Quiz';
import { CircuitLab } from './CircuitLab';
import { Garland } from './Garland';
import { FACTS, QUIZ } from './content';

const CircuitPage: React.FC = () => (
  <Lesson
    tabs={[
      { id: 'lab', icon: '🔬', label: 'Збери коло', content: <CircuitLab /> },
      { id: 'game', icon: '🎄', label: 'Гірлянда', content: <Garland /> },
      { id: 'facts', icon: '💡', label: 'Чи знаєте ви?', content: <FactCards facts={FACTS} /> },
      { id: 'quiz', icon: '✅', label: 'Перевір себе', content: <Quiz questions={QUIZ} /> },
    ]}
  />
);

export default CircuitPage;
