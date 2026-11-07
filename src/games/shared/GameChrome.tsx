import React, { createContext, useContext, useEffect } from 'react';

/** Дає грі змогу сховати верхню панель сторінки (заголовок і кнопки), щоб поле гри займало весь екран. */
export const GameChromeContext = createContext<{ setImmersive: (on: boolean) => void }>({ setImmersive: () => {} });

/** Викликайте у грі: true - сховати панель. Панель повертається, коли гра закривається. */
export const useImmersive = (on: boolean): void => {
  const { setImmersive } = useContext(GameChromeContext);
  useEffect(() => {
    setImmersive(on);
    return () => setImmersive(false);
  }, [on, setImmersive]);
};
