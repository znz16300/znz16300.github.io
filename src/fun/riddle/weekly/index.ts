import { lazy } from 'react';
import { defineFunPage } from '../../types';

export default defineFunPage({
  id: 'weekly',
  title: 'Загадка тижня',
  icon: '🧩',
  color: 'purple',
  order: 10,
  component: lazy(() => import('./WeeklyRiddlePage')),
});
