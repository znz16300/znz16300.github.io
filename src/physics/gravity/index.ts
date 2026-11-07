import { lazy } from 'react';
import { definePhysicsPage } from '../types';

export default definePhysicsPage({
  id: 'gravity',
  title: 'Гравітація на планетах',
  icon: '🪐',
  color: 'indigo',
  order: 10,
  component: lazy(() => import('./GravityPage')),
});
