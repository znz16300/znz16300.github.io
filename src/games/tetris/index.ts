import { lazy } from 'react';
import { defineGame } from '../types';

export default defineGame({
  id: 'tetris',
  title: 'Тетріс',
  icon: '🧱',
  color: 'purple',
  order: 20,
  component: lazy(() => import('./TetrisGame')),
});
