import { lazy } from 'react';
import { defineFunPage } from '../../types';

export default defineFunPage({
  id: 'molecules',
  title: 'Збери молекулу',
  icon: '⚛️',
  color: 'blue',
  order: 30,
  component: lazy(() => import('./MoleculesPage')),
});
