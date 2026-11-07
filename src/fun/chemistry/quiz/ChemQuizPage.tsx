// «Хімічний квіз»: щоразу 10 випадкових питань зі спільного банку всіх додатків розділу.
import React from 'react';
import { TopicQuiz } from '../../shared/TopicQuiz';
import { QUESTIONS as periodic } from '../periodic/questions';
import { QUESTIONS as ph } from '../ph/questions';
import { QUESTIONS as molecules } from '../molecules/questions';
import { QUESTIONS as balance } from '../balance/questions';
import { QUESTIONS as lab } from '../lab/questions';
import { QUESTIONS as rates } from '../rates/questions';
import { QUESTIONS as mixtures } from '../mixtures/questions';
import { QUESTIONS as home } from '../home/questions';
import { EXTRA } from './extra';

const ALL = [...periodic, ...ph, ...molecules, ...balance, ...lab, ...rates, ...mixtures, ...home, ...EXTRA];
// без повторів за текстом питання
const BANK = Array.from(new Map(ALL.map((q) => [q.q, q])).values());

const ChemQuizPage: React.FC = () => <TopicQuiz bank={BANK} perRound={10} />;

export default ChemQuizPage;
