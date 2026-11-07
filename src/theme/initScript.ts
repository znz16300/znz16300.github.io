// Маленький скрипт, який vite.config.ts вставляє в <head> index.html.
// Він виконується ДО завантаження React і одразу ставить клас .dark та data-palette
// на <html> — тому сторінка не «блимає» білим при темній темі.
// Логіка має збігатися з ThemeProvider.tsx.
import { STORAGE_KEYS, type ThemeConfig } from './theme.config';

export const KIOSK_PATH_PREFIXES = ['/kiosk', '/mainmenu'];

export function buildThemeInitScript(cfg: ThemeConfig): string {
  const data = JSON.stringify({
    mode: cfg.defaultMode,
    toggle: cfg.allowUserToggle,
    palette: cfg.palette,
    kiosk: cfg.kioskMode,
    kioskPaths: KIOSK_PATH_PREFIXES,
    key: STORAGE_KEYS.mode,
  });
  return `(function(){try{var c=${data};var m=c.mode;
if(c.toggle){var s=localStorage.getItem(c.key);if(s==='light'||s==='dark'||s==='system')m=s;}
var p=location.pathname;if(c.kiosk!=='site'&&c.kioskPaths.some(function(k){return p.indexOf(k)===0}))m=c.kiosk;
if(m==='system')m=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';
var h=document.documentElement;h.classList.toggle('dark',m==='dark');h.setAttribute('data-palette',c.palette);
}catch(e){document.documentElement.setAttribute('data-palette',${JSON.stringify(cfg.palette)});}})();`;
}
