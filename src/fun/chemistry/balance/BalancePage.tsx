// «Зрівняй рівняння»: гра · факти · тест.
import React from 'react';
import { Lesson } from '../../../physics/shared/Lesson';
import { FactCards } from '../../../physics/shared/FactCards';
import { TopicQuiz } from '../../shared/TopicQuiz';
import { BalanceGame } from './BalanceGame';
import { QUESTIONS } from './questions';

const FACTS = [
  { emoji: '⚖️', title: 'Закон збереження маси', text: 'Ломоносов і Лавуазьє показали: при хімічних реакціях речовина не зникає й не з\'являється з нічого — лише перегруповуються атоми.' },
  { emoji: '🕯️', title: 'Куди дівається свічка?', text: 'Свічка, що горить, «зменшується», але її вуглець і водень перетворюються на CO₂ і пару, які розлітаються в повітрі. Якби їх зібрати, маса була б та сама.' },
  { emoji: '🔢', title: 'Коефіцієнт чи індекс?', text: 'Індекс (маленька цифра знизу) — частина формули. Коефіцієнт (велика цифра перед формулою) — кількість молекул. Змінювати можна лише коефіцієнт.' },
  { emoji: '🎆', title: 'Реакції навколо', text: 'Горіння, іржавіння, дихання, фотосинтез, бродіння тіста — усе це хімічні реакції. Їх рівняння теж можна зрівняти.' },
  { emoji: '🌱', title: 'Фотосинтез', text: '6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂. Світло перетворює вуглекислий газ і воду на глюкозу та кисень.' },
];

const BalancePage: React.FC = () => (
  <Lesson
    tabs={[
      { id: 'game', icon: '⚖️', label: 'Зрівняй', content: <BalanceGame /> },
      { id: 'facts', icon: '💡', label: 'Чи знаєте ви?', content: <FactCards facts={FACTS} /> },
      { id: 'quiz', icon: '✅', label: 'Перевір себе', content: <TopicQuiz bank={QUESTIONS} perRound={8} /> },
    ]}
  />
);

export default BalancePage;
