import { lazy } from 'react';
import { defineFunPage } from '../../types';

export default defineFunPage({
  id: 'figures',
  title: 'Хто це?',
  icon: '🧑‍🎓',
  color: 'purple',
  order: 20,
  component: lazy(() => import('./FiguresPage')),
});
