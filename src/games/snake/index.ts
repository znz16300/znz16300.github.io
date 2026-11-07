import { lazy } from 'react';
import { defineGame } from '../types';

export default defineGame({
  id: 'snake',
  title: 'Змійка',
  icon: '🐍',
  color: 'green',
  order: 30,
  component: lazy(() => import('./SnakeGame')),
});
