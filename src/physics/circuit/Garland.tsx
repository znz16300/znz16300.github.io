// 🎯 Гірлянда: усі лампи гірлянди (з'єднані послідовно) не світяться. Знайди перегорілу, замінюючи лампи по одній.
import React, { useRef, useState } from 'react';
import { SimCanvas } from '../shared/SimCanvas';
import { canvasPoint } from '../shared/canvasPointer';
import { ActionButton, LabLayout, StatBox } from '../shared/ui';
import { SoundToggle } from '../shared/SoundToggle';
import { useBest } from '../shared/useBest';
import { playBeep, unlockAudio } from '../shared/sound';
import { drawBulb } from './bulb';

const ROUNDS = 3;
const makeRound = () => {
  const n = 6 + Math.floor(Math.random() * 5);
  return { n, bad: Math.floor(Math.random() * n) };
};

export const Garland: React.FC = () => {
  const [best, submit] = useBest('circuit-garland');
  const [round, setRound] = useState(0);
  const [cfg, setCfg] = useState(makeRound);
  const [tested, setTested] = useState<number[]>([]);
  const [found, setFound] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [record, setRecord] = useState(false);

  const st = useRef({ cfg, tested, found, hits: [] as { x: number; y: number; r: number }[], t: 0 });
  st.current.cfg = cfg;
  st.current.tested = tested;
  st.current.found = found;

  const onDown = (e: React.PointerEvent) => {
    const p = canvasPoint(e);
    if (!p || found) return;
    const i = st.current.hits.findIndex((b) => Math.hypot(p.x - b.x, p.y - b.y) < b.r * 1.7);
    if (i < 0 || tested.includes(i)) return;
    unlockAudio();
    if (i === cfg.bad) {
      setFound(true);
      playBeep(true);
      setScore((s) => s + Math.max(20, 100 - tested.length * 20));
    } else {
      setTested([...tested, i]);
      playBeep(false);
    }
  };

  const next = () => {
    if (round + 1 >= ROUNDS) {
      setDone(true);
      setRecord(submit(score));
    } else {
      setRound(round + 1);
      setCfg(makeRound());
      setTested([]);
      setFound(false);
    }
  };
  const restart = () => {
    setRound(0);
    setCfg(makeRound());
    setTested([]);
    setFound(false);
    setScore(0);
    setDone(false);
    setRecord(false);
  };

  const draw = (ctx: CanvasRenderingContext2D, w: number, h: number, dt: number) => {
    const s = st.current;
    s.t += dt;
    ctx.fillStyle = '#0b1220';
    ctx.fillRect(0, 0, w, h);
    const { n, } = s.cfg;
    const R = Math.min(w / (n * 2.6), h * 0.09);
    const cols = Math.min(n, 5);
    const rows = Math.ceil(n / cols);
    s.hits = [];
    // дріт-гірлянда: зигзаг
    ctx.strokeStyle = '#166534';
    ctx.lineWidth = 4;
    ctx.beginPath();
    const pts: { x: number; y: number }[] = [];
    for (let i = 0; i < n; i++) {
      const r = Math.floor(i / cols);
      const c0 = i % cols;
      const c = r % 2 ? cols - 1 - c0 : c0;
      const x = w * (0.12 + (0.76 * c) / Math.max(1, cols - 1));
      const y = h * (0.22 + (0.55 * r) / Math.max(1, rows - 1 || 1)) + Math.sin(c * 1.5 + r) * 6;
      pts.push({ x, y });
    }
    ctx.moveTo(w * 0.02, pts[0].y);
    pts.forEach((p) => ctx.lineTo(p.x, p.y - R * 0.9));
    ctx.stroke();
    pts.forEach((p, i) => {
      const isBad = i === s.cfg.bad;
      const lit = s.found;
      const bulbBroken = isBad && !s.found;
      drawBulb(ctx, p.x, p.y, R, lit ? 0.9 : 0, bulbBroken, false);
      if (s.tested.includes(i)) {
        ctx.fillStyle = '#4ade80';
        ctx.font = `bold ${R}px system-ui, sans-serif`;
        ctx.textAlign = 'center';
        ctx.fillText('✔', p.x, p.y + R * 2.4);
      }
      s.hits.push({ x: p.x, y: p.y, r: R });
    });
    ctx.fillStyle = s.found ? '#4ade80' : '#cbd5e1';
    ctx.font = `bold ${Math.max(14, h * 0.05)}px system-ui, sans-serif`;
    ctx.textAlign = 'center';
    ctx.fillText(s.found ? 'Гірлянда світиться! 🎄' : 'Гірлянда не світиться…', w / 2, h * 0.09);
  };

  const panel = done ? (
    <div className="bg-slate-800/90 rounded-xl p-4 text-white text-center">
      <div className="text-5xl">{record ? '🏆' : '🎄'}</div>
      <div className="text-2xl font-bold">Бали: {score}</div>
      <div className="text-slate-300 mb-3">{record ? 'Новий рекорд!' : `Рекорд: ${best}`}</div>
      <ActionButton onClick={restart}>🔁 Ще раз</ActionButton>
    </div>
  ) : (
    <>
      <div className="grid grid-cols-3 gap-2">
        <StatBox label="Гірлянда" value={`${round + 1}/${ROUNDS}`} />
        <StatBox label="Спроб" value={tested.length + (found ? 1 : 0)} />
        <StatBox label="Бали" value={score} />
      </div>
      <div className="bg-slate-800/80 rounded-xl p-3 text-white text-base">
        Одна лампочка перегоріла, тому не світиться вся гірлянда. Торкайся лампочок — так ти замінюєш їх на нову. Знайди перегорілу <b>за якомога менше спроб</b>!
      </div>
      {found && (
        <div className="bg-green-900/60 border border-green-400/50 rounded-xl p-3 text-white">
          <div className="text-xl font-bold mb-2">🎉 Знайшов(-ла)! Гірлянда світиться.</div>
          <ActionButton onClick={next}>{round + 1 >= ROUNDS ? 'Результат' : 'Наступна гірлянда ▶'}</ActionButton>
        </div>
      )}
      <div className="bg-amber-900/40 border border-amber-400/40 rounded-xl p-3 text-amber-100 text-base">
        💡 Так було в старих гірляндах із послідовним з&apos;єднанням. Сучасні мають шунти й паралельні гілки.
      </div>
      <SoundToggle />
    </>
  );

  return <LabLayout scene={<div className="w-full h-full" onPointerDown={onDown}><SimCanvas aspect={16 / 10} draw={draw} /></div>} panel={panel} />;
};
