import { Slider } from '@/components/ui/prevslider';
import { NewsItem } from '@/type/newsItem';
import { Calendar, ChevronDown, ChevronUp, Megaphone } from 'lucide-react';

interface AnnounceBulletinCardProps {
  item: NewsItem;
  index: number;
  expandedId: string | null;
  onCardClick: (id: string) => void;
  onToggleExpanded: (id: string | number) => void;
}

// Rotate accent colors for visual variety
const accentColors = [
  'border-l-blue-500',
  'border-l-emerald-500',
  'border-l-amber-500',
  'border-l-purple-500',
  'border-l-rose-500',
  'border-l-teal-500',
];

const AnnounceBulletinCard = ({
  item,
  index,
  expandedId,
  onCardClick,
  onToggleExpanded,
}: AnnounceBulletinCardProps) => {
  const isExpanded = expandedId === String(item.id);
  const firstImage = item['Фото'].split(/(?:\n|, |,)/)[0];
  const accentClass = accentColors[index % accentColors.length];
  const plainText = item['Текст новини'].replace(/<\/?[^>]+(>|$)/g, '');

  return (
    <article
      key={`${item.id}-${item['Позначка часу']}`}
      className={`animate-fade-in cursor-pointer overflow-hidden rounded-xl border-l-4 bg-white shadow-md transition-all duration-300 hover:shadow-lg dark:bg-gray-800 ${accentClass}`}
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={() => onCardClick(String(item.id))}
    >
      <div className="flex gap-4 p-5">
        {/* Thumbnail */}
        {!isExpanded && (
          <div className="hidden flex-shrink-0 sm:block">
            <img
              src={firstImage}
              alt={item['Назва новини']}
              className="h-20 w-20 rounded-lg object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="mb-1.5 flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500">
            <Megaphone className="h-3.5 w-3.5 flex-shrink-0" />
            <Calendar className="h-3.5 w-3.5 flex-shrink-0" />
            <span>{item['Позначка часу']}</span>
          </div>

          <h2 className="mb-2 text-base font-bold leading-snug text-gray-900 transition-colors hover:text-blue-600 dark:text-gray-300">
            {item['Назва новини']}
          </h2>

          {isExpanded ? (
            <div className="mt-3">
              <img
                src={firstImage}
                alt={item['Назва новини']}
                className="mb-4 w-full max-h-[400px] rounded-lg object-contain"
              />
              <div
                className="whitespace-pre-wrap leading-relaxed text-sm text-gray-600 dark:text-gray-400"
                dangerouslySetInnerHTML={{ __html: item['Текст новини'] }}
              />
              <Slider item={item} />
            </div>
          ) : (
            <p className="line-clamp-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
              {plainText}
            </p>
          )}

          {item['Текст новини'].split('\n').length > 2 && (
            <button
              onClick={e => {
                e.stopPropagation();
                onToggleExpanded(item.id);
              }}
              className="mt-2 flex items-center gap-1 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="h-4 w-4" /> Згорнути
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4" /> Читати повністю
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export default AnnounceBulletinCard;
