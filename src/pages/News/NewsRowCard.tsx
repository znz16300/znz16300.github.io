import { Slider } from '@/components/ui/prevslider';
import { NewsItem } from '@/type/newsItem';
import { containsHtml } from '@/lib/utils';
import { Calendar, User } from 'lucide-react';

interface NewsRowCardProps {
  item: NewsItem;
  index: number;
  expandedId: string | null;
  onCardClick: (id: string) => void;
  onToggleExpanded: (id: string | number) => void;
}

const NewsRowCard = ({ item, index, expandedId, onCardClick, onToggleExpanded }: NewsRowCardProps) => {
  const isExpanded = expandedId === String(item.id);
  const firstImage = item['Фото'].split(/(?:\n|, |,)/)[0];
  const isHtml = containsHtml(item['Текст новини']);

  return (
    <article
      key={`${item.id}-${item['Позначка часу']}`}
      className="animate-fade-in cursor-pointer overflow-hidden rounded-xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl dark:bg-gray-800"
      style={{ animationDelay: `${index * 150}ms` }}
      onClick={() => onCardClick(String(item.id))}
    >
      <div className={`flex ${isExpanded ? 'flex-col' : 'flex-row'}`}>
        <img
          src={firstImage}
          alt={item['Назва новини']}
          className={`transition-all duration-500 object-cover flex-shrink-0 ${
            isExpanded
              ? 'w-full max-h-[500px] object-contain'
              : 'w-48 h-40 sm:w-56 sm:h-44 rounded-l-xl'
          }`}
        />
        <div className="p-5 flex flex-col justify-between flex-1">
          <div>
            <div className="mb-2 flex items-center space-x-3 text-xs text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-1">
                <Calendar className="h-3.5 w-3.5" />
                <span>{item['Позначка часу']}</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="h-3.5 w-3.5" />
                <span>{item['Електронна адреса']}</span>
              </div>
            </div>

            <h2 className="mb-2 text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors dark:text-gray-300 leading-snug">
              {item['Назва новини']}
            </h2>

            {isExpanded ? (
              <>
                {isHtml ? (
                  <div
                    className="mb-4 leading-relaxed text-gray-600 text-sm transition-all duration-300 dark:text-gray-400"
                    dangerouslySetInnerHTML={{ __html: item['Текст новини'] }}
                  />
                ) : (
                  <div className="mb-4 whitespace-pre-wrap leading-relaxed text-gray-600 text-sm transition-all duration-300 dark:text-gray-400">
                    {item['Текст новини']}
                  </div>
                )}
                <Slider item={item} />
              </>
            ) : (
              <p className="line-clamp-2 text-sm whitespace-pre-wrap leading-relaxed text-gray-500 dark:text-gray-400">
                {item['Текст новини'].replace(/<\/?[^>]+(>|$)/g, '')}
              </p>
            )}
          </div>

          {item['Текст новини'].split('\n').length > 2 && (
            <button
              onClick={e => {
                e.stopPropagation();
                onToggleExpanded(item.id);
              }}
              className="mt-3 self-start text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
            >
              {isExpanded ? 'Згорнути ↑' : 'Читати повністю →'}
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export default NewsRowCard;
