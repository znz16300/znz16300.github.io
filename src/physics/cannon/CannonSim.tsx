// Полотно гармати: козацька гармата на лівому березі Дніпра стріляє на правий берег.
// mode 'lab' - вільні постріли з «слідами» попередніх; mode 'game' - 10 цілей, рахуємо постріли.
import React, { useRef, useState } from 'react';
import { SimCanvas } from '../shared/SimCanvas';
import { BigSlider } from '../shared/BigSlider';
import { ActionButton, LabLayout, StatBox, fmt } from '../shared/ui';
import { SoundToggle } from '../shared/SoundToggle';
import { useBest } from '../shared/useBest';
import { playBeep, unlockAudio } from '../shared/sound';
import { V_MAX, V_MIN, flightTime, maxHeight, pos, range } from './calc';

const W = 140; // ширина сцени, м
const GUN_X = 6;
const BANK_L = 25; // кінець лівого берега
const BANK_R = 95; // початок правого берега
const TARGETS = 10;
const HIT_R = 3.5;

interface Shot {
  v: number;
  a: number;
  t: number;
  trail: { x: number; y: number }[];
  done: boolean;
  landX: number;
}

const randTarget = () => Math.round(98 + Math.random() * 22);

export const CannonSim: React.FC<{ mode: 'lab' | 'game' }> = ({ mode }) => {
  const game = mode === 'game';
  const [angle, setAngle] = useState(45);
  const [power, setPower] = useState(28);
  const [flying, setFlying] = useState(false);
  const [target, setTarget] = useState(110);
  const [shots, setShots] = useState(0);
  const [hits, setHits] = useState(0);
  const [msg, setMsg] = useState('');
  const [over, setOver] = useState(false);
  const [record, setRecord] = useState(false);
  const [best, submitBest] = useBest('cannon-game');
  const [lastLand, setLastLand] = useState<number | null>(null);

  const sim = useRef({
    angle, power, target,
    current: null as Shot | null,
    old: [] as Shot[],
    boom: 0,
    splash: null as { x: number; t: number } | null,
    hit: false,
  });
  sim.current.angle = angle;
  sim.current.power = power;
  sim.current.target = target;

  const fire = () => {
    unlockAudio();
    const s = sim.current;
    if (s.current && !s.current.done) return;
    if (s.current) s.old = [s.current, ...s.old].slice(0, 5);
    s.current = { v: power, a: angle, t: 0, trail: [], done: false, landX: 0 };
    s.boom = 1;
    s.splash = null;
    s.hit = false;
    setFlying(true);
    setMsg('');
    setShots((n) => n + 1);
  };

  const land = (x: number) => {
    const s = sim.current;
    const hit = Math.abs(x - s.target) <= HIT_R;
    s.hit = hit;
    setLastLand(x);
    setFlying(false);
    playBeep(hit);
    if (hit) setHits((h) => h + 1);
    if (game) {
      if (hit) setMsg('🎯 Влучно!');
      else setMsg(x < s.target ? 'Недоліт! Збільш силу або кут.' : 'Переліт! Зменш силу.');
    } else {
      setMsg(hit ? '🎯 У ціль!' : `Приземлився на відстані ${fmt(x - GUN_X, 0)} м від гармати`);
    }
  };

  const nextTarget = () => {
    const newHits = hits;
    if (newHits >= TARGETS) {
      setOver(true);
      setRecord(submitBest(Math.max(0, 100 - shots)));
      return;
    }
    setTarget(randTarget());
    sim.current.old = [];
    sim.current.current = null;
    setMsg('');
    setLastLand(null);
  };

  const restart = () => {
    setShots(0);
    setHits(0);
    setOver(false);
    setTarget(randTarget());
    sim.current.old = [];
    sim.current.current = null;
    setMsg('');
    setRecord(false);
    setLastLand(null);
  };

  const draw = (ctx: CanvasRenderingContext2D, w: number, h: number, dt: number) => {
    const s = sim.current;
    const sc = w / W;
    const gy = h * 0.86;
    const X = (x: number) => x * sc;
    const Y = (y: number) => gy - y * sc;

    // небо
    const sky = ctx.createLinearGradient(0, 0, 0, h);
    sky.addColorStop(0, '#7dd3fc');
    sky.addColorStop(1, '#e0f2fe');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, w, h);
    // сонце
    ctx.fillStyle = '#fde047';
    ctx.beginPath();
    ctx.arc(w * 0.9, h * 0.14, h * 0.07, 0, Math.PI * 2);
    ctx.fill();
    // вода (Дніпро)
    ctx.fillStyle = '#2563eb';
    ctx.fillRect(X(BANK_L), gy, X(BANK_R - BANK_L), h - gy);
    ctx.strokeStyle = 'rgba(255,255,255,0.5)';
    ctx.lineWidth = 2;
    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      for (let x = BANK_L + 2; x < BANK_R - 2; x += 4) {
        const yy = gy + (i + 1) * h * 0.035 + Math.sin(x * 0.7 + performance.now() / 500 + i) * 2;
        if (x === BANK_L + 2) ctx.moveTo(X(x), yy);
        else ctx.lineTo(X(x), yy);
      }
      ctx.stroke();
    }
    // береги
    ctx.fillStyle = '#65a30d';
    ctx.fillRect(0, gy, X(BANK_L), h - gy);
    ctx.fillRect(X(BANK_R), gy, w - X(BANK_R), h - gy);
    ctx.fillStyle = '#854d0e';
    ctx.fillRect(0, gy + 6, X(BANK_L), h - gy);
    ctx.fillRect(X(BANK_R), gy + 6, w - X(BANK_R), h - gy);
    // підпис
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.max(12, h * 0.045)}px system-ui, sans-serif`;
    ctx.textAlign = 'center';
    ctx.fillText('Дніпро', X((BANK_L + BANK_R) / 2), gy + h * 0.1);

    // шкала відстаней
    ctx.fillStyle = 'rgba(15,23,42,0.7)';
    ctx.font = `${Math.max(10, h * 0.035)}px system-ui, sans-serif`;
    for (let d = 20; d <= 120; d += 20) {
      const x = GUN_X + d;
      ctx.fillRect(X(x) - 1, gy - 6, 2, 6);
      ctx.fillText(`${d} м`, X(x), gy - 10);
    }

    // ціль - шатро з прапором
    const tx = X(s.target);
    ctx.fillStyle = '#dc2626';
    ctx.beginPath();
    ctx.moveTo(tx - sc * 3, gy);
    ctx.lineTo(tx, gy - sc * 5);
    ctx.lineTo(tx + sc * 3, gy);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(tx, gy - sc * 5);
    ctx.lineTo(tx, gy - sc * 8);
    ctx.stroke();
    ctx.fillStyle = '#facc15';
    ctx.fillRect(tx, gy - sc * 8, sc * 3, sc * 1.6);
    // зона влучення
    ctx.strokeStyle = 'rgba(220,38,38,0.6)';
    ctx.setLineDash([4, 4]);
    ctx.strokeRect(X(s.target - HIT_R), gy - 4, X(HIT_R * 2), 4);
    ctx.setLineDash([]);

    // гармата
    const gx = X(GUN_X);
    const gyy = gy - sc * 1.2;
    ctx.fillStyle = '#78350f';
    ctx.beginPath();
    ctx.arc(gx, gyy, sc * 1.6, 0, Math.PI * 2);
    ctx.fill();
    ctx.save();
    ctx.translate(gx, gyy);
    ctx.rotate(-(s.angle * Math.PI) / 180);
    ctx.fillStyle = '#334155';
    ctx.fillRect(-sc * 0.6, -sc * 0.8, sc * 4.5, sc * 1.6);
    ctx.restore();
    // дим пострілу
    if (s.boom > 0) {
      ctx.fillStyle = `rgba(255,255,255,${s.boom})`;
      ctx.beginPath();
      ctx.arc(gx + Math.cos((s.angle * Math.PI) / 180) * sc * 5, gyy - Math.sin((s.angle * Math.PI) / 180) * sc * 5, sc * (3 + (1 - s.boom) * 3), 0, Math.PI * 2);
      ctx.fill();
      s.boom = Math.max(0, s.boom - dt * 2);
    }

    // сліди попередніх пострілів
    s.old.forEach((o, i) => {
      ctx.strokeStyle = `rgba(30,41,59,${0.35 - i * 0.05})`;
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      o.trail.forEach((p, k) => (k ? ctx.lineTo(X(p.x), Y(p.y)) : ctx.moveTo(X(p.x), Y(p.y))));
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = 'rgba(30,41,59,0.6)';
      ctx.font = `${Math.max(10, h * 0.035)}px system-ui, sans-serif`;
      ctx.fillText(`${Math.round(o.a)}°`, X(o.landX), gy - sc * 2 - i * 3);
    });

    // снаряд
    const c = s.current;
    if (c) {
      if (!c.done) {
        c.t += dt * 2; // прискорений показ
        const T = flightTime(c.v, c.a);
        const t = Math.min(c.t, T);
        const p = pos(c.v, c.a, t);
        c.trail.push({ x: GUN_X + p.x, y: 1.2 + p.y });
        if (c.t >= T) {
          c.done = true;
          c.landX = GUN_X + range(c.v, c.a);
          if (c.landX > BANK_L && c.landX < BANK_R) s.splash = { x: c.landX, t: 1 };
          land(c.landX);
        }
      }
      ctx.strokeStyle = '#1e293b';
      ctx.lineWidth = 3;
      ctx.beginPath();
      c.trail.forEach((p, k) => (k ? ctx.lineTo(X(p.x), Y(p.y)) : ctx.moveTo(X(p.x), Y(p.y))));
      ctx.stroke();
      const last = c.trail[c.trail.length - 1];
      if (last && !c.done) {
        ctx.fillStyle = '#0f172a';
        ctx.beginPath();
        ctx.arc(X(last.x), Y(last.y), sc * 0.9, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    if (s.splash) {
      ctx.strokeStyle = `rgba(255,255,255,${s.splash.t})`;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(X(s.splash.x), gy, sc * (1 + (1 - s.splash.t) * 4), 0, Math.PI * 2);
      ctx.stroke();
      s.splash.t -= dt;
      if (s.splash.t <= 0) s.splash = null;
    }
    if (s.hit && c?.done) {
      ctx.font = `bold ${h * 0.12}px system-ui, sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillText('💥', X(s.target), gy - sc * 4);
    }
  };

  const cur = sim.current.current;
  const theoRange = range(power, angle);
  const panel = (
    <>
      {game && (
        <div className="grid grid-cols-3 gap-2">
          <StatBox label="Цілі" value={`${hits}/${TARGETS}`} />
          <StatBox label="Постріли" value={shots} />
          <StatBox label="Рекорд" value={best ? `${100 - best}` : '—'} hint="мін. пострілів" />
        </div>
      )}
      <BigSlider label="Кут стрільби" value={angle} min={5} max={85} step={1} unit="°" disabled={flying} onChange={setAngle} />
      <BigSlider label="Сила пострілу (швидкість)" value={power} min={V_MIN} max={V_MAX} step={1} unit="м/с" disabled={flying} onChange={setPower} />
      <ActionButton onClick={fire} disabled={flying || over} variant="warn">
        💥 Вогонь!
      </ActionButton>
      {msg && <div className="bg-slate-800/90 rounded-xl p-3 text-white text-lg font-semibold">{msg}</div>}
      {game && hits > 0 && !flying && msg.startsWith('🎯') && !over && hits < TARGETS && (
        <ActionButton onClick={nextTarget}>Наступна ціль ▶</ActionButton>
      )}
      {game && hits >= TARGETS && !over && !flying && <ActionButton onClick={nextTarget}>Результат</ActionButton>}
      {game && over && (
        <div className="bg-slate-800/90 rounded-xl p-4 text-white text-center">
          <div className="text-4xl">{record ? '🏆' : '🎉'}</div>
          <div className="text-xl font-bold">Усі цілі вражено за {shots} пострілів!</div>
          <div className="text-slate-300 mb-2">{record ? 'Новий рекорд!' : `Рекорд: ${100 - best} пострілів`}</div>
          <ActionButton onClick={restart}>🔁 Ще раз</ActionButton>
        </div>
      )}
      {!game && (
        <div className="bg-slate-800/80 rounded-xl p-3 text-white text-base md:text-lg">
          <div className="font-bold mb-1">Що виходить</div>
          <div>Дальність: <b>{fmt(theoRange, 0)} м</b></div>
          <div>Найвища точка: <b>{fmt(maxHeight(power, angle), 0)} м</b></div>
          <div>Час польоту: <b>{fmt(flightTime(power, angle), 1)} с</b></div>
          <div className="text-slate-400 mt-1 text-sm">{cur ? `Останній приліт: ${fmt((lastLand ?? 0) - GUN_X, 0)} м` : 'Зроби перший постріл.'}</div>
        </div>
      )}
      {!game && (
        <div className="bg-amber-900/40 border border-amber-400/40 rounded-xl p-3 text-amber-100 text-base">
          💡 Спробуй <b>45°</b>, потім <b>30°</b> і <b>60°</b> із тією самою силою: 30° і 60° падають в одну точку, а 45° — найдалі!
        </div>
      )}
      <SoundToggle />
    </>
  );

  return <LabLayout scene={<SimCanvas aspect={2} draw={draw} />} panel={panel} />;
};
