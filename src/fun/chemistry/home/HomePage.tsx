// «Хімія вдома»: каталог · яка формула · мемо · факти · тест.
import React from 'react';
import { Lesson } from '../../../physics/shared/Lesson';
import { FactCards } from '../../../physics/shared/FactCards';
import { TopicQuiz } from '../../shared/TopicQuiz';
import { Catalog } from './Catalog';
import { Guess } from './Guess';
import { Memory } from './Memory';
import { QUESTIONS } from './questions';

const FACTS = [
  { emoji: '🏠', title: 'Хімія на кухні', text: 'Приготування їжі — це хімія: тісто піднімається через газ, цукор карамелізується, м\'ясо змінює колір при нагріванні.' },
  { emoji: '🧼', title: 'Чому мило змиває бруд', text: 'Молекула мила має «гідрофільну» голівку, що любить воду, і «хвіст», що любить жир. Так воно виймає жир з тканини.' },
  { emoji: '🧪', title: 'Ми — це хімія', text: 'Тіло людини складається здебільшого з кисню, вуглецю, водню й азоту. Ми майже на 60% з води.' },
  { emoji: '🔥', title: 'Горіння — це реакція', text: 'Дрова горять, бо вуглець і водень сполучаються з киснем, виділяючи тепло й світло.' },
  { emoji: '🍎', title: 'Чому яблуко темніє', text: 'Фермент і кисень повітря окислюють речовини яблука на зрізі. Лимонний сік сповільнює потемніння.' },
  { emoji: '🧊', title: 'Лід у напої', text: 'Лід тане, забираючи тепло від напою, тому той охолоджується. Це фізика, а не хімія: нова речовина не утворюється.' },
];

const HomePage: React.FC = () => (
  <Lesson
    tabs={[
      { id: 'catalog', icon: '🏠', label: 'Каталог', content: <Catalog /> },
      { id: 'guess', icon: '🎯', label: 'Яка формула?', content: <Guess /> },
      { id: 'memory', icon: '🃏', label: 'Мемо', content: <Memory /> },
      { id: 'facts', icon: '💡', label: 'Чи знаєте ви?', content: <FactCards facts={FACTS} /> },
      { id: 'quiz', icon: '✅', label: 'Перевір себе', content: <TopicQuiz bank={QUESTIONS} perRound={8} /> },
    ]}
  />
);

export default HomePage;
