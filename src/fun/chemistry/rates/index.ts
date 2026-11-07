import { lazy } from 'react';
import { defineFunPage } from '../../types';

export default defineFunPage({
  id: 'rates',
  title: 'Швидкість реакцій',
  icon: '💥',
  color: 'red',
  order: 60,
  component: lazy(() => import('./RatesPage')),
});
