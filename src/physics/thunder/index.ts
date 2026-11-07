import { lazy } from 'react';
import { definePhysicsPage } from '../types';

export default definePhysicsPage({
  id: 'thunder',
  title: 'Грім і блискавка',
  icon: '⛈️',
  color: 'purple',
  order: 20,
  component: lazy(() => import('./ThunderPage')),
});
