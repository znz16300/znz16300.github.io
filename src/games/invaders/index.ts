import { lazy } from 'react';
import { defineGame } from '../types';

export default defineGame({
  id: 'invaders',
  title: 'Захист галактики',
  icon: '👾',
  color: 'teal',
  order: 60,
  component: lazy(() => import('./InvadersGame')),
});
