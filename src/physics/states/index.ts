import { lazy } from 'react';
import { definePhysicsPage } from '../types';

export default definePhysicsPage({
  id: 'states',
  title: 'Три стани речовини',
  icon: '🧊',
  color: 'teal',
  order: 110,
  component: lazy(() => import('./StatesPage')),
});
