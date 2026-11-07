import { lazy } from 'react';
import { defineFunPage } from '../../types';

export default defineFunPage({
  id: 'animals',
  title: 'Світ тварин',
  icon: '🐾',
  color: 'green',
  order: 20,
  component: lazy(() => import('./AnimalsQuizPage')),
});
