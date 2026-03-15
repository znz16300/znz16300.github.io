import { Slider } from '@/components/ui/prevslider';
import { NewsItem } from '@/type/newsItem';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AnnounceTimelineCardProps {
  item: NewsItem;
  index: number;
  expandedId: string | null;
  isLast: boolean;
  onCardClick: (id: string) => void;
  onToggleExpanded: (id: string | number) => void;
}

// Parse date to extract day and month for display
const parseDate = (dateStr: string) => {
  // Expected format like "24.03.2025 14:32:11" or similar
  const parts = dateStr.split(/[.\s/]/);
  if (parts.length >= 2) {
    return { day: parts[0], month: parts[1], raw: dateStr };
  }
  return { day: '—', month: '—', raw: dateStr };
};

const monthNames: Record<string, string> = {
  '01': 'Січ',
  '02': 'Лют',
  '03': 'Бер',
  '04': 'Кві',
  '05': 'Тра',
  '06': 'Чер',
  '07': 'Лип',
  '08': 'Сер',
  '09': 'Вер',
  '10': 'Жов',
  '11': 'Лис',
  '12': 'Гру',
};

const AnnounceTimelineCard = ({
  item,
  index,
  expandedId,
  isLast,
  onCardClick,
  onToggleExpanded,
}: AnnounceTimelineCardProps) => {
  const isExpanded = expandedId === String(item.id);
  const firstImage = item['Фото'].split(/(?:\n|, |,)/)[0];
  const { day, month } = parseDate(item['Позначка часу']);
  const monthLabel = monthNames[month] ?? month;
  const plainText = item['Текст новини'].replace(/<\/?[^>]+(>|$)/g, '');

  return (
    <div
      className="animate-fade-in flex gap-4"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Timeline column */}
      <div className="flex flex-col items-center">
        <div className="flex h-12 w-12 flex-shrink-0 flex-col items-center justify-center rounded-xl bg-blue-600 text-white dark:bg-blue-700">
          <span className="text-sm font-bold leading-none">{day}</span>
          <span className="text-[10px] leading-none opacity-80">{monthLabel}</span>
        </div>
        {!isLast && (
          <div className="mt-1 flex-1 w-px bg-gray-200 dark:bg-gray-700" />
        )}
      </div>

      {/* Card */}
      <article
        className="mb-4 flex-1 cursor-pointer overflow-hidden rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-lg dark:bg-gray-800"
        onClick={() => onCardClick(String(item.id))}
      >
        {isExpanded ? (
          <div className="p-5">
            <img
              src={firstImage}
              alt={item['Назва новини']}
              className="mb-4 w-full max-h-[400px] rounded-lg object-contain"
            />
            <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-300">
              {item['Назва новини']}
            </h2>
            <div
              className="whitespace-pre-wrap leading-relaxed text-sm text-gray-600 dark:text-gray-400"
              dangerouslySetInnerHTML={{ __html: item['Текст новини'] }}
            />
            <Slider item={item} />
          </div>
        ) : (
          <div className="flex gap-3 p-4">
            <img
              src={firstImage}
              alt={item['Назва новини']}
              className="hidden h-16 w-16 flex-shrink-0 rounded-lg object-cover sm:block"
            />
            <div className="flex-1 min-w-0">
              <h2 className="mb-1 text-sm font-bold leading-snug text-gray-900 hover:text-blue-600 transition-colors dark:text-gray-300">
                {item['Назва новини']}
              </h2>
              <p className="line-clamp-2 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                {plainText}
              </p>
            </div>
          </div>
        )}

        {item['Текст новини'].split('\n').length > 2 && (
          <div className="border-t border-gray-100 px-4 py-2 dark:border-gray-700">
            <button
              onClick={e => {
                e.stopPropagation();
                onToggleExpanded(item.id);
              }}
              className="flex items-center gap-1 text-xs font-semibold text-blue-600 transition-colors hover:text-blue-700"
            >
              {isExpanded ? (
                <><ChevronUp className="h-3.5 w-3.5" /> Згорнути</>
              ) : (
                <><ChevronDown className="h-3.5 w-3.5" /> Читати повністю</>
              )}
            </button>
          </div>
        )}
      </article>
    </div>
  );
};

export default AnnounceTimelineCard;
