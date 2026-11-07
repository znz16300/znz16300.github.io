import { lazy } from 'react';
import { defineFunPage } from '../../types';

export default defineFunPage({
  id: 'mixtures',
  title: 'Розділи суміш',
  icon: '🧲',
  color: 'teal',
  order: 70,
  component: lazy(() => import('./MixturesPage')),
});
