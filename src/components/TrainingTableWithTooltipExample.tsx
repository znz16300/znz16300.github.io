import { TrainingTableWithTooltip } from "./TrainingTableWithTooltip";
import { useState } from "react";

const exampleData = [
  {
    id: "1",
    "Працівник, який пройшов курсову підготовку":
      "Мацвійко Валентина Володимирівна",
    "Назва курсів, семінару, вебінару тощо":
      "Педагогічних працівників, які працюють в інклюзивних класах",
    "Кількість годин": "30",
    "З них з інклюзії": "14",
    "З них з надання психологічної підтримки учасникам освітнього процесу": "2",
    "Тип документа": "свідоцтво",
    'Номер документа (якщо номера немає, вкажіть "бн" без лапок)':
      "25 ПК 02139222/003271-25",
    "Дата видачі документа": "30.05.2025",
  },
  {
    id: "2",
    "Працівник, який пройшов курсову підготовку": "Іванов Іван Іванович",
    "Назва курсів, семінару, вебінару тощо":
      "Сучасні методи викладання математики",
    "Кількість годин": "24",
    "З них з інклюзії": "8",
    "З них з надання психологічної підтримки учасникам освітнього процесу": "4",
    "Тип документа": "сертифікат",
    'Номер документа (якщо номера немає, вкажіть "бн" без лапок)': "бн",
    "Дата видачі документа": "15.04.2025",
  },
  {
    id: "3",
    "Працівник, який пройшов курсову підготовку": "Петренко Марія Сергіївна",
    "Назва курсів, семінару, вебінару тощо": "Цифрові технології в освіті",
    "Кількість годин": "18",
    "З них з інклюзії": "6",
    "З них з надання психологічної підтримки учасникам освітнього процесу": "3",
    "Тип документа": "довідка",
    'Номер документа (якщо номера немає, вкажіть "бн" без лапок)':
      "ЦТ-2025-001",
    "Дата видачі документа": "22.03.2025",
  },
];

export function TrainingTableWithTooltipExample() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  return (
    <div className="p-6 space-y-4">
      <div>
        <h2 className="text-2xl font-bold mb-4">
          Таблиця з підказками та вибором
        </h2>
        <p className="text-gray-600 mb-4">
          Наведіть курсор на будь-який рядок таблиці, щоб побачити детальну
          інформацію. Використовуйте прапорці для вибору елементів.
        </p>

        {selectedItems.length > 0 && (
          <div className="mb-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-700">
              Вибрано елементів: {selectedItems.length}
            </p>
            <p className="text-xs text-blue-600">
              ID вибраних: {selectedItems.join(", ")}
            </p>
          </div>
        )}

        <TrainingTableWithTooltip
          visibleItems={exampleData}
          selectedItems={selectedItems}
          onSelectionChange={setSelectedItems}
        />
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2">Як використовувати:</h3>
        <div className="bg-gray-100 p-4 rounded-lg">
          <code className="text-sm">
            {`// Імпортуємо компонент
import { TrainingTableWithTooltip } from "./components/TrainingTableWithTooltip"

// Використовуємо з масивом visibleItems та обробкою вибору
const [selectedItems, setSelectedItems] = useState<string[]>([])

<TrainingTableWithTooltip 
  visibleItems={visibleItems} 
  selectedItems={selectedItems}
  onSelectionChange={setSelectedItems}
/>`}
          </code>
        </div>
      </div>
    </div>
  );
}
