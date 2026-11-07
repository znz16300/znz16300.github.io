import { PAGE_TABLE_1, PAGE_TABLE_2 } from '@/constants';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-brand-600 via-brand-700 to-brand-800 py-20 text-white dark:from-brand-950 dark:via-gray-900 dark:to-gray-950">
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="animate-fade-in mb-6 text-4xl font-bold dark:text-gray-100 md:text-6xl">
          Куликівський ліцей
        </h2>
        <p className="animate-fade-in mb-8 text-xl text-brand-100 dark:text-gray-300 md:text-2xl">
          Сучасна освіта для успішного майбутнього
        </p>
        <div className="animate-scale-in flex flex-col justify-center gap-4 sm:flex-row">
          <Link to={`/page?titlePages=Про%20ліцей&keyPages=${PAGE_TABLE_2}`}>
            <button
              style={{ boxSizing: 'border-box', minHeight: '52px' }}
              className="rounded-lg bg-white px-8 py-3 font-semibold text-brand-700 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-brand-50 dark:bg-brand-500 dark:text-white dark:hover:bg-brand-400"
            >
              Дізнатися більше
            </button>
          </Link>
          <Link to={`/page?titlePages=Контакти&keyPages=${PAGE_TABLE_1}`}>
            <button
              style={{ boxSizing: 'border-box', minHeight: '52px' }}
              className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-brand-700 dark:border-gray-600 dark:text-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
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
