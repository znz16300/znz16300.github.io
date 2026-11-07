import { useCallback, useState } from 'react';

/** Рекорд гри, що зберігається в браузері кіоску (localStorage). */
export function useHighScore(gameId: string): [number, (score: number) => void] {
  const key = `kiosk-game-best-${gameId}`;
  const [best, setBest] = useState<number>(() => {
    try {
      return Number(localStorage.getItem(key)) || 0;
    } catch {
      return 0;
    }
  });
  const submit = useCallback(
    (score: number) => {
      setBest((prev) => {
        if (score <= prev) return prev;
        try {
          localStorage.setItem(key, String(score));
        } catch {
          /* ignore */
        }
        return score;
      });
    },
    [key]
  );
  return [best, submit];
}
