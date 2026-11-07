import { lazy } from 'react';
import { defineGame } from '../types';

export default defineGame({
  id: 'fpv',
  title: 'FPV-симулятор',
  icon: '🚁',
  color: 'indigo',
  order: 50,
  component: lazy(() => import('./FpvGame')),
});
