import { lazy } from 'react';
import { defineFunPage } from '../../types';

export default defineFunPage({
  id: 'proverbs',
  title: 'Продовж прислів\'я',
  icon: '🪶',
  color: 'teal',
  order: 20,
  component: lazy(() => import('./ProverbsPage')),
});
