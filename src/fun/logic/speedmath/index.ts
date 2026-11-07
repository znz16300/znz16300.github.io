import { lazy } from 'react';
import { defineFunPage } from '../../types';

export default defineFunPage({
  id: 'speedmath',
  title: 'Швидкий рахунок',
  icon: '⏱️',
  color: 'orange',
  order: 30,
  component: lazy(() => import('./SpeedMathPage')),
});
