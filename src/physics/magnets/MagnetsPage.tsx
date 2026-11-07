// Сторінка «Магніти й компас».
import React from 'react';
import { Lesson } from '../shared/Lesson';
import { FactCards } from '../shared/FactCards';
import { Quiz } from '../shared/Quiz';
import { FieldLab } from './FieldLab';
import { MazeGame } from './MazeGame';
import { FACTS, QUIZ } from './content';

const MagnetsPage: React.FC = () => (
  <Lesson
    tabs={[
      { id: 'lab', icon: '🔬', label: 'Дослідити', content: <FieldLab /> },
      { id: 'game', icon: '🎯', label: 'Лабіринт', content: <MazeGame /> },
      { id: 'facts', icon: '💡', label: 'Чи знаєте ви?', content: <FactCards facts={FACTS} /> },
      { id: 'quiz', icon: '✅', label: 'Перевір себе', content: <Quiz questions={QUIZ} /> },
    ]}
  />
);

export default MagnetsPage;
