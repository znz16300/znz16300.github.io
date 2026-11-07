import { lazy } from 'react';
import { defineGame } from '../types';

export default defineGame({
  id: 'kolobok',
  title: 'Колобок у лабіринті',
  icon: '🥯',
  color: 'pink',
  order: 80,
  component: lazy(() => import('./KolobokGame')),
});
