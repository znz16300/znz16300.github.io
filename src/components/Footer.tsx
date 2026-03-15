import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { GraduationCap, LogInIcon, LogOutIcon, Mail, MapPin, Phone, UserIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { User } from '@/type/auth';
import { navigationItems } from './Navbar';

interface FooterProps {
  isAuthenticated: boolean;
  user: User | null;
}

const Footer = ({ isAuthenticated, user }: FooterProps) => {
  return (
    <footer className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-10 text-gray-100 dark:from-gray-600 dark:via-gray-700 dark:to-gray-800 dark:text-gray-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand + Auth */}
          <div>
            <div className="mb-4 flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Куликівський ліцей</h3>
            </div>
            <p className="text-gray-200 dark:text-gray-400">
              Забезпечуємо якісну освіту та всебічний розвиток особистості кожного учня.
            </p>

            {/* Auth block */}
            <div className="my-4">
              {isAuthenticated ? (
                <div className="flex flex-row gap-2">
                  <Link
                    to="/profile"
                    className="flex items-center gap-1 font-semibold text-white hover:text-blue-200"
                    title="Особистий кабінет"
                  >
                    <UserIcon className="h-5 w-5" />
                    <span>{user?.name || ''}</span>
                  </Link>
                  <Link to="/logout" className="font-semibold text-white hover:text-blue-200">
                    <LogOutIcon className="h-5 w-5" />
                  </Link>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center gap-2 font-semibold text-white hover:text-blue-200"
                >
                  <LogInIcon className="h-5 w-5" />
                  <span>Увійти</span>
                </Link>
              )}
            </div>

            <ThemeToggle />
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Швидкі посилання</h4>
            <ul className="columns-2 space-y-2">
              {navigationItems.slice(1).map(item => (
                <li key={item.title}>
                  <Link
                    to={item.href}
                    className="text-gray-200 transition-colors hover:text-white dark:text-gray-400"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Контакти</h4>
            <div className="space-y-2 text-gray-200 dark:text-gray-400">
              <p className="flex items-center gap-2">
                <MapPin size={18} /> вул. Шевченка, 4, Куликівка
              </p>
              <p className="flex items-center gap-2">
                <Phone size={18} /> +38 (046) 432-12-08
              </p>
              <p className="flex items-center gap-2">
                <Phone size={18} /> +38 (046) 432-12-91
              </p>
              <p className="flex items-center gap-2">
                <Mail size={18} /> znz16300@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-blue-500/50 pt-8 text-center text-gray-200 dark:border-gray-600 dark:text-gray-500">
          <p>&copy; 2026 Куликівський ліцей. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
