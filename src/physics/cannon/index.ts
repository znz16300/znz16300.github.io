import { lazy } from 'react';
import { definePhysicsPage } from '../types';

export default definePhysicsPage({
  id: 'cannon',
  title: 'Гармата козаків',
  icon: '🎯',
  color: 'red',
  order: 40,
  component: lazy(() => import('./CannonPage')),
});
