// Сторінка «Музика хвиль»: 🔬 лабораторія · 🎯 гра на слух · 💡 факти · ✅ тест.
import React from 'react';
import { Lesson } from '../shared/Lesson';
import { FactCards } from '../shared/FactCards';
import { Quiz } from '../shared/Quiz';
import { WaveLab } from './WaveLab';
import { EarChallenge } from './EarChallenge';
import { FACTS, QUIZ } from './content';

const WavesPage: React.FC = () => (
  <Lesson
    tabs={[
      { id: 'lab', icon: '🔬', label: 'Дослідити', content: <WaveLab /> },
      { id: 'game', icon: '🎧', label: 'На слух', content: <EarChallenge /> },
      { id: 'facts', icon: '💡', label: 'Чи знаєте ви?', content: <FactCards facts={FACTS} /> },
      { id: 'quiz', icon: '✅', label: 'Перевір себе', content: <Quiz questions={QUIZ} /> },
    ]}
  />
);

export default WavesPage;
