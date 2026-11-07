import React, { useState } from 'react';
import { isMuted, setMuted } from './sound';

export const SoundToggle: React.FC = () => {
  const [m, setM] = useState(isMuted());
  return (
    <button
      onClick={() => {
        setMuted(!m);
        setM(!m);
      }}
      className="px-3 py-2 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-semibold active:scale-95"
      aria-label="Звук"
    >
      {m ? '🔇 Звук вимкнено' : '🔊 Звук увімкнено'}
    </button>
  );
};
