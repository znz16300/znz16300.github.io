// 🎯 Виклик: влучи м'ячем у ціль. У кожному раунді нова планета, а отже - інша гравітація!
import React, { useRef, useState } from 'react';
import { SimCanvas } from '../shared/SimCanvas';
import { BigSlider } from '../shared/BigSlider';
import { ActionButton, LabLayout, StatBox, fmt } from '../shared/ui';
import { useBest } from '../shared/useBest';
import { playBeep, unlockAudio } from '../shared/sound';
import { SoundToggle } from '../shared/SoundToggle';
import { GAME_BODIES, type Planet } from './planets';
import { V_MAX, ballAt, flightTime, maxRange, niceStep, throwRange } from './calc';

const ROUNDS = 5;
const ATTEMPTS = 2;
const POINTS = [100, 60];

type Phase = 'intro' | 'aim' | 'flying' | 'result' | 'end';

interface Round {
  planet: Planet;
  target: number; // м
}

const shuffle = <T,>(a: T[]): T[] => {
  const r = a.slice();
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
};

const makeRounds = (): Round[] =>
  shuffle(GAME_BODIES)
    .slice(0, ROUNDS)
    .map((planet) => ({ planet, target: maxRange(planet.g) * (0.3 + Math.random() * 0.45) }));

const distText = (m: number) => (m < 10 ? `${fmt(m, 1)} м` : `${fmt(m, 0)} м`);

export const ThrowChallenge: React.FC = () => {
  const [best, submitBest] = useBest('gravity-throw');
  const [rounds, setRounds] = useState<Round[]>(makeRounds);
  const [round, setRound] = useState(0);
  const [attempt, setAttempt] = useState(0);
  const [phase, setPhase] = useState<Phase>('intro');
  const [score, setScore] = useState(0);
  const [angle, setAngle] = useState(45);
  const [speed, setSpeed] = useState(15);
  const [msg, setMsg] = useState('');
  const [lastHit, setLastHit] = useState(false);
  const [record, setRecord] = useState(false);

  const cur = rounds[round];
  const S = useRef({
    cur,
    angle,
    speed,
    flying: false,
    ts: 0,
    factor: 1,
    T: 0,
    trail: [] as { x: number; y: number }[],
    lastTrail: [] as { x: number; y: number }[],
  });
  S.current.cur = cur;
  S.current.angle = angle;
  S.current.speed = speed;

  const startGame = () => {
    unlockAudio();
    const r = makeRounds();
    setRounds(r);
    S.current.cur = r[0];
    S.current.lastTrail = [];
    setRound(0);
    setAttempt(0);
    setScore(0);
    setRecord(false);
    setMsg('');
    setPhase('aim');
  };

  const fire = () => {
    const s = S.current;
    s.flying = true;
    s.ts = 0;
    s.T = flightTime(s.speed, s.angle, s.cur.planet.g);
    s.factor = Math.max(1, s.T / 2.8);
    s.trail = [];
    setPhase('flying');
  };

  const land = () => {
    const s = S.current;
    const g = s.cur.planet.g;
    const x = throwRange(s.speed, s.angle, g);
    const tol = maxRange(g) * 1.05 * 0.04;
    const diff = x - s.cur.target;
    const hit = Math.abs(diff) <= tol;
    s.lastTrail = s.trail;
    s.flying = false;
    playBeep(hit);
    setLastHit(hit);
    let pts = 0;
    if (hit) {
      pts = POINTS[attempt] ?? 40;
      setScore((v) => v + pts);
      setMsg(`🎯 Влучив! +${pts} балів`);
    } else {
      setMsg(diff < 0 ? `Недоліт на ${distText(-diff)}. Збільш силу або кут.` : `Переліт на ${distText(diff)}. Зменш силу.`);
    }
    setPhase('result');
    return hit;
  };

  const next = () => {
    if (!lastHit && attempt + 1 < ATTEMPTS) {
      setAttempt(attempt + 1);
      setPhase('aim');
      return;
    }
    if (round + 1 >= ROUNDS) {
      const total = score;
      setRecord(submitBest(total));
      setPhase('end');
      return;
    }
    S.current.lastTrail = [];
    setRound(round + 1);
    setAttempt(0);
    setPhase('aim');
  };

  const draw = (ctx: CanvasRenderingContext2D, w: number, h: number, dt: number) => {
    const s = S.current;
    const p = s.cur.planet;
    const g = p.g;
    const worldW = maxRange(g) * 1.05;
    const ppm = (w * 0.92) / worldW;
    const x0 = w * 0.04;
    const y0 = h * 0.86;

    // небо й земля
    const grad = ctx.createLinearGradient(0, 0, 0, y0);
    grad.addColorStop(0, p.sky[0]);
    grad.addColorStop(1, p.sky[1]);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, y0);
    ctx.fillStyle = p.ground;
    ctx.fillRect(0, y0, w, h - y0);

    // лінійка
    const step = niceStep(worldW * 0.92, 6);
    ctx.fillStyle = '#fff';
    ctx.strokeStyle = 'rgba(255,255,255,0.7)';
    ctx.lineWidth = 2;
    ctx.font = `${Math.max(11, h * 0.034)}px system-ui, sans-serif`;
    ctx.textAlign = 'center';
    for (let m = 0; m * ppm + x0 < w; m += step) {
      const x = x0 + m * ppm;
      ctx.beginPath();
      ctx.moveTo(x, y0);
      ctx.lineTo(x, y0 + h * 0.025);
      ctx.stroke();
      ctx.fillText(`${m < 10 ? fmt(m, 1) : fmt(m, 0)} м`, x, y0 + h * 0.07);
    }

    // ціль
    const tol = worldW * 0.04;
    const tx = x0 + s.cur.target * ppm;
    ctx.fillStyle = 'rgba(250,204,21,0.9)';
    ctx.fillRect(tx - tol * ppm, y0 - 5, tol * 2 * ppm, 9);
    ctx.strokeStyle = '#7f1d1d';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(tx, y0);
    ctx.lineTo(tx, y0 - h * 0.14);
    ctx.stroke();
    ctx.fillStyle = '#dc2626';
    ctx.beginPath();
    ctx.moveTo(tx, y0 - h * 0.14);
    ctx.lineTo(tx + h * 0.08, y0 - h * 0.115);
    ctx.lineTo(tx, y0 - h * 0.09);
    ctx.fill();

    // гармата
    const ang = (s.angle * Math.PI) / 180;
    ctx.save();
    ctx.translate(x0, y0);
    ctx.rotate(-ang);
    ctx.fillStyle = '#334155';
    ctx.fillRect(0, -h * 0.018, h * 0.1, h * 0.036);
    ctx.restore();
    ctx.fillStyle = '#1e293b';
    ctx.beginPath();
    ctx.arc(x0, y0, h * 0.03, Math.PI, 0);
    ctx.fill();

    // слід попереднього пострілу
    if (s.lastTrail.length > 1) {
      ctx.strokeStyle = 'rgba(255,255,255,0.45)';
      ctx.setLineDash([6, 6]);
      ctx.lineWidth = 2;
      ctx.beginPath();
      s.lastTrail.forEach((pt, i) => (i ? ctx.lineTo(x0 + pt.x * ppm, y0 - pt.y * ppm) : ctx.moveTo(x0 + pt.x * ppm, y0 - pt.y * ppm)));
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // політ
    if (s.flying) {
      s.ts = Math.min(s.T, s.ts + dt * s.factor);
      const b = ballAt(s.speed, s.angle, g, s.ts);
      s.trail.push(b);
      if (s.ts >= s.T) {
        land();
      }
    }
    let bx = x0;
    let by = y0;
    if (s.flying || s.trail.length) {
      const last = s.trail[s.trail.length - 1];
      if (last) {
        bx = x0 + last.x * ppm;
        by = y0 - last.y * ppm;
      }
    }
    if (s.flying || s.trail.length) {
      ctx.strokeStyle = 'rgba(255,255,255,0.8)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      s.trail.forEach((pt, i) => (i ? ctx.lineTo(x0 + pt.x * ppm, y0 - pt.y * ppm) : ctx.moveTo(x0 + pt.x * ppm, y0 - pt.y * ppm)));
      ctx.stroke();
      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.arc(bx, by - 8, Math.max(8, h * 0.025), 0, Math.PI * 2);
      ctx.fill();
    }

    // підпис планети
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'left';
    ctx.font = `bold ${Math.max(14, h * 0.055)}px system-ui, sans-serif`;
    ctx.fillText(`${p.emoji} ${p.name}`, 14, h * 0.09);
    ctx.font = `${Math.max(12, h * 0.04)}px system-ui, sans-serif`;
    ctx.fillText(`g = ${fmt(g, 2)} м/с²`, 14, h * 0.15);
    if (s.flying && s.factor > 1.05) {
      ctx.textAlign = 'right';
      ctx.fillText(`⏩ час прискорено ×${fmt(s.factor, 1)}`, w - 14, h * 0.09);
    }
  };

  const panel = (
    <>
      <div className="grid grid-cols-3 gap-2">
        <StatBox label="Раунд" value={`${Math.min(round + 1, ROUNDS)}/${ROUNDS}`} />
        <StatBox label="Бали" value={score} />
        <StatBox label="Рекорд" value={best} />
      </div>
      {phase === 'intro' && (
        <div className="bg-slate-800/80 rounded-xl p-4 text-white text-base md:text-lg flex flex-col gap-3">
          <p>
            Влуч м'ячем у <b>жовту мішень</b>. У кожному раунді нова планета - гравітація інша, тож один і той самий постріл
            летить по-різному! У тебе {ATTEMPTS} спроби на раунд.
          </p>
          <ActionButton onClick={startGame}>▶ Почати</ActionButton>
        </div>
      )}
      {(phase === 'aim' || phase === 'flying') && (
        <>
          <div className="text-white text-base md:text-lg bg-slate-800/80 rounded-xl p-3">
            Ціль на відстані <b>{distText(cur.target)}</b>. Спроба {attempt + 1} з {ATTEMPTS}.
          </div>
          <BigSlider label="Кут пострілу" value={angle} min={10} max={80} step={1} unit="°" disabled={phase === 'flying'} onChange={setAngle} />
          <BigSlider label="Сила (швидкість)" value={speed} min={5} max={V_MAX} step={0.5} unit="м/с" disabled={phase === 'flying'} format={(v) => fmt(v, 1)} onChange={setSpeed} />
          <ActionButton onClick={fire} disabled={phase === 'flying'} variant="warn">
            💥 Вогонь!
          </ActionButton>
        </>
      )}
      {phase === 'result' && (
        <div className="bg-slate-800/80 rounded-xl p-4 text-white text-lg md:text-xl flex flex-col gap-3">
          <p>{msg}</p>
          <ActionButton onClick={next}>{!lastHit && attempt + 1 < ATTEMPTS ? '🔁 Ще спроба' : round + 1 >= ROUNDS ? 'Результат' : 'Наступна планета ▶'}</ActionButton>
        </div>
      )}
      {phase === 'end' && (
        <div className="bg-slate-800/80 rounded-xl p-4 text-white text-lg flex flex-col gap-3">
          <div className="text-3xl font-extrabold">Підсумок: {score} з {ROUNDS * POINTS[0]}</div>
          {record && <div className="text-yellow-300 font-bold">🏆 Новий рекорд!</div>}
          <p className="text-slate-300">
            Секрет: на планеті з малою гравітацією м'яч летить далеко - потрібна менша сила, а там, де гравітація велика, - більша.
          </p>
          <ActionButton onClick={startGame}>🔁 Ще раз</ActionButton>
        </div>
      )}
      <SoundToggle />
    </>
  );

  return <LabLayout scene={<SimCanvas aspect={16 / 10} draw={draw} />} panel={panel} />;
};
