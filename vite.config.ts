import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { resolveThemeConfig } from './src/theme/theme.config';
import { buildThemeInitScript } from './src/theme/initScript';

/** Вставляє в <head> скрипт, що ставить тему до завантаження React (без «білого спалаху»). */
function themeInitPlugin(script: string): Plugin {
  return {
    name: 'theme-init',
    transformIndexHtml: () => [{ tag: 'script', children: script, injectTo: 'head-prepend' }],
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  const theme = resolveThemeConfig(env);

  return {
    server: {
      host: '::',
      port: 8080,
    },
    plugins: [react(), themeInitPlugin(buildThemeInitScript(theme))],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        // Палітра, обрана в src/theme/theme.config.ts (або VITE_THEME_PALETTE), — лише вона йде в основний CSS
        '@active-palette': path.resolve(__dirname, `./src/theme/palettes/${theme.palette}.css`),
      },
    },
    build: {
      rollupOptions: {
        output: {
          // Бібліотеки окремими файлами: вони рідко змінюються й лишаються в кеші браузера між оновленнями сайту
          manualChunks: {
            react: ['react', 'react-dom', 'react-router-dom'],
            query: ['@tanstack/react-query'],
          },
        },
      },
    },
  };
});
