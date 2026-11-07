import { lazy } from 'react';
import { definePhysicsPage } from '../types';

export default definePhysicsPage({
  id: 'pendulum',
  title: 'Маятник і час',
  icon: '🕰️',
  color: 'teal',
  order: 50,
  component: lazy(() => import('./PendulumPage')),
});
