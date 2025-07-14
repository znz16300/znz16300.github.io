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
    <header className={className ? className : 'bg-emerald-600 py-8 text-white'}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="mb-4 inline-flex items-center space-x-2 text-emerald-200 transition-colors hover:text-white dark:text-emerald-800 dark:hover:text-emerald-600"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Повернутися на головну</span>
        </Link>
        <h1 className="text-3xl font-bold md:text-4xl">{title}</h1>
        <p className="mt-2 text-emerald-200 dark:text-emerald-800">{description}</p>
      </div>
    </header>
  );
}

export default Header;
