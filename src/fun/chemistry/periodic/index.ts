import { lazy } from 'react';
import { defineFunPage } from '../../types';

export default defineFunPage({
  id: 'periodic',
  title: 'Періодична система',
  icon: '🧪',
  color: 'indigo',
  order: 10,
  component: lazy(() => import('./PeriodicPage')),
});
