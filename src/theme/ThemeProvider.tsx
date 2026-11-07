/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { PALETTES, STORAGE_KEYS, resolveThemeConfig, type PaletteId, type ThemeMode } from './theme.config';
import { KIOSK_PATH_PREFIXES } from './initScript';

// Активна палітра потрапляє в бандл через аліас @active-palette (див. vite.config.ts),
// решта — лише як окремі файли, які завантажуються, коли їх обрали.
import '@active-palette';

export const config = resolveThemeConfig(import.meta.env);

const paletteLoaders = import.meta.glob('./palettes/*.css');
const loadedPalettes = new Set<PaletteId>([config.palette]);

async function ensurePaletteLoaded(id: PaletteId) {
  if (loadedPalettes.has(id)) return;
  const loader = paletteLoaders[`./palettes/${id}.css`];
  if (loader) await loader();
  loadedPalettes.add(id);
}

const safeGet = (key: string) => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};
const safeSet = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* приватний режим / кіоск без сховища */
  }
};

const readMode = (): ThemeMode => {
  if (!config.allowUserToggle) return config.defaultMode;
  const s = safeGet(STORAGE_KEYS.mode);
  return s === 'light' || s === 'dark' || s === 'system' ? s : config.defaultMode;
};
const readPalette = (): PaletteId => {
  if (!config.allowUserPalette) return config.palette;
  const s = safeGet(STORAGE_KEYS.palette) as PaletteId | null;
  return s && PALETTES.includes(s) ? s : config.palette;
};

const systemPrefersDark = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;

interface ThemeContextValue {
  /** Вибір користувача: light / dark / system */
  mode: ThemeMode;
  /** Фактичний режим, що зараз застосований */
  resolvedMode: 'light' | 'dark';
  palette: PaletteId;
  /** true на сторінках кіоску, де тема зафіксована налаштуванням kioskMode */
  isLocked: boolean;
  setMode: (m: ThemeMode) => void;
  toggleMode: () => void;
  setPalette: (p: PaletteId) => void;
  config: typeof config;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const [mode, setModeState] = useState<ThemeMode>(readMode);
  const [palette, setPaletteState] = useState<PaletteId>(readPalette);
  const [systemDark, setSystemDark] = useState(systemPrefersDark);

  // Слідкуємо за темою ОС, коли обрано «system»
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e: MediaQueryListEvent) => setSystemDark(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const isKiosk = KIOSK_PATH_PREFIXES.some((p) => pathname.startsWith(p));
  const isPreview = pathname.startsWith('/theme-preview'); // сторінка сама показує обидва режими
  const isLocked = isPreview || (isKiosk && config.kioskMode !== 'site');

  const effectiveMode = isPreview ? 'light' : isLocked ? (config.kioskMode as 'light' | 'dark') : mode;
  const resolvedMode: 'light' | 'dark' =
    effectiveMode === 'system' ? (systemDark ? 'dark' : 'light') : effectiveMode;

  useEffect(() => {
    document.documentElement.classList.toggle('dark', resolvedMode === 'dark');
  }, [resolvedMode]);

  useEffect(() => {
    let cancelled = false;
    ensurePaletteLoaded(palette).then(() => {
      if (!cancelled) document.documentElement.setAttribute('data-palette', palette);
    });
    return () => {
      cancelled = true;
    };
  }, [palette]);

  const withTransition = useCallback((fn: () => void) => {
    const root = document.documentElement;
    root.classList.add('theme-transition');
    fn();
    window.setTimeout(() => root.classList.remove('theme-transition'), 300);
  }, []);

  const setMode = useCallback(
    (m: ThemeMode) =>
      withTransition(() => {
        setModeState(m);
        safeSet(STORAGE_KEYS.mode, m);
      }),
    [withTransition]
  );

  const toggleMode = useCallback(
    () => setMode(resolvedMode === 'dark' ? 'light' : 'dark'),
    [resolvedMode, setMode]
  );

  const setPalette = useCallback(
    (p: PaletteId) =>
      withTransition(() => {
        setPaletteState(p);
        safeSet(STORAGE_KEYS.palette, p);
      }),
    [withTransition]
  );

  const value = useMemo(
    () => ({ mode, resolvedMode, palette, isLocked, setMode, toggleMode, setPalette, config }),
    [mode, resolvedMode, palette, isLocked, setMode, toggleMode, setPalette]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme() має викликатися всередині <ThemeProvider>');
  return ctx;
}
