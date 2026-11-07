import { lazy } from 'react';
import { defineFunPage } from '../../types';

export default defineFunPage({
  id: 'food',
  title: 'Смачні загадки',
  icon: '🍎',
  color: 'orange',
  order: 30,
  component: lazy(() => import('./FoodRiddlesPage')),
});
