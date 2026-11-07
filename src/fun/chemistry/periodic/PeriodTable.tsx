// 🧪 Клікабельна періодична система: торкнись елемента - дізнайся про нього. Легенда фільтрує категорії.
import React, { useState } from 'react';
import { CATS, ELEMENTS, FACT, catOf, pos, type Cat, type El } from './data';

const GROUP_NOTE: Record<Cat, string> = {
  alkali: 'Дуже активні м\'які метали, бурхливо реагують з водою.',
  alkaline: 'Активні метали, що горять яскравим полум\'ям.',
  transition: 'Тверді, блискучі метали; добре проводять тепло й струм.',
  post: 'Метали, що стоять праворуч від перехідних.',
  metalloid: 'Мають властивості і металів, і неметалів; багато з них — напівпровідники.',
  nonmetal: 'Не проводять струм (за винятком графіту); основа органічних речовин і повітря.',
  halogen: 'Дуже активні неметали, що утворюють солі з металами.',
  noble: 'Майже не вступають у хімічні реакції.',
  lanth: 'Рідкісноземельні метали; потрібні для магнітів і екранів.',
  actin: 'Радіоактивні метали.',
  unknown: 'Штучно створені надважкі елементи; живуть дуже мало, їхні властивості майже невідомі.',
};

export const PeriodTable: React.FC = () => {
  const [sel, setSel] = useState<El>(ELEMENTS[0]);
  const [filter, setFilter] = useState<Cat | null>(null);
  const cat = catOf(sel.cat);
  const { row, col } = pos(sel.z);
  const period = row === 9 ? 6 : row === 10 ? 7 : row;
  const group = row >= 9 ? '—' : String(col);

  return (
    <div className="h-full overflow-y-auto p-2 md:p-3">
      <div className="flex flex-col lg:flex-row gap-3">
        <div className="flex-1 min-w-0">
          <div
            className="grid gap-[2px] md:gap-1"
            style={{ gridTemplateColumns: 'repeat(18, minmax(0, 1fr))', gridTemplateRows: 'repeat(7, auto) 0.5rem repeat(2, auto)' }}
          >
            {ELEMENTS.map((e) => {
              const p = pos(e.z);
              const c = catOf(e.cat);
              const dim = filter && filter !== e.cat;
              return (
                <button
                  key={e.z}
                  onClick={() => setSel(e)}
                  aria-label={e.name}
                  style={{ gridRow: p.row, gridColumn: p.col, background: c.bg, opacity: dim ? 0.2 : 1 }}
                  className={`aspect-square rounded md:rounded-md text-slate-900 leading-none flex flex-col items-center justify-center transition active:scale-90 ${
                    sel.z === e.z ? 'ring-2 md:ring-4 ring-white z-10 scale-110' : ''
                  }`}
                >
                  <span className="text-[7px] md:text-[10px] opacity-70">{e.z}</span>
                  <span className="text-[11px] md:text-base lg:text-xl font-bold">{e.s}</span>
                </button>
              );
            })}
            <div style={{ gridRow: 1, gridColumn: '3 / 13' }} className="text-slate-300 text-xs md:text-sm self-center px-2">
              Торкнись елемента ↓ · кольори — категорії
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {CATS.map((c) => (
              <button
                key={c.id}
                onClick={() => setFilter(filter === c.id ? null : c.id)}
                className={`px-2 py-1 rounded-lg text-xs md:text-sm font-semibold text-slate-900 border-2 ${filter === c.id ? 'border-white' : 'border-transparent'}`}
                style={{ background: c.bg }}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <div className="lg:w-80 shrink-0 bg-slate-800/90 rounded-2xl p-4 text-white self-start">
          <div className="flex items-center gap-4">
            <div className="w-24 h-24 rounded-xl flex flex-col items-center justify-center text-slate-900" style={{ background: cat.bg }}>
              <span className="text-xs">{sel.z}</span>
              <span className="text-5xl font-bold leading-none">{sel.s}</span>
              <span className="text-xs">{sel.mass}</span>
            </div>
            <div>
              <div className="text-2xl font-bold">{sel.name}</div>
              <div className="text-sm text-slate-300">{cat.label}</div>
              <div className="text-sm text-slate-300">Період {period} · група {group}</div>
            </div>
          </div>
          <p className="mt-3 text-base">{FACT[sel.s] ?? `Елемент № ${sel.z}. ${GROUP_NOTE[sel.cat]}`}</p>
          <p className="mt-2 text-sm text-indigo-200">ℹ️ {GROUP_NOTE[sel.cat]}</p>
        </div>
      </div>
    </div>
  );
};
