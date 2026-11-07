import { lazy } from 'react';
import { definePhysicsPage } from '../types';

export default definePhysicsPage({
  id: 'ukrainians',
  title: 'Українські фізики',
  icon: '🇺🇦',
  color: 'blue',
  order: 140,
  component: lazy(() => import('./UkrainiansPage')),
});
