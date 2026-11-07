import { lazy } from 'react';
import { defineFunPage } from '../../types';

export default defineFunPage({
  id: 'antonyms',
  title: 'Слова-антоніми',
  icon: '↔️',
  color: 'pink',
  order: 40,
  component: lazy(() => import('./AntonymsPage')),
});
