import { lazy } from 'react';
import { definePhysicsPage } from '../types';

export default definePhysicsPage({
  id: 'buoyancy',
  title: 'Плаває чи тоне?',
  icon: '🚢',
  color: 'blue',
  order: 90,
  component: lazy(() => import('./BuoyancyPage')),
});
