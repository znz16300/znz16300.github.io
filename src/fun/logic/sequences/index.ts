import { lazy } from 'react';
import { defineFunPage } from '../../types';

export default defineFunPage({
  id: 'sequences',
  title: 'Числові послідовності',
  icon: '🔢',
  color: 'blue',
  order: 20,
  component: lazy(() => import('./SequencesPage')),
});
