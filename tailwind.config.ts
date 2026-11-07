import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

/** Колір із CSS-змінної у форматі "R G B" з підтримкою прозорості (bg-brand-500/20) */
const v = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;
const SHADES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
const scale = (name: string) => Object.fromEntries(SHADES.map((s) => [s, v(`${name}-${s}`)]));

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      // Усі кольори беруться з CSS-змінних активної палітри (src/theme/palettes/*.css).
      // gray-* і slate-* теж прив'язані до палітри (--neutral-*), тому існуючі класи
      // автоматично змінюють відтінок разом з темою.
      colors: {
        brand: scale('brand'),
        brand2: scale('brand2'),
        neutral: scale('neutral'),
        gray: scale('neutral'),
        slate: scale('neutral'),
        border: v('border'),
        input: v('input'),
        ring: v('ring'),
        background: v('background'),
        foreground: v('foreground'),
        primary: { DEFAULT: v('primary'), foreground: v('primary-foreground') },
        secondary: { DEFAULT: v('secondary'), foreground: v('secondary-foreground') },
        destructive: { DEFAULT: v('destructive'), foreground: v('destructive-foreground') },
        muted: { DEFAULT: v('muted'), foreground: v('muted-foreground') },
        accent: { DEFAULT: v('accent'), foreground: v('accent-foreground') },
        popover: { DEFAULT: v('popover'), foreground: v('popover-foreground') },
        card: { DEFAULT: v('card'), foreground: v('card-foreground') },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [animate],
} satisfies Config;
