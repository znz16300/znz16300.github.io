import { lazy } from 'react';
import { defineFunPage } from '../../types';

export default defineFunPage({
  id: 'random',
  title: 'Чи знаєте ви?',
  icon: '💡',
  color: 'blue',
  order: 10,
  component: lazy(() => import('./FactsPage')),
});
