import { lazy } from 'react';
import { defineGame } from '../types';

export default defineGame({
  id: 'platformer',
  title: 'Лисик-стрибун',
  icon: '🦊',
  color: 'orange',
  order: 40,
  component: lazy(() => import('./PlatformerGame')),
});
