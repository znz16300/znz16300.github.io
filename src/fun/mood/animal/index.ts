import { lazy } from 'react';
import { defineFunPage } from '../../types';

export default defineFunPage({
  id: 'animal',
  title: 'Яка ти тварина?',
  icon: '🦊',
  color: 'green',
  order: 50,
  component: lazy(() => import('./AnimalTestPage')),
});
