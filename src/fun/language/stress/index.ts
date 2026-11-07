import { lazy } from 'react';
import { defineFunPage } from '../../types';

export default defineFunPage({
  id: 'stress',
  title: 'Де наголос?',
  icon: '🔊',
  color: 'purple',
  order: 30,
  component: lazy(() => import('./StressPage')),
});
