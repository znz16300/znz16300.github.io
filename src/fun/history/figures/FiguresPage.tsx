import React from 'react';
import { TopicQuiz } from '../../shared/TopicQuiz';
import { QUESTIONS } from './questions';

const FiguresPage: React.FC = () => <TopicQuiz bank={QUESTIONS} perRound={8} />;

export default FiguresPage;
