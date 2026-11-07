import { Monitor, Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PALETTES, type ThemeMode } from './theme.config';
import { PALETTE_META } from './palettes';
import { useTheme } from './ThemeProvider';

const MODES: { id: ThemeMode; label: string; Icon: typeof Sun }[] = [
  { id: 'light', label: 'Світла тема', Icon: Sun },
  { id: 'dark', label: 'Темна тема', Icon: Moon },
  { id: 'system', label: 'Як у системі', Icon: Monitor },
];

/**
 * Перемикач теми: світла / темна / як у системі, і (якщо дозволено в theme.config.ts)
 * вибір палітри. Розрахований на кольоровий фон футера; для світлого фону передайте variant="plain".
 */
export function ThemeToggle({ className, variant = 'onColor' }: { className?: string; variant?: 'onColor' | 'plain' }) {
  const { mode, setMode, palette, setPalette, config } = useTheme();
  if (!config.allowUserToggle && !config.allowUserPalette) return null;

  const shell =
    variant === 'onColor'
      ? 'border-white/25 bg-white/10'
      : 'border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800';
  const idle =
    variant === 'onColor'
      ? 'text-white/80 hover:bg-white/15 hover:text-white'
      : 'text-gray-600 hover:bg-white hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white';
  const active =
    variant === 'onColor'
      ? 'bg-white text-brand-700 shadow dark:bg-gray-100 dark:text-gray-900'
      : 'bg-white text-brand-700 shadow dark:bg-gray-950 dark:text-brand-300';

  return (
    <div className={cn('flex flex-wrap items-center gap-3', className)}>
      {config.allowUserToggle && (
        <div role="radiogroup" aria-label="Тема оформлення" className={cn('inline-flex rounded-full border p-1', shell)}>
          {MODES.map(({ id, label, Icon }) => (
            <button
              key={id}
              type="button"
              role="radio"
              aria-checked={mode === id}
              title={label}
              onClick={() => setMode(id)}
              className={cn(
                'rounded-full p-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70',
                mode === id ? active : idle
              )}
            >
              <Icon className="h-4 w-4" aria-hidden />
              <span className="sr-only">{label}</span>
            </button>
          ))}
        </div>
      )}

      {config.allowUserPalette && (
        <div role="radiogroup" aria-label="Палітра" className="flex items-center gap-2">
          {PALETTES.map((id) => {
            const { label, swatch } = PALETTE_META[id];
            return (
              <button
                key={id}
                type="button"
                role="radio"
                aria-checked={palette === id}
                title={label}
                onClick={() => setPalette(id)}
                className={cn(
                  'h-6 w-6 rounded-full ring-offset-2 ring-offset-transparent transition-transform hover:scale-110',
                  palette === id ? 'ring-2 ring-white' : 'ring-1 ring-white/30'
                )}
                style={{ background: `linear-gradient(135deg, ${swatch[0]} 50%, ${swatch[1]} 50%)` }}
              >
                <span className="sr-only">{label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
