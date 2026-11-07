import { useCallback, useState } from 'react';

/** Найкращий результат, що зберігається в браузері кіоску (localStorage). Повертає [рекорд, submit(score)]. */
export function useBest(key: string): [number, (score: number) => boolean] {
  const storageKey = `kiosk-physics-best-${key}`;
  const [best, setBest] = useState<number>(() => {
    try {
      return Number(localStorage.getItem(storageKey)) || 0;
    } catch {
      return 0;
    }
  });
  const submit = useCallback(
    (score: number): boolean => {
      let record = false;
      setBest((prev) => {
        if (score <= prev) return prev;
        record = true;
        try {
          localStorage.setItem(storageKey, String(score));
        } catch {
          /* ignore */
        }
        return score;
      });
      return record;
    },
    [storageKey]
  );
  return [best, submit];
}
