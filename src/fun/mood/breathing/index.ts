import { lazy } from 'react';
import { defineFunPage } from '../../types';

export default defineFunPage({
  id: 'breathing',
  title: 'Дихаємо і заспокоюємось',
  icon: '🌬️',
  color: 'teal',
  order: 20,
  component: lazy(() => import('./BreathingPage')),
});
