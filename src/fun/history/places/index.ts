import { lazy } from 'react';
import { defineFunPage } from '../../types';

export default defineFunPage({
  id: 'places',
  title: 'Пам\'ятки і місця',
  icon: '🏰',
  color: 'orange',
  order: 30,
  component: lazy(() => import('./PlacesPage')),
});
