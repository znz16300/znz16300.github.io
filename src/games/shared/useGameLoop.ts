import { useEffect, useRef } from 'react';

/** Викликає callback кожен кадр (dt - секунди, не більше 0.033). */
export function useGameLoop(callback: (dt: number) => void): void {
  const ref = useRef(callback);
  ref.current = callback;
  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    const loop = (t: number) => {
      const dt = Math.min(0.033, (t - last) / 1000);
      last = t;
      ref.current(dt);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);
}
