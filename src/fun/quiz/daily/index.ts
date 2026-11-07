import { lazy } from 'react';
import { defineFunPage } from '../../types';

export default defineFunPage({
  id: 'daily',
  title: 'Квіз дня',
  icon: '❓',
  color: 'pink',
  order: 10,
  component: lazy(() => import('./DailyQuizPage')),
});
