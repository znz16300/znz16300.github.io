// «Квіз дня»: щоразу випадкові 8 питань із великого банку, відповіді перемішані.
import React from 'react';
import { TopicQuiz } from '../../shared/TopicQuiz';
import { DAILY_QUESTIONS } from './questions';

const DailyQuizPage: React.FC = () => <TopicQuiz bank={DAILY_QUESTIONS} perRound={8} />;

export default DailyQuizPage;
