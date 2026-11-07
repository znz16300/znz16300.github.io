import React from 'react';

/** Сенсорна кнопка «натиснуто / відпущено» (для керування утриманням, працює одночасно з іншими кнопками - мультитач). */
export const PressButton: React.FC<{
  onDown: () => void;
  onUp: () => void;
  className?: string;
  children: React.ReactNode;
  label?: string;
}> = ({ onDown, onUp, className = '', children, label }) => (
  <button
    type="button"
    aria-label={label}
    onPointerDown={(e) => {
      e.preventDefault();
      e.currentTarget.setPointerCapture(e.pointerId);
      onDown();
    }}
    onPointerUp={onUp}
    onPointerCancel={onUp}
    onContextMenu={(e) => e.preventDefault()}
    className={`flex items-center justify-center text-white font-bold select-none shadow-lg active:scale-95 transition-transform ${className}`}
    style={{ touchAction: 'none' }}
  >
    {children}
  </button>
);
