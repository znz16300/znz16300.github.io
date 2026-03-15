import { PAGE_TABLE_1, PAGE_TABLE_2 } from '@/constants';
import fixKeyboardLayout from '@/lib/fixKeyboardLayout';
import {
  Activity,
  FileText,
  LogInIcon,
  LogOutIcon,
  Menu,
  MessageSquare,
  Newspaper,
  Phone,
  Search,
  UserIcon,
  X,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { User } from '@/type/auth';

export const navigationItems = [
  { id: 1, title: 'Новини', href: '/news', icon: Newspaper },
  { id: 1.5, title: 'Оголошення', href: '/announce', icon: Newspaper },
  { id: 2, title: 'Документи', href: '/documents', icon: FileText },
  {
    id: 3,
    title: 'Діяльність',
    href: `/page?titlePages=Діяльність&keyPages=${PAGE_TABLE_1}`,
    icon: Activity,
  },
  {
    id: 4,
    title: 'Контакти',
    href: `/page?titlePages=Контакти&keyPages=${PAGE_TABLE_1}`,
    icon: Phone,
  },
  {
    id: 5,
    title: 'Сторінки',
    href: `/page?titlePages=Більше&keyPages=${PAGE_TABLE_2}`,
    icon: Phone,
  },
  {
    id: 6,
    title: 'Учням, батькам',
    href: `/page?titlePages=Учням,%20батькам&keyPages=${PAGE_TABLE_2}`,
    icon: Phone,
  },
  {
    id: 7,
    title: 'Курси',
    href: `/page?titlePages=Курси&keyPages=${PAGE_TABLE_2}`,
    icon: Phone,
  },
  {
    id: 7,
    title: 'Положення, порядки, інструкції',
    href: `/page?titlePages=Положення%20та%20порядки&keyPages=${PAGE_TABLE_1}`,
    icon: Phone,
  },
  {
    id: 7,
    title: 'Харчування',
    href: `/page?titlePages=Харчування&keyPages=${PAGE_TABLE_1}`,
    icon: Phone,
  },
  {
    id: 7,
    title: 'Закупівлі',
    href: `/page?titlePages=Закупівлі&keyPages=${PAGE_TABLE_1}`,
    icon: Phone,
  },
  { id: 8, title: 'Розклад уроків', href: '/schedule2', icon: Phone },
  {
    id: 9,
    title: 'Розклад дзвінків',
    href: `/page?titlePages=Розклад%20дзвінків&keyPages=${PAGE_TABLE_1}`,
    icon: Phone,
  },
  {
    id: 10,
    title: 'Розклад змішаного навчання',
    href: `/page?titlePages=Розклад%20змішаного%20навчання&keyPages=${PAGE_TABLE_1}`,
    icon: Phone,
  },
  {
    id: 11,
    title: 'Зворотний зв\'язок',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSd3fmURo9ooxp05Sm_oYRW_WVplRu7bWmrIqHSsv6TjQ_TzqA/viewform?usp=header',
    icon: MessageSquare,
  },
];

interface NavbarProps {
  isAuthenticated: boolean;
  user: User | null;
}

const Navbar = ({ isAuthenticated, user }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const mobileSearchInputRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut Ctrl+F / Cmd+F to focus search
  useEffect(() => {
    const handleShortcut = (e: KeyboardEvent) => {
      const isMac = navigator.platform.includes('Mac');
      const isShortcut =
        (isMac && e.metaKey && e.key === 'f') || (!isMac && e.ctrlKey && e.key === 'f');
      if (isShortcut) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleShortcut);
    return () => window.removeEventListener('keydown', handleShortcut);
  }, []);

  const performSearch = () => {
    if (!searchValue.trim()) return;
    window.location.href = `/page?search=${encodeURIComponent(fixKeyboardLayout(searchValue))}`;
    setSearchValue('');
  };

  // Click on search icon: focus if empty, search if has value
  const handleSearchIconClick = () => {
    if (!searchValue.trim()) {
      searchInputRef.current?.focus();
    } else {
      performSearch();
    }
  };

  const handleMobileSearchIconClick = () => {
    if (!searchValue.trim()) {
      mobileSearchInputRef.current?.focus();
    } else {
      performSearch();
    }
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchValue.trim()) {
      performSearch();
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg">
              <img src="./assets/icons/logo_black.svg" alt="Логотип" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-gray-400">
                Куликівський ліцей
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-500">
                Якісна освіта для майбутнього
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-1 md:flex">
            {navigationItems
              .filter(i => i.id < 5)
              .map(
                item =>
                  item.href && (
                    <Link
                      key={item.title}
                      to={item.href}
                      className="flex items-center space-x-2 rounded-lg px-3 py-2 text-gray-700 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600 dark:text-gray-400 dark:hover:bg-gray-700"
                    >
                      <item.icon className="h-4 w-4" />
                      <span className="font-medium">{item.title}</span>
                    </Link>
                  )
              )}

            {/* Desktop Search */}
            <div className="ml-4 flex items-center gap-2">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Пошук..."
                className="w-48 rounded border bg-white px-3 py-2 text-black focus:border-blue-400 focus:outline-none focus:ring dark:bg-gray-800 dark:text-gray-400 dark:focus:border-gray-600"
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                onKeyUp={handleKeyUp}
              />
              <button
                onClick={handleSearchIconClick}
                title="Пошук"
                className="flex items-center justify-center rounded-lg p-2 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-gray-700"
              >
                <Search className="h-5 w-5 stroke-gray-800 dark:stroke-gray-400" />
              </button>

              {/* Auth */}
              {isAuthenticated ? (
                <div className="flex items-center gap-2">
                  <Link
                    to="/profile"
                    title="Особистий кабінет"
                    className="flex items-center gap-1 rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                  >
                    <UserIcon className="h-5 w-5" />
                    {user?.name && (
                      <span className="text-sm font-medium">{user.name}</span>
                    )}
                  </Link>
                  <Link
                    to="/logout"
                    title="Вийти"
                    className="rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                  >
                    <LogOutIcon className="h-5 w-5" />
                  </Link>
                </div>
              ) : (
                <Link
                  to="/login"
                  title="Увійти"
                  className="rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                >
                  <LogInIcon className="h-5 w-5" />
                </Link>
              )}
            </div>
          </nav>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100 md:hidden"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="animate-fade-in fixed w-full border-t bg-white py-4 dark:bg-gray-900 md:hidden">
            <nav className="space-y-2">
              {navigationItems
                .filter(i => i.id < 7)
                .map(item => (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="flex items-center space-x-3 rounded-lg px-4 py-3 text-gray-700 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600 dark:text-gray-400"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="font-medium">{item.title}</span>
                  </Link>
                ))}

              {/* Mobile Search */}
              <div className="flex gap-2 p-2" style={{ width: '95%' }}>
                <input
                  ref={mobileSearchInputRef}
                  type="text"
                  placeholder="Пошук..."
                  className="w-full flex-1 rounded border px-3 py-2 text-black focus:border-blue-400 focus:outline-none focus:ring dark:bg-gray-900 dark:text-gray-400 dark:focus:border-gray-900"
                  value={searchValue}
                  onChange={e => setSearchValue(e.target.value)}
                  onKeyUp={handleKeyUp}
                />
                <button
                  onClick={handleMobileSearchIconClick}
                  className="rounded-lg p-2 transition-colors hover:bg-blue-50 hover:text-blue-600"
                >
                  <Search className="h-5 w-5 stroke-gray-800 dark:stroke-gray-400" />
                </button>
              </div>

              {/* Mobile Auth */}
              <div className="px-4 pb-2">
                {isAuthenticated ? (
                  <div className="flex items-center gap-3">
                    <Link
                      to="/profile"
                      className="flex items-center gap-2 font-semibold text-gray-700 hover:text-blue-600 dark:text-gray-400"
                    >
                      <UserIcon className="h-5 w-5" />
                      <span>{user?.name || 'Профіль'}</span>
                    </Link>
                    <Link to="/logout" className="text-gray-500 hover:text-red-500">
                      <LogOutIcon className="h-5 w-5" />
                    </Link>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    className="flex items-center gap-2 font-semibold text-gray-700 hover:text-blue-600 dark:text-gray-400"
                  >
                    <LogInIcon className="h-5 w-5" />
                    <span>Увійти</span>
                  </Link>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
