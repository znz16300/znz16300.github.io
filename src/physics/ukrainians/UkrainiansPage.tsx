// Сторінка «Українські фізики»: галерея + міні-тест.
import React from 'react';
import { Lesson } from '../shared/Lesson';
import { Quiz } from '../shared/Quiz';
import { Gallery } from './Gallery';
import { QUIZ } from './content';

const UkrainiansPage: React.FC = () => (
  <Lesson
    tabs={[
      { id: 'gallery', icon: '🖼️', label: 'Галерея', content: <Gallery /> },
      { id: 'quiz', icon: '✅', label: 'Міні-тест', content: <Quiz questions={QUIZ} /> },
    ]}
  />
);

export default UkrainiansPage;
