import { Slider } from '@/components/ui/prevslider';
import { NewsItem } from '@/type/newsItem';
import { Calendar, User } from 'lucide-react';

interface AnnounceCardProps {
  item: NewsItem;
  index: number;
  expandedId: string | null;
  onCardClick: (id: string) => void;
  onToggleExpanded: (id: string | number) => void;
}

const AnnounceCard = ({ item, index, expandedId, onCardClick, onToggleExpanded }: AnnounceCardProps) => {
  const isExpanded = expandedId === String(item.id);
  const firstImage = item['Фото'].split(/(?:\n|, |,)/)[0];

  return (
    <article
      key={`${item.id}-${item['Позначка часу']}`}
      className="animate-fade-in cursor-pointer overflow-hidden rounded-xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl dark:bg-gray-800"
      style={{ animationDelay: `${index * 150}ms` }}
      onClick={() => onCardClick(String(item.id))}
    >
      <img
        src={firstImage}
        alt={item['Назва новини']}
        className={`w-full transition-all duration-500 ${
          isExpanded ? 'max-h-[600px] object-contain' : 'h-48 object-cover'
        }`}
        style={{ maxHeight: isExpanded ? '600px' : undefined }}
      />
      <div className="p-6">
        <div className="mb-3 flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{item['Позначка часу']}</span>
          </div>
          <div className="flex items-center space-x-1">
            <User className="h-4 w-4" />
            <span>{item['Електронна адреса']}</span>
          </div>
        </div>

        <h2 className="mb-3 text-xl font-bold text-gray-900 transition-colors hover:text-blue-600 dark:text-gray-400">
          {item['Назва новини']}
        </h2>

        {isExpanded ? (
          <>
            <div
              className="mb-4 whitespace-pre-wrap leading-relaxed text-gray-600 transition-all duration-300 dark:text-gray-400"
              dangerouslySetInnerHTML={{ __html: item['Текст новини'] }}
            />
            <Slider item={item} />
          </>
        ) : (
          <p className="mb-4 line-clamp-2 whitespace-pre-wrap leading-relaxed text-gray-600 transition-all duration-300 dark:text-gray-400">
            {item['Текст новини'].replace(/<\/?[^>]+(>|$)/g, '')}
          </p>
        )}

        {item['Текст новини'].split('\n').length > 2 && (
          <button
            onClick={e => {
              e.stopPropagation();
              onToggleExpanded(item.id);
            }}
            className="font-semibold text-blue-600 transition-colors hover:text-blue-700"
          >
            {isExpanded ? 'Згорнути ↑' : 'Читати повністю →'}
          </button>
        )}
      </div>
    </article>
  );
};

export default AnnounceCard;
