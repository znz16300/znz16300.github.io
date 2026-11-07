import { lazy } from 'react';
import { defineFunPage } from '../../types';

export default defineFunPage({
  id: 'ukraine',
  title: 'Знаєш Україну?',
  icon: '🇺🇦',
  color: 'blue',
  order: 30,
  component: lazy(() => import('./UkraineQuizPage')),
});
