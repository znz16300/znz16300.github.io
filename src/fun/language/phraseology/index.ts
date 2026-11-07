import { lazy } from 'react';
import { defineFunPage } from '../../types';

export default defineFunPage({
  id: 'phraseology',
  title: 'Фразеологізми та слова',
  icon: '📝',
  color: 'orange',
  order: 10,
  component: lazy(() => import('./PhraseologyPage')),
});
