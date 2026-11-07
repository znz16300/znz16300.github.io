// 🔬 Дослідити: падіння м'яча на Землі й на іншій планеті одночасно + вага й стрибок.
import React, { useRef, useState } from 'react';
import { SimCanvas } from '../shared/SimCanvas';
import { BigSlider } from '../shared/BigSlider';
import { ActionButton, Chip, LabLayout, StatBox, fmt } from '../shared/ui';
import { EARTH, PLANETS, type Planet } from './planets';
import { fallTime, impactSpeed } from './calc';

interface Sim {
  phase: 'idle' | 'falling' | 'done';
  t: number;
  h: number;
  planet: Planet;
}

const JUMP_ON_EARTH_CM = 50; // умовний стрибок учня на Землі

export const GravityLab: React.FC = () => {
  const [planetId, setPlanetId] = useState('moon');
  const [h, setH] = useState(10);
  const [mass, setMass] = useState(45);
  const [phase, setPhase] = useState<Sim['phase']>('idle');
  const planet = PLANETS.find((p) => p.id === planetId) as Planet;

  const sim = useRef<Sim>({ phase: 'idle', t: 0, h, planet });
  sim.current.h = h;
  sim.current.planet = planet;

  const tE = fallTime(h, EARTH.g);
  const tP = fallTime(h, planet.g);

  const drop = () => {
    sim.current.phase = 'falling';
    sim.current.t = 0;
    setPhase('falling');
  };
  const choose = (id: string) => {
    setPlanetId(id);
    sim.current.phase = 'idle';
    sim.current.t = 0;
    setPhase('idle');
  };

  const draw = (ctx: CanvasRenderingContext2D, w: number, hh: number, dt: number) => {
    const s = sim.current;
    const gE = EARTH.g;
    const gP = s.planet.g;
    const tEnd = Math.max(fallTime(s.h, gE), fallTime(s.h, gP));
    if (s.phase === 'falling') {
      s.t += dt;
      if (s.t >= tEnd) {
        s.t = tEnd;
        s.phase = 'done';
        setPhase('done');
      }
    }

    const groundY = hh * 0.88;
    const top = hh * 0.2; // нижче за заголовок
    const scale = (groundY - top) / s.h; // пікселів на метр
    const r = Math.max(10, Math.min(18, w * 0.025));

    const panels: { planet: Planet; g: number; x0: number }[] = [
      { planet: EARTH, g: gE, x0: 0 },
      { planet: s.planet, g: gP, x0: w / 2 },
    ];

    panels.forEach(({ planet: p, g, x0 }) => {
      // небо
      const grad = ctx.createLinearGradient(0, 0, 0, groundY);
      grad.addColorStop(0, p.sky[0]);
      grad.addColorStop(1, p.sky[1]);
      ctx.fillStyle = grad;
      ctx.fillRect(x0, 0, w / 2, groundY);
      ctx.fillStyle = p.ground;
      ctx.fillRect(x0, groundY, w / 2, hh - groundY);

      // лінійка
      ctx.strokeStyle = 'rgba(255,255,255,0.55)';
      ctx.fillStyle = 'rgba(255,255,255,0.85)';
      ctx.lineWidth = 2;
      ctx.font = `${Math.max(11, hh * 0.032)}px system-ui, sans-serif`;
      ctx.textAlign = 'left';
      const stepM = s.h <= 6 ? 1 : s.h <= 12 ? 2 : 5;
      for (let m = 0; m <= s.h + 1e-6; m += stepM) {
        const y = groundY - m * scale;
        ctx.beginPath();
        ctx.moveTo(x0 + 10, y);
        ctx.lineTo(x0 + 28, y);
        ctx.stroke();
        ctx.fillText(`${m} м`, x0 + 34, y + 4);
      }

      // м'яч
      const tt = Math.min(s.t, Math.sqrt((2 * s.h) / g));
      const fallen = 0.5 * g * tt * tt;
      const y = groundY - (s.h - fallen) * scale - r;
      const cx = x0 + w / 4;
      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.arc(cx, y, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.stroke();

      // підписи
      const landed = s.phase !== 'idle' && s.t >= Math.sqrt((2 * s.h) / g) - 1e-6;
      ctx.textAlign = 'center';
      ctx.fillStyle = '#fff';
      ctx.font = `bold ${Math.max(14, hh * 0.05)}px system-ui, sans-serif`;
      ctx.fillText(`${p.emoji} ${p.name}  g = ${fmt(g, 2)} м/с²`, x0 + w / 4, hh * 0.07);
      ctx.font = `${Math.max(13, hh * 0.045)}px system-ui, sans-serif`;
      const shownT = s.phase === 'idle' ? 0 : tt;
      ctx.fillText(
        landed
          ? `Впав за ${fmt(Math.sqrt((2 * s.h) / g), 2)} с, швидкість ${fmt(impactSpeed(s.h, g) * 3.6, 0)} км/год`
          : `t = ${fmt(shownT, 2)} с`,
        x0 + w / 4,
        hh * 0.965
      );
    });

    // розділювач
    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    ctx.fillRect(w / 2 - 1, 0, 2, hh);
  };

  const weightN = mass * planet.g;
  const showKg = weightN / EARTH.g;
  const jump = (JUMP_ON_EARTH_CM * EARTH.g) / planet.g;

  const panel = (
    <>
      <div className="flex flex-wrap gap-2">
        {PLANETS.map((p) => (
          <Chip key={p.id} selected={p.id === planetId} onClick={() => choose(p.id)}>
            {p.emoji} {p.name}
          </Chip>
        ))}
      </div>
      <BigSlider label="Висота падіння" value={h} min={2} max={20} step={1} unit="м" onChange={(v) => { setH(v); sim.current.phase = 'idle'; sim.current.t = 0; setPhase('idle'); }} />
      <ActionButton onClick={drop} disabled={phase === 'falling'}>
        ⬇ Скинути м'яч
      </ActionButton>
      {phase === 'done' && (
        <div className="bg-indigo-900/60 border border-indigo-400/40 rounded-xl p-3 text-white text-base md:text-lg">
          На планеті «{planet.name}» м'яч падає{' '}
          <b>{tP > tE ? `у ${fmt(tP / tE, 1)} раза довше` : `у ${fmt(tE / tP, 1)} раза швидше`}</b>, ніж на Землі.
        </div>
      )}
      <BigSlider label="Твоя маса" value={mass} min={20} max={100} step={1} unit="кг" onChange={setMass} />
      <StatBox label={`Вага на планеті «${planet.name}»`} value={`${fmt(weightN, 0)} Н`} hint={`ваги на Землі показали б ≈ ${fmt(showKg, 0)} кг`} />
      <StatBox label="Твій стрибок (на Землі 50 см)" value={`${fmt(jump, 0)} см`} hint="маса не змінюється, змінюється лише вага" />
    </>
  );

  return <LabLayout scene={<SimCanvas aspect={16 / 10} draw={draw} />} panel={panel} />;
};
