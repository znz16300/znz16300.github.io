import { lazy } from 'react';
import { defineFunPage } from '../../types';

export default defineFunPage({
  id: 'emotions',
  title: 'Мої емоції',
  icon: '🎭',
  color: 'purple',
  order: 30,
  component: lazy(() => import('./EmotionsPage')),
});
