import { lazy } from 'react';
import { defineFunPage } from '../../types';

export default defineFunPage({
  id: 'check',
  title: 'Який у тебе настрій?',
  icon: '😊',
  color: 'pink',
  order: 10,
  component: lazy(() => import('./MoodTestPage')),
});
