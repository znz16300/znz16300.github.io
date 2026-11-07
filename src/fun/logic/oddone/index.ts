import { lazy } from 'react';
import { defineFunPage } from '../../types';

export default defineFunPage({
  id: 'oddone',
  title: 'Що зайве?',
  icon: '🧩',
  color: 'purple',
  order: 40,
  component: lazy(() => import('./OddOnePage')),
});
