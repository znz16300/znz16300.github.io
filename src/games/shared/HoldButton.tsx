import React, { useEffect, useRef } from 'react';

/** Сенсорна кнопка: спрацьовує на дотик, а при утриманні (repeat) повторює дію. */
export const HoldButton: React.FC<{
  onAction: () => void;
  repeat?: boolean;
  className?: string;
  children: React.ReactNode;
  label?: string;
}> = ({ onAction, repeat = false, className = '', children, label }) => {
  const actionRef = useRef(onAction);
  actionRef.current = onAction;
  const timeoutRef = useRef<number | undefined>(undefined);
  const intervalRef = useRef<number | undefined>(undefined);

  const stop = () => {
    window.clearTimeout(timeoutRef.current);
    window.clearInterval(intervalRef.current);
  };
  useEffect(() => stop, []);

  const start = (e: React.PointerEvent<HTMLButtonElement>) => {
    e.preventDefault();
    actionRef.current();
    if (repeat) {
      stop();
      timeoutRef.current = window.setTimeout(() => {
        intervalRef.current = window.setInterval(() => actionRef.current(), 70);
      }, 180);
    }
  };

  return (
    <button
      type="button"
      aria-label={label}
      onPointerDown={start}
      onPointerUp={stop}
      onPointerLeave={stop}
      onPointerCancel={stop}
      onContextMenu={(e) => e.preventDefault()}
      className={`rounded-2xl bg-blue-600 hover:bg-blue-500 active:bg-blue-800 active:scale-95 text-white text-3xl font-bold shadow-lg flex items-center justify-center select-none transition-transform ${className}`}
      style={{ touchAction: 'none' }}
    >
      {children}
    </button>
  );
};
