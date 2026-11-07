import { lazy } from 'react';
import { defineGame } from '../types';

export default defineGame({
  id: 'duel',
  title: 'Козацькі двобої',
  icon: '⚔️',
  color: 'red',
  order: 90,
  component: lazy(() => import('./DuelGame')),
});
