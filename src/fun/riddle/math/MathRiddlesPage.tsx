import React from 'react';
import { RiddleDeck } from '../../shared/RiddleDeck';
import { RIDDLES } from './riddles';

const MathRiddlesPage: React.FC = () => <RiddleDeck riddles={RIDDLES} title="Математика" />;

export default MathRiddlesPage;
