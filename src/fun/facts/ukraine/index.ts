import { lazy } from 'react';
import { defineFunPage } from '../../types';

export default defineFunPage({
  id: 'ukraine',
  title: 'Дивовижна Україна',
  icon: '🌻',
  color: 'teal',
  order: 40,
  component: lazy(() => import('./UkraineFactsPage')),
});
