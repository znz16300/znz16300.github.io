import { lazy } from 'react';
import { defineFunPage } from '../../types';

export default defineFunPage({
  id: 'records',
  title: 'Рекорди світу',
  icon: '🏆',
  color: 'orange',
  order: 30,
  component: lazy(() => import('./RecordsPage')),
});
