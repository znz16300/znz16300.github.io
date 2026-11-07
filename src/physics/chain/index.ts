import { lazy } from 'react';
import { definePhysicsPage } from '../types';

export default definePhysicsPage({
  id: 'chain',
  title: 'Конструктор ланцюгових реакцій',
  icon: '🎢',
  color: 'orange',
  order: 150,
  component: lazy(() => import('./ChainPage')),
});
