import React from 'react';
import { RiddleDeck } from '../../shared/RiddleDeck';
import { RIDDLES } from './riddles';

const NatureRiddlesPage: React.FC = () => <RiddleDeck riddles={RIDDLES} title="Природа" />;

export default NatureRiddlesPage;
