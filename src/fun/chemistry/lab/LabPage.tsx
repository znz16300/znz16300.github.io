// «Віртуальна лабораторія»: змішування · гра · факти · тест.
import React from 'react';
import { Lesson } from '../../../physics/shared/Lesson';
import { FactCards } from '../../../physics/shared/FactCards';
import { TopicQuiz } from '../../shared/TopicQuiz';
import { MixLab } from './MixLab';
import { Predict } from './Predict';
import { QUESTIONS } from './questions';

const FACTS = [
  { emoji: '🔬', title: 'Ознаки реакції', text: 'Газ, осад, зміна кольору, тепло чи світло — ознаки, що утворилися нові речовини.' },
  { emoji: '🥽', title: 'Правила безпеки', text: 'Окуляри, халат, нічого не пробувати, нічого не нюхати впритул, довго не нагрівати склянку з закритою кришкою — і слухати вчителя.' },
  { emoji: '🌋', title: 'Шкільний «вулкан»', text: 'Сода й оцет — найбезпечніша реакція з газом. Але в закритій пляшці вона може вибухнути, бо газу стає забагато.' },
  { emoji: '🎨', title: 'Хімічні хамелеони', text: 'Індикатори змінюють колір залежно від кислотності. Саме так працюють лакмусові папірці.' },
  { emoji: '🧪', title: 'Каталізатор', text: 'Ферменти дріжджів прискорюють розклад пероксиду в мільйони разів. Біологічні каталізатори є і в нашому тілі.' },
];

const LabPage: React.FC = () => (
  <Lesson
    tabs={[
      { id: 'lab', icon: '⚗️', label: 'Лабораторія', content: <MixLab /> },
      { id: 'predict', icon: '🎯', label: 'Що станеться?', content: <Predict /> },
      { id: 'facts', icon: '💡', label: 'Чи знаєте ви?', content: <FactCards facts={FACTS} /> },
      { id: 'quiz', icon: '✅', label: 'Перевір себе', content: <TopicQuiz bank={QUESTIONS} perRound={8} /> },
    ]}
  />
);

export default LabPage;
