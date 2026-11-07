// 🔬 Дослідити: обери предмет і рідину та кинь. Густина вирішує все.
import React, { useState } from 'react';
import { ActionButton, Chip, LabLayout } from '../shared/ui';
import { LIQUIDS, THINGS, floats } from './things';
import { TankSim } from './TankSim';

export const BuoyLab: React.FC = () => {
  const [ti, setTi] = useState(4);
  const [li, setLi] = useState(1);
  const [drop, setDrop] = useState(0);
  const t = THINGS[ti];
  const l = LIQUIDS[li];

  const panel = (
    <>
      <div className="text-slate-300 text-sm">Предмет:</div>
      <div className="flex flex-wrap gap-2">
        {THINGS.map((x, i) => (
          <Chip key={x.id} selected={i === ti} onClick={() => { setTi(i); setDrop(0); }}>
            {x.emoji} {x.name}
          </Chip>
        ))}
      </div>
      <div className="text-slate-300 text-sm">Рідина:</div>
      <div className="flex flex-wrap gap-2">
        {LIQUIDS.map((x, i) => (
          <Chip key={x.id} selected={i === li} onClick={() => { setLi(i); setDrop(0); }}>
            {x.name}
          </Chip>
        ))}
      </div>
      <ActionButton onClick={() => setDrop((d) => d + 1)} variant="warn">
        ⬇ Кинути
      </ActionButton>
      <div className="bg-slate-800/80 rounded-xl p-3 text-white text-base md:text-lg">
        <div>Густина предмета: <b>{t.density}</b> кг/м³</div>
        <div>Густина рідини: <b>{l.density}</b> кг/м³</div>
        <div className="mt-1 text-indigo-200">
          {t.density < l.density ? `${t.density} < ${l.density} → плаває` : `${t.density} > ${l.density} → тоне`}
          {floats(t, l) && <span className="text-slate-300"> (над водою ≈ {Math.round((1 - t.density / l.density) * 100)}% об'єму)</span>}
        </div>
      </div>
      <div className="bg-amber-900/40 border border-amber-400/40 rounded-xl p-3 text-amber-100 text-base">
        💡 Спробуй <b>яйце</b>: у воді тоне, а в солоному розчині плаває. А сталевий <b>корабель</b> плаває, бо всередині він порожнистий!
      </div>
    </>
  );
  return <LabLayout scene={<TankSim thing={t} liquid={l} dropKey={drop} showDensity />} panel={panel} />;
};
