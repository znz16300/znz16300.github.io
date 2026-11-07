import { useLayoutEffect, useRef, useState } from 'react';

/** Повертає ref для контейнера та розмір найбільшого прямокутника з заданим співвідношенням сторін (w/h), що вміщується в контейнер. */
export function useFitBox(aspect: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const cw = el.clientWidth;
      const ch = el.clientHeight;
      let w = cw;
      let h = cw / aspect;
      if (h > ch) {
        h = ch;
        w = ch * aspect;
      }
      setSize({ w: Math.max(0, Math.floor(w)), h: Math.max(0, Math.floor(h)) });
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [aspect]);

  return [ref, size] as const;
}

export const getDpr = (): number => Math.min(window.devicePixelRatio || 1, 2);
