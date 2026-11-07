import { lazy } from 'react';
import { definePhysicsPage } from '../types';

export default definePhysicsPage({
  id: 'mythfact',
  title: 'Правда чи міф?',
  icon: '🃏',
  color: 'orange',
  order: 30,
  component: lazy(() => import('./MythFactPage')),
});
