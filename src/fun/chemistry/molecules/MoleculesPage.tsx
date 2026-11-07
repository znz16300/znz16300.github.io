// «Збери молекулу»: збірка · гра · факти · тест.
import React from 'react';
import { Lesson } from '../../../physics/shared/Lesson';
import { FactCards } from '../../../physics/shared/FactCards';
import { TopicQuiz } from '../../shared/TopicQuiz';
import { BuildLab } from './BuildLab';
import { BuildGame } from './BuildGame';
import { QUESTIONS } from './questions';

const FACTS = [
  { emoji: '⚛️', title: 'Атом і молекула', text: 'Атом — найменша частинка елемента, а молекула — кілька атомів, з\'єднаних хімічними зв\'язками.' },
  { emoji: '🔗', title: 'Валентність', text: 'Атом Водню утворює один зв\'язок, Кисню — два, Азоту — три, Вуглецю — чотири. Тому молекули виглядають саме так!' },
  { emoji: '💧', title: 'Зігнута вода', text: 'Атоми в H₂O розташовані не в лінію, а під кутом ≈ 104,5°. Через це вода має особливі властивості.' },
  { emoji: '🧬', title: 'Гігантські молекули', text: 'Молекула ДНК у кожній клітині містить мільярди атомів. Якщо розтягнути її в нитку, вона буде завдовжки близько двох метрів.' },
  { emoji: '🔬', title: 'Багато з небагатьох', text: 'З кількох видів атомів (C, H, O, N) побудовано мільйони різних речовин: цукор, білки, жири, пластик.' },
  { emoji: '💎', title: 'Однаковий склад — різні речовини', text: 'Алмаз і графіт складаються лише з вуглецю. Різниця лише в тому, як з\'єднані атоми.' },
];

const MoleculesPage: React.FC = () => (
  <Lesson
    tabs={[
      { id: 'build', icon: '⚛️', label: 'Збирач', content: <BuildLab /> },
      { id: 'game', icon: '🎯', label: 'Збери за назвою', content: <BuildGame /> },
      { id: 'facts', icon: '💡', label: 'Чи знаєте ви?', content: <FactCards facts={FACTS} /> },
      { id: 'quiz', icon: '✅', label: 'Перевір себе', content: <TopicQuiz bank={QUESTIONS} perRound={8} /> },
    ]}
  />
);

export default MoleculesPage;
