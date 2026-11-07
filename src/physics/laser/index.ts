import { lazy } from 'react';
import { definePhysicsPage } from '../types';

export default definePhysicsPage({
  id: 'laser',
  title: 'Лазерний лабіринт',
  icon: '🔦',
  color: 'red',
  order: 70,
  component: lazy(() => import('./LaserPage')),
});
