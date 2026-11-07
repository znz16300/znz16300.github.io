import { lazy } from 'react';
import { definePhysicsPage } from '../types';

export default definePhysicsPage({
  id: 'magnets',
  title: 'Магніти й компас',
  icon: '🧲',
  color: 'purple',
  order: 120,
  component: lazy(() => import('./MagnetsPage')),
});
