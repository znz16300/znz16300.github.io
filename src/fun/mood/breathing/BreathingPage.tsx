// «Дихаємо і заспокоюємось»: дихальні вправи й техніка заземлення.
import React from 'react';
import { Lesson } from '../../../physics/shared/Lesson';
import { BreathGuide } from './BreathGuide';
import { Grounding } from './Grounding';

const SQUARE = [
  { text: 'Вдих…', secs: 4, scale: 1 },
  { text: 'Затримай…', secs: 4, scale: 1 },
  { text: 'Видих…', secs: 4, scale: 0.55 },
  { text: 'Пауза…', secs: 4, scale: 0.55 },
];
const WAVE = [
  { text: 'Вдих…', secs: 4, scale: 1 },
  { text: 'Повільний видих…', secs: 6, scale: 0.55 },
];

const BreathingPage: React.FC = () => (
  <Lesson
    tabs={[
      {
        id: 'wave',
        icon: '🌊',
        label: 'Хвиля',
        content: <BreathGuide phases={WAVE} cycles={5} description="Вдихай носом, коли коло росте, і довго видихай, коли воно зменшується. Видих довший за вдих — це заспокоює." />,
      },
      {
        id: 'square',
        icon: '⬜',
        label: 'Квадрат',
        content: <BreathGuide phases={SQUARE} cycles={4} description="Вдих — пауза — видих — пауза: кожна частина по 4 секунди, як сторони квадрата." />,
      },
      { id: 'ground', icon: '🌍', label: '5-4-3-2-1', content: <Grounding /> },
    ]}
  />
);

export default BreathingPage;
