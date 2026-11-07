import { lazy } from 'react';
import { definePhysicsPage } from '../types';

export default definePhysicsPage({
  id: 'waves',
  title: 'Музика хвиль',
  icon: '🎵',
  color: 'pink',
  order: 60,
  component: lazy(() => import('./WavesPage')),
});
