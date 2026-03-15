import { PAGE_TABLE_1, PAGE_TABLE_2 } from '@/constants';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-20 text-white dark:from-gray-700 dark:via-gray-750 dark:to-gray-800">
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="animate-fade-in mb-6 text-4xl font-bold dark:text-gray-400 md:text-6xl">
          Куликівський ліцей
        </h2>
        <p className="animate-fade-in mb-8 text-xl text-blue-100 dark:text-gray-500 md:text-2xl">
          Сучасна освіта для успішного майбутнього
        </p>
        <div className="animate-scale-in flex flex-col justify-center gap-4 sm:flex-row">
          <Link to={`/page?titlePages=Про%20ліцей&keyPages=${PAGE_TABLE_2}`}>
            <button
              style={{ boxSizing: 'border-box', minHeight: '52px' }}
              className="rounded-lg bg-white px-8 py-3 font-semibold text-blue-700 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-50 dark:bg-gray-900 dark:text-gray-400"
            >
              Дізнатися більше
            </button>
          </Link>
          <Link to={`/page?titlePages=Контакти&keyPages=${PAGE_TABLE_1}`}>
            <button
              style={{ boxSizing: 'border-box', minHeight: '52px' }}
              className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-blue-700 dark:border-none dark:bg-gray-900 dark:text-gray-400"
            >
              Контакти
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
