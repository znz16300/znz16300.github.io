import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { ChevronRight } from "lucide-react"
import { NavItem } from "@/type/navItem"

interface Props {
  items: NavItem[]
  onLinkClick?: () => void
  className?: string
  itemClassName?: string
  activeItemClassName?: string
}

export default function NestedMenu({
  items,
  onLinkClick,
  className = "",
  itemClassName = "",
  activeItemClassName = "bg-blue-100 text-blue-700",
}: Props) {
  const location = useLocation()
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({})

  const toggleSubmenu = (title: string) => {
    setOpenMenus((prev) => ({ ...prev, [title]: !prev[title] }))
  }

  return (
    <nav className={`space-y-2 relative ${className}`}>
      {items.map((item) => {
        const isActive = location.pathname === item.href
        const hasChildren = item.children && item.children.length > 0

        return (
          <div key={item.title} className="relative group">
            {hasChildren ? (
              <>
                <button
                  onClick={() => toggleSubmenu(item.title)}
                  className={`flex items-center justify-between w-full text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-blue-50 ${itemClassName}`}
                >
                  <div className="flex items-center space-x-2">
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium text-left">{item.title}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition" />
                </button>

                {/* Підменю як dropdown праворуч */}
                <div
                  className={`absolute top-0 left-full ml-2 hidden group-hover:block bg-white border rounded-lg shadow-md z-50 min-w-[180px] py-2`}
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
                to={item.href || "#"}
                className={`flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-blue-50 ${
                  isActive ? activeItemClassName : ""
                } ${itemClassName}`}
                onClick={onLinkClick}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.title}</span>
              </Link>
            )}
          </div>
        )
      })}
    </nav>
  )
}
