import { lazy } from 'react';
import { defineFunPage } from '../../types';

export default defineFunPage({
  id: 'truefalse',
  title: 'Правда чи вигадка?',
  icon: '🤔',
  color: 'purple',
  order: 20,
  component: lazy(() => import('./TrueFalsePage')),
});
