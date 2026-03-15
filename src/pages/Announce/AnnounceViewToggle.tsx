import { LayoutList, Megaphone, AlignLeft } from 'lucide-react';

export type AnnounceViewMode = 'cards' | 'bulletin' | 'timeline';

interface AnnounceViewToggleProps {
  viewMode: AnnounceViewMode;
  onChange: (mode: AnnounceViewMode) => void;
}

const views: { mode: AnnounceViewMode; icon: React.ReactNode; label: string }[] = [
  {
    mode: 'cards',
    icon: <LayoutList className="h-4 w-4" />,
    label: 'Картки',
  },
  {
    mode: 'bulletin',
    icon: <Megaphone className="h-4 w-4" />,
    label: 'Дошка',
  },
  {
    mode: 'timeline',
    icon: <AlignLeft className="h-4 w-4" />,
    label: 'Стрічка',
  },
];

const AnnounceViewToggle = ({ viewMode, onChange }: AnnounceViewToggleProps) => {
  return (
    <div className="mb-6 flex items-center justify-end gap-1 rounded-xl bg-gray-100 p-1 dark:bg-gray-700 w-fit ml-auto">
      {views.map(({ mode, icon, label }) => (
        <button
          key={mode}
          onClick={() => onChange(mode)}
          title={label}
          className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-200 ${
            viewMode === mode
              ? 'bg-white text-blue-600 shadow-sm dark:bg-gray-800 dark:text-blue-400'
              : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
          }`}
        >
          {icon}
          <span className="hidden sm:inline">{label}</span>
        </button>
      ))}
    </div>
  );
};

export default AnnounceViewToggle;
