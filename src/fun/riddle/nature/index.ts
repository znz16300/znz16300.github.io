import { lazy } from 'react';
import { defineFunPage } from '../../types';

export default defineFunPage({
  id: 'nature',
  title: 'Загадки про природу',
  icon: '🌳',
  color: 'green',
  order: 20,
  component: lazy(() => import('./NatureRiddlesPage')),
});
