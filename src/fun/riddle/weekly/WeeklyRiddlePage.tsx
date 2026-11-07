// «Загадка тижня»: щоразу випадкова загадка з банку (кнопка «Наступна загадка» - ще одна).
import React from 'react';
import { RiddleDeck } from '../../shared/RiddleDeck';
import { RIDDLES } from './riddles';

const WeeklyRiddlePage: React.FC = () => <RiddleDeck riddles={RIDDLES} title="🧩 Загадка" />;

export default WeeklyRiddlePage;
