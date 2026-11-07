import React, { useEffect, useState } from 'react';

const usePortrait = (): boolean => {
  const [portrait, setPortrait] = useState<boolean>(() => window.innerHeight > window.innerWidth);
  useEffect(() => {
    const onResize = () => setPortrait(window.innerHeight > window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return portrait;
};

/**
 * Розкладка для ігор з полем + бічними панелями.
 * Горизонтальний екран: [info] [поле] [controls]. Вертикальний: поле зверху, під ним info і controls.
 * children - контейнер поля (у ньому гра використовує useFitBox).
 */
export const GameLayout: React.FC<{
  info: React.ReactNode;
  controls: React.ReactNode;
  children: React.ReactNode;
}> = ({ info, controls, children }) => {
  const portrait = usePortrait();
  if (portrait) {
    return (
      <div className="w-full h-full flex flex-col gap-2 p-2">
        <div className="flex-1 min-h-0">{children}</div>
        <div className="flex items-center justify-between gap-2">
          {info}
          {controls}
        </div>
      </div>
    );
  }
  return (
    <div className="w-full h-full flex flex-row gap-4 p-4">
      <div className="w-56 flex-shrink-0 flex flex-col justify-center gap-3">{info}</div>
      <div className="flex-1 min-w-0 min-h-0">{children}</div>
      <div className="w-56 flex-shrink-0 flex flex-col justify-center items-center gap-3">{controls}</div>
    </div>
  );
};
