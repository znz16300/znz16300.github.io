import { lazy } from 'react';
import { defineFunPage } from '../../types';

export default defineFunPage({
  id: 'ph',
  title: 'Кислоти й луги',
  icon: '🥬',
  color: 'pink',
  order: 20,
  component: lazy(() => import('./PhPage')),
});
