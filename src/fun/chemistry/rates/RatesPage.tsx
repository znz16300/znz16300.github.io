// «Швидкість реакцій»: лабораторія · гонка · факти · тест.
import React from 'react';
import { Lesson } from '../../../physics/shared/Lesson';
import { FactCards } from '../../../physics/shared/FactCards';
import { TopicQuiz } from '../../shared/TopicQuiz';
import { RatesLab } from './RatesLab';
import { Race } from './Race';
import { QUESTIONS } from './questions';

const FACTS = [
  { emoji: '🥶', title: 'Холодильник як «пауза»', text: 'Кожні 10 °C холоду приблизно вдвічі-втричі уповільнюють багато реакцій. Тому продукти в холоді довше не псуються.' },
  { emoji: '🚗', title: 'Каталізатор в авто', text: 'У вихлопній системі є каталізатор з платини й родію: він перетворює отруйні гази на менш шкідливі — азот і вуглекислий газ.' },
  { emoji: '🍞', title: 'Дріжджі й тісто', text: 'Ферменти дріжджів розкладають цукор, виділяючи вуглекислий газ — тісто піднімається. У теплі це відбувається швидше.' },
  { emoji: '🪵', title: 'Тріски й колода', text: 'Колода горить повільно, а тріски чи борошняний пил — майже миттєво (борошняний пил навіть може вибухнути!). Річ у площі поверхні.' },
  { emoji: '🧬', title: 'Ферменти', text: 'Наші ферменти зменшують час реакцій у мільйони разів, і без них травлення тривало б роками.' },
];

const RatesPage: React.FC = () => (
  <Lesson
    tabs={[
      { id: 'lab', icon: '💥', label: 'Дослідити', content: <RatesLab /> },
      { id: 'race', icon: '🎯', label: 'Швидше!', content: <Race /> },
      { id: 'facts', icon: '💡', label: 'Чи знаєте ви?', content: <FactCards facts={FACTS} /> },
      { id: 'quiz', icon: '✅', label: 'Перевір себе', content: <TopicQuiz bank={QUESTIONS} perRound={8} /> },
    ]}
  />
);

export default RatesPage;
