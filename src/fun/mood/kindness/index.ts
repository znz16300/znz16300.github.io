import { lazy } from 'react';
import { defineFunPage } from '../../types';

export default defineFunPage({
  id: 'kindness',
  title: 'Скринька добра',
  icon: '💌',
  color: 'orange',
  order: 40,
  component: lazy(() => import('./KindnessPage')),
});
