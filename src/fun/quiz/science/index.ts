import { lazy } from 'react';
import { defineFunPage } from '../../types';

export default defineFunPage({
  id: 'science',
  title: 'Наука навколо нас',
  icon: '🔬',
  color: 'indigo',
  order: 40,
  component: lazy(() => import('./ScienceQuizPage')),
});
