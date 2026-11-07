import { lazy } from 'react';
import { definePhysicsPage } from '../types';

export default definePhysicsPage({
  id: 'circuit',
  title: 'Електричне коло',
  icon: '💡',
  color: 'orange',
  order: 80,
  component: lazy(() => import('./CircuitPage')),
});
