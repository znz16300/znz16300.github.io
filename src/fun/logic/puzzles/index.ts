import { lazy } from 'react';
import { defineFunPage } from '../../types';

export default defineFunPage({
  id: 'puzzles',
  title: 'Логічні задачі',
  icon: '🧠',
  color: 'green',
  order: 10,
  component: lazy(() => import('./LogicPage')),
});
