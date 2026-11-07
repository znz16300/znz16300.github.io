import { lazy } from 'react';
import { defineGame } from '../types';

export default defineGame({
  id: 'pong',
  title: 'Pong',
  icon: '🏓',
  color: 'blue',
  order: 10,
  component: lazy(() => import('./PongGame')),
});
