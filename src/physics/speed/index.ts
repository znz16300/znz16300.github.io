import { lazy } from 'react';
import { definePhysicsPage } from '../types';

export default definePhysicsPage({
  id: 'speed',
  title: 'Швидкість, час, відстань',
  icon: '🚗',
  color: 'indigo',
  order: 130,
  component: lazy(() => import('./SpeedPage')),
});
