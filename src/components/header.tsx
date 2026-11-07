import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function Header({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <header className={className ? className : 'bg-brand2-600 py-8 text-white dark:bg-gradient-to-br dark:from-brand2-900 dark:to-gray-950 dark:border-b dark:border-gray-800'}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="mb-4 inline-flex items-center space-x-2 text-brand2-200 transition-colors hover:text-white dark:text-brand2-300 dark:hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Повернутися на головну</span>
        </Link>
        <h1 className="text-3xl font-bold md:text-4xl">{title}</h1>
        <p className="mt-2 text-brand2-100 dark:text-brand2-200/80">{description}</p>
      </div>
    </header>
  );
}

export default Header;
