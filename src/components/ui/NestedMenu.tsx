import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { NavItem } from '@/type/navItem';

interface Props {
  items: NavItem[];
  onLinkClick?: () => void;
  className?: string;
  itemClassName?: string;
  activeItemClassName?: string;
}

export default function NestedMenu({
  items,
  onLinkClick,
  className = '',
  itemClassName = '',
  activeItemClassName = 'bg-blue-100 text-blue-700',
}: Props) {
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});

  const toggleSubmenu = (title: string) => {
    setOpenMenus(prev => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <nav className={`relative space-y-2 ${className}`}>
      {items.map(item => {
        const isActive = location.pathname === item.href;
        const hasChildren = item.children && item.children.length > 0;

        return (
          <div key={item.title} className="group relative">
            {hasChildren ? (
              <>
                <button
                  onClick={() => toggleSubmenu(item.title)}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-gray-700 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600 ${itemClassName}`}
                >
                  <div className="flex items-center space-x-2">
                    <item.icon className="h-5 w-5" />
                    <span className="text-left font-medium">{item.title}</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-gray-400 transition group-hover:text-blue-500" />
                </button>

                {/* Підменю як dropdown праворуч */}
                <div
                  className={`absolute left-full top-0 z-50 ml-2 hidden min-w-[180px] rounded-lg border bg-white py-2 shadow-md group-hover:block dark:bg-gray-900`}
                >
                  <NestedMenu
                    items={item.children!}
                    onLinkClick={onLinkClick}
                    className="space-y-1"
                    itemClassName={itemClassName}
                    activeItemClassName={activeItemClassName}
                  />
                </div>
              </>
            ) : (
              <Link
                to={item.href || '#'}
                className={`flex items-center space-x-3 rounded-lg px-3 py-2 text-gray-700 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600 ${
                  isActive ? activeItemClassName : ''
                } ${itemClassName}`}
                onClick={onLinkClick}
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.title}</span>
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
