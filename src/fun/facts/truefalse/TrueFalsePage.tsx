// «Правда чи вигадка?»: твердження випадково з банку; після відповіді - пояснення.
import React from 'react';
import { TopicQuiz } from '../../shared/TopicQuiz';
import { STATEMENTS } from './statements';

const TrueFalsePage: React.FC = () => <TopicQuiz bank={STATEMENTS} perRound={10} />;

export default TrueFalsePage;
