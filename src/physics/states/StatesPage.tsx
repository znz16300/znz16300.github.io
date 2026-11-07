// Сторінка «Три стани речовини».
import React from 'react';
import { Lesson } from '../shared/Lesson';
import { FactCards } from '../shared/FactCards';
import { Quiz } from '../shared/Quiz';
import { StatesLab } from './StatesLab';
import { BoilGame } from './BoilGame';
import { FACTS, QUIZ } from './content';

const StatesPage: React.FC = () => (
  <Lesson
    tabs={[
      { id: 'lab', icon: '🔬', label: 'Дослідити', content: <StatesLab /> },
      { id: 'game', icon: '🎯', label: 'Закип\'ятити', content: <BoilGame /> },
      { id: 'facts', icon: '💡', label: 'Чи знаєте ви?', content: <FactCards facts={FACTS} /> },
      { id: 'quiz', icon: '✅', label: 'Перевір себе', content: <Quiz questions={QUIZ} /> },
    ]}
  />
);

export default StatesPage;
