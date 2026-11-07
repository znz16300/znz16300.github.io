import { lazy } from 'react';
import { defineFunPage } from '../../types';

export default defineFunPage({
  id: 'quiz',
  title: 'Хімічний квіз',
  icon: '🧠',
  color: 'pink',
  order: 90,
  component: lazy(() => import('./ChemQuizPage')),
});
