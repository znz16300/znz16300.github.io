import React from 'react';
import { TopicQuiz } from '../../shared/TopicQuiz';
import { QUESTIONS } from './questions';

const EpochsPage: React.FC = () => <TopicQuiz bank={QUESTIONS} perRound={8} />;

export default EpochsPage;
