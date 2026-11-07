import { lazy } from 'react';
import { defineFunPage } from '../../types';

export default defineFunPage({
  id: 'math',
  title: 'Математичні загадки',
  icon: '➗',
  color: 'blue',
  order: 40,
  component: lazy(() => import('./MathRiddlesPage')),
});
