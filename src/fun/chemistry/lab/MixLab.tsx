// 🔬 Віртуальна лабораторія: обери дві речовини й змішай їх.
import React, { useRef, useState } from 'react';
import { ActionButton, LabLayout } from '../../../physics/shared/ui';
import { unlockAudio } from '../../../physics/shared/sound';
import { Flask, type FlaskHandle } from './Flask';
import { REACTIONS, SUBS, byId, findReaction, type RGBA, type Reaction } from './data';

const mixColor = (a: RGBA, b: RGBA): RGBA => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2, Math.max(a[3], b[3])];

export const MixLab: React.FC = () => {
  const flask = useRef<FlaskHandle>(null);
  const [sel, setSel] = useState<string[]>([]);
  const [rx, setRx] = useState<Reaction | null | 'none'>(null);
  const [found, setFound] = useState<string[]>([]);

  const toggle = (id: string) => {
    setSel((s) => (s.includes(id) ? s.filter((x) => x !== id) : s.length >= 2 ? [s[1], id] : [...s, id]));
    setRx(null);
  };
  const mix = () => {
    if (sel.length < 2) return;
    unlockAudio();
    const [A, B] = sel.map(byId);
    const r = findReaction(A.id, B.id) ?? null;
    const liqs = [A, B].filter((x) => x.liquid);
    if (liqs.length === 0) { setRx('none'); return; }
    const base: RGBA = liqs.length === 2 ? mixColor(liqs[0].color, liqs[1].color) : liqs[0].color;
    const solid = [A, B].find((x) => !x.liquid)?.solid;
    flask.current?.start(base, r, solid);
    setRx(r ?? 'none');
    if (r) setFound((f) => (f.includes(r.title) ? f : [...f, r.title]));
  };
  const reset = () => { flask.current?.reset(); setSel([]); setRx(null); };

  const panel = (
    <>
      <div className="text-slate-300 text-sm">Досліджено реакцій: {found.length}/{REACTIONS.length}</div>
      <div className="grid grid-cols-3 gap-1">
        {SUBS.map((s) => (
          <button
            key={s.id}
            onClick={() => toggle(s.id)}
            className={`rounded-lg px-1.5 py-1.5 text-left text-xs md:text-sm font-semibold text-white leading-tight active:scale-95 ${sel.includes(s.id) ? 'bg-indigo-500 ring-2 ring-white' : 'bg-slate-700'}`}
          >
            {s.emoji} {s.name}{s.danger ? ' ⚠️' : ''}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2">
        <ActionButton onClick={mix} disabled={sel.length < 2}>⚗️ Змішати</ActionButton>
        <ActionButton onClick={reset} variant="secondary">↺ Нова колба</ActionButton>
      </div>
      {rx && rx !== 'none' && (
        <div className="bg-slate-800/90 rounded-xl p-3 text-white">
          <div className="font-bold text-lg">{rx.title}</div>
          <div className="text-amber-200 text-sm font-mono my-1">{rx.eq}</div>
          <div className="text-sm md:text-base">{rx.text}</div>
        </div>
      )}
      {rx === 'none' && (
        <div className="bg-slate-800/90 rounded-xl p-3 text-white text-sm md:text-base">
          {sel.some((id) => byId(id).liquid) ? 'Помітної реакції немає: речовини просто змішалися. Спробуй іншу пару!' : 'Додай хоча б одну рідину — наприклад, воду чи кислоту.'}
        </div>
      )}
      <div className="text-xs text-amber-200/90 bg-amber-900/30 rounded-lg p-2">⚠️ Це віртуальні досліди. Справжні — лише в шкільній лабораторії, з вчителем, у захисних окулярах.</div>
    </>
  );
  return <LabLayout scene={<Flask ref={flask} />} panel={panel} />;
};
