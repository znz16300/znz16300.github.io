import { lazy } from 'react';
import { defineFunPage } from '../../types';

export default defineFunPage({
  id: 'lab',
  title: 'Віртуальна лабораторія',
  icon: '🔬',
  color: 'green',
  order: 50,
  component: lazy(() => import('./LabPage')),
});
