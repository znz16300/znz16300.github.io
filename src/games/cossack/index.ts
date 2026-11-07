import { lazy } from 'react';
import { defineGame } from '../types';

export default defineGame({
  id: 'cossack',
  title: 'Козак у підземеллі',
  icon: '🗡️',
  color: 'red',
  order: 70,
  component: lazy(() => import('./CossackGame')),
});
