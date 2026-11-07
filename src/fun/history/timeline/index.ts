import { lazy } from 'react';
import { defineFunPage } from '../../types';

export default defineFunPage({
  id: 'timeline',
  title: 'Стрічка часу',
  icon: '🇺🇦',
  color: 'teal',
  order: 10,
  component: lazy(() => import('./TimelinePage')),
});
