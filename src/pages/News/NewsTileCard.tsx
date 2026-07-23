import { Slider } from '@/components/ui/prevslider';
import { NewsItem } from '@/type/newsItem';
import { containsHtml } from '@/lib/utils';
import { Calendar } from 'lucide-react';

interface NewsTileCardProps {
  item: NewsItem;
  index: number;
  expandedId: string | null;
  onCardClick: (id: string) => void;
  onToggleExpanded: (id: string | number) => void;
}

const NewsTileCard = ({ item, index, expandedId, onCardClick, onToggleExpanded }: NewsTileCardProps) => {
  const isExpanded = expandedId === String(item.id);
  const firstImage = item['Фото'].split(/(?:\n|, |,)/)[0];
  const isHtml = containsHtml(item['Текст новини']);

  if (isExpanded) {
    // When expanded, show full article in a wider layout
    return (
      <article
        key={`${item.id}-${item['Позначка часу']}`}
        className="col-span-full animate-fade-in cursor-pointer overflow-hidden rounded-xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl dark:bg-gray-800"
        style={{ animationDelay: `${index * 150}ms` }}
        onClick={() => onCardClick(String(item.id))}
      >
        <img
          src={firstImage}
          alt={item['Назва новини']}
          className="w-full max-h-[500px] object-contain"
        />
        <div className="p-6">
          <div className="mb-2 flex items-center space-x-3 text-sm text-gray-500 dark:text-gray-400">
            <Calendar className="h-4 w-4" />
            <span>{item['Позначка часу']}</span>
          </div>
          <h2 className="mb-3 text-xl font-bold text-gray-900 dark:text-gray-300">
            {item['Назва новини']}
          </h2>
          {isHtml ? (
            <div
              className="mb-4 leading-relaxed text-gray-600 dark:text-gray-400"
              dangerouslySetInnerHTML={{ __html: item['Текст новини'] }}
            />
          ) : (
            <div className="mb-4 whitespace-pre-wrap leading-relaxed text-gray-600 dark:text-gray-400">
              {item['Текст новини']}
            </div>
          )}
          <Slider item={item} />
          <button
            onClick={e => {
              e.stopPropagation();
              onToggleExpanded(item.id);
            }}
            className="mt-2 font-semibold text-blue-600 transition-colors hover:text-blue-700"
          >
            Згорнути ↑
          </button>
        </div>
      </article>
    );
  }

  return (
    <article
      key={`${item.id}-${item['Позначка часу']}`}
      className="animate-fade-in cursor-pointer overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 dark:bg-gray-800"
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={() => onCardClick(String(item.id))}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={firstImage}
          alt={item['Назва новини']}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="mb-1.5 flex items-center space-x-1 text-xs text-gray-400 dark:text-gray-500">
          <Calendar className="h-3 w-3" />
          <span>{item['Позначка часу']}</span>
        </div>
        <h2 className="text-sm font-bold text-gray-900 line-clamp-2 leading-snug hover:text-blue-600 transition-colors dark:text-gray-300">
          {item['Назва новини']}
        </h2>
      </div>
    </article>
  );
};

export default NewsTileCard;
