import React from 'react';
import { RiddleDeck } from '../../shared/RiddleDeck';
import { RIDDLES } from './riddles';

const FoodRiddlesPage: React.FC = () => <RiddleDeck riddles={RIDDLES} title="Їжа" />;

export default FoodRiddlesPage;
