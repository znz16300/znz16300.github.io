import { lazy } from 'react';
import { defineFunPage } from '../../types';

export default defineFunPage({
  id: 'balance',
  title: 'Зрівняй рівняння',
  icon: '⚖️',
  color: 'orange',
  order: 40,
  component: lazy(() => import('./BalancePage')),
});
