// Сторінка «Правда чи міф?»: 🃏 гра зі свайпами · 📚 усі відповіді.
import React from 'react';
import { Lesson } from '../shared/Lesson';
import { SwipeDeck } from './SwipeDeck';
import { AllAnswers } from './AllAnswers';

const MythFactPage: React.FC = () => (
  <Lesson
    tabs={[
      { id: 'game', icon: '🃏', label: 'Грати', content: <SwipeDeck /> },
      { id: 'all', icon: '📚', label: 'Усі відповіді', content: <AllAnswers /> },
    ]}
  />
);

export default MythFactPage;
