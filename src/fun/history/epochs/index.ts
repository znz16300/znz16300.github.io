import { lazy } from 'react';
import { defineFunPage } from '../../types';

export default defineFunPage({
  id: 'epochs',
  title: 'Русь і козаки',
  icon: '⚔️',
  color: 'red',
  order: 40,
  component: lazy(() => import('./EpochsPage')),
});
