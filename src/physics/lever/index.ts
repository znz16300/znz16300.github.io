import { lazy } from 'react';
import { definePhysicsPage } from '../types';

export default definePhysicsPage({
  id: 'lever',
  title: 'Важіль-гойдалка',
  icon: '⚖️',
  color: 'green',
  order: 100,
  component: lazy(() => import('./LeverPage')),
});
