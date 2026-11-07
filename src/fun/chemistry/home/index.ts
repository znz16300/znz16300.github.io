import { lazy } from 'react';
import { defineFunPage } from '../../types';

export default defineFunPage({
  id: 'home',
  title: 'Хімія вдома',
  icon: '🏠',
  color: 'purple',
  order: 80,
  component: lazy(() => import('./HomePage')),
});
