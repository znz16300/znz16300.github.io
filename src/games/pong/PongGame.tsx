// Pong: гравці ліворуч і праворуч. Режими: проти комп'ютера / двоє гравців.
// Керування:
//   дотик/миша - потягнути палець по своїй половині екрана (у режимі з комп'ютером - будь-де);
//   клавіатура - W/S (лівий), ↑/↓ (правий; у режимі з комп'ютером ↑/↓ теж керують лівим); Пробіл - пауза.
import React, { useEffect, useRef, useState } from 'react';
import { useFitBox, getDpr } from '../shared/useFitBox';
import { useGameLoop } from '../shared/useGameLoop';
import { GameOverlay, GameButton, GameChip } from '../shared/GameOverlay';

const W = 800;
const H = 500;
const PADDLE_W = 14;
const PADDLE_H = 96;
const PADDLE_X = 22;
const BALL_R = 9;
const WIN_SCORE = 7;
const BALL_START = 380;
const BALL_MAX = 900;
const BALL_STEP = 28;
const KEY_SPEED = 480;
const SERVE_DELAY = 0.9;

type Phase = 'menu' | 'playing' | 'paused' | 'over';
type Mode = 'cpu' | 'pvp';
type Level = 'easy' | 'medium' | 'hard';
type Side = 'left' | 'right';

const LEVELS: Record<Level, { label: string; speed: number; error: number }> = {
  easy: { label: 'Легко', speed: 250, error: 70 },
  medium: { label: 'Середньо', speed: 360, error: 35 },
  hard: { label: 'Складно', speed: 520, error: 12 },
};

interface State {
  ly: number;
  ry: number;
  bx: number;
  by: number;
  vx: number;
  vy: number;
  speed: number;
  ls: number;
  rs: number;
  serve: number;
  aim: number;
}

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

const initialState = (): State => ({
  ly: (H - PADDLE_H) / 2,
  ry: (H - PADDLE_H) / 2,
  bx: W / 2,
  by: H / 2,
  vx: 0,
  vy: 0,
  speed: BALL_START,
  ls: 0,
  rs: 0,
  serve: SERVE_DELAY,
  aim: 0,
});

// dir: -1 - м'яч летить до лівого гравця, +1 - до правого
const serve = (s: State, dir: number, aimError: number) => {
  const angle = (Math.random() * 2 - 1) * 0.35;
  s.bx = W / 2;
  s.by = H / 2;
  s.speed = BALL_START;
  s.vx = Math.cos(angle) * s.speed * dir;
  s.vy = Math.sin(angle) * s.speed;
  s.serve = SERVE_DELAY;
  s.aim = (Math.random() * 2 - 1) * aimError;
};

const PongGame: React.FC = () => {
  const [boxRef, size] = useFitBox(W / H);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [phase, setPhaseState] = useState<Phase>('menu');
  const [mode, setMode] = useState<Mode>('cpu');
  const [level, setLevel] = useState<Level>('medium');
  const [winner, setWinner] = useState<Side | null>(null);

  const phaseRef = useRef<Phase>('menu');
  const modeRef = useRef<Mode>(mode);
  const levelRef = useRef<Level>(level);
  modeRef.current = mode;
  levelRef.current = level;

  const g = useRef<State>(initialState());
  const keys = useRef<Set<string>>(new Set());
  const touches = useRef<Map<number, Side>>(new Map());

  const setPhase = (p: Phase) => {
    phaseRef.current = p;
    setPhaseState(p);
  };

  const startGame = () => {
    g.current = initialState();
    serve(g.current, Math.random() < 0.5 ? -1 : 1, LEVELS[levelRef.current].error);
    setWinner(null);
    setPhase('playing');
  };

  // ---------- Клавіатура ----------
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (['ArrowUp', 'ArrowDown', 'Space'].includes(e.code)) e.preventDefault();
      keys.current.add(e.code);
      if (e.code === 'Space' || e.code === 'KeyP') {
        if (phaseRef.current === 'playing') setPhase('paused');
        else if (phaseRef.current === 'paused') setPhase('playing');
      }
    };
    const up = (e: KeyboardEvent) => keys.current.delete(e.code);
    window.addEventListener('keydown', down);
    window.addEventListener('keyup', up);
    return () => {
      window.removeEventListener('keydown', down);
      window.removeEventListener('keyup', up);
    };
  }, []);

  // ---------- Дотик / миша ----------
  const handlePointer = (e: React.PointerEvent<HTMLCanvasElement>, isDown: boolean) => {
    const c = canvasRef.current;
    if (!c) return;
    const r = c.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * W;
    const y = ((e.clientY - r.top) / r.height) * H;
    let side = touches.current.get(e.pointerId);
    if (isDown) {
      side = modeRef.current === 'cpu' ? 'left' : x < W / 2 ? 'left' : 'right';
      touches.current.set(e.pointerId, side);
      c.setPointerCapture(e.pointerId);
    }
    if (!side) return;
    const py = clamp(y - PADDLE_H / 2, 0, H - PADDLE_H);
    if (side === 'left') g.current.ly = py;
    else g.current.ry = py;
  };

  // ---------- Оновлення ----------
  const update = (dt: number) => {
    const s = g.current;
    const k = keys.current;
    const cpu = modeRef.current === 'cpu';
    const cfg = LEVELS[levelRef.current];

    const lDir =
      (k.has('KeyW') || (cpu && k.has('ArrowUp')) ? -1 : 0) + (k.has('KeyS') || (cpu && k.has('ArrowDown')) ? 1 : 0);
    s.ly = clamp(s.ly + lDir * KEY_SPEED * dt, 0, H - PADDLE_H);

    if (cpu) {
      const target = s.vx > 0 && s.serve <= 0 ? s.by + s.aim : H / 2;
      const diff = target - (s.ry + PADDLE_H / 2);
      const step = cfg.speed * dt;
      if (Math.abs(diff) > 6) s.ry += clamp(diff, -step, step);
      s.ry = clamp(s.ry, 0, H - PADDLE_H);
    } else {
      const rDir = (k.has('ArrowUp') ? -1 : 0) + (k.has('ArrowDown') ? 1 : 0);
      s.ry = clamp(s.ry + rDir * KEY_SPEED * dt, 0, H - PADDLE_H);
    }

    if (s.serve > 0) {
      s.serve -= dt;
      return;
    }

    s.bx += s.vx * dt;
    s.by += s.vy * dt;

    if (s.by < BALL_R) {
      s.by = BALL_R;
      s.vy = Math.abs(s.vy);
    } else if (s.by > H - BALL_R) {
      s.by = H - BALL_R;
      s.vy = -Math.abs(s.vy);
    }

    // лівий гравець
    if (
      s.vx < 0 &&
      s.bx - BALL_R <= PADDLE_X + PADDLE_W &&
      s.bx + BALL_R >= PADDLE_X &&
      s.by + BALL_R >= s.ly &&
      s.by - BALL_R <= s.ly + PADDLE_H
    ) {
      const rel = clamp((s.by - (s.ly + PADDLE_H / 2)) / (PADDLE_H / 2), -1, 1);
      const angle = rel * 0.9;
      s.speed = Math.min(BALL_MAX, s.speed + BALL_STEP);
      s.vx = Math.cos(angle) * s.speed;
      s.vy = Math.sin(angle) * s.speed;
      s.bx = PADDLE_X + PADDLE_W + BALL_R;
      s.aim = (Math.random() * 2 - 1) * cfg.error;
    }
    // правий гравець
    const rx = W - PADDLE_X - PADDLE_W;
    if (
      s.vx > 0 &&
      s.bx + BALL_R >= rx &&
      s.bx - BALL_R <= W - PADDLE_X &&
      s.by + BALL_R >= s.ry &&
      s.by - BALL_R <= s.ry + PADDLE_H
    ) {
      const rel = clamp((s.by - (s.ry + PADDLE_H / 2)) / (PADDLE_H / 2), -1, 1);
      const angle = rel * 0.9;
      s.speed = Math.min(BALL_MAX, s.speed + BALL_STEP);
      s.vx = -Math.cos(angle) * s.speed;
      s.vy = Math.sin(angle) * s.speed;
      s.bx = rx - BALL_R;
    }

    // гол
    if (s.bx < -BALL_R * 2) {
      s.rs += 1;
      if (s.rs >= WIN_SCORE) {
        setWinner('right');
        setPhase('over');
      } else serve(s, -1, cfg.error);
    } else if (s.bx > W + BALL_R * 2) {
      s.ls += 1;
      if (s.ls >= WIN_SCORE) {
        setWinner('left');
        setPhase('over');
      } else serve(s, 1, cfg.error);
    }
  };

  const draw = () => {
    const c = canvasRef.current;
    if (!c || c.width === 0) return;
    const ctx = c.getContext('2d');
    if (!ctx) return;
    const s = g.current;
    const k = c.width / W;
    ctx.setTransform(k, 0, 0, k, 0, 0);

    ctx.fillStyle = '#0b1220';
    ctx.fillRect(0, 0, W, H);
    ctx.strokeStyle = 'rgba(255,255,255,0.12)';
    ctx.lineWidth = 4;
    ctx.setLineDash([14, 14]);
    ctx.beginPath();
    ctx.moveTo(W / 2, 0);
    ctx.lineTo(W / 2, H);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = 'rgba(255,255,255,0.35)';
    ctx.font = 'bold 72px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(String(s.ls), W / 4, 90);
    ctx.fillText(String(s.rs), (W * 3) / 4, 90);

    ctx.font = 'bold 18px sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.45)';
    ctx.fillText(modeRef.current === 'cpu' ? 'Ви' : 'Гравець 1', W / 4, H - 14);
    ctx.fillText(modeRef.current === 'cpu' ? "Комп'ютер" : 'Гравець 2', (W * 3) / 4, H - 14);

    ctx.fillStyle = '#60a5fa';
    ctx.fillRect(PADDLE_X, s.ly, PADDLE_W, PADDLE_H);
    ctx.fillStyle = '#f472b6';
    ctx.fillRect(W - PADDLE_X - PADDLE_W, s.ry, PADDLE_W, PADDLE_H);

    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(s.bx, s.by, BALL_R, 0, Math.PI * 2);
    ctx.fill();
  };

  useGameLoop((dt) => {
    if (phaseRef.current === 'playing') update(dt);
    draw();
  });

  const dpr = getDpr();
  const names = {
    left: mode === 'cpu' ? 'Ви' : 'Гравець 1',
    right: mode === 'cpu' ? "Комп'ютер" : 'Гравець 2',
  };

  return (
    <div className="relative w-full h-full p-3">
      <div ref={boxRef} className="w-full h-full flex items-center justify-center">
        {size.w > 0 && (
          <canvas
            ref={canvasRef}
            width={size.w * dpr}
            height={size.h * dpr}
            style={{ width: size.w, height: size.h, touchAction: 'none' }}
            className="rounded-2xl shadow-2xl border border-white/10"
            onPointerDown={(e) => handlePointer(e, true)}
            onPointerMove={(e) => handlePointer(e, false)}
            onPointerUp={(e) => touches.current.delete(e.pointerId)}
            onPointerCancel={(e) => touches.current.delete(e.pointerId)}
          />
        )}
      </div>

      {phase === 'playing' && (
        <button
          onClick={() => setPhase('paused')}
          className="absolute top-5 left-1/2 -translate-x-1/2 z-20 w-12 h-12 rounded-full bg-black/40 hover:bg-black/60 text-white text-xl"
          aria-label="Пауза"
        >
          ⏸
        </button>
      )}

      {phase === 'menu' && (
        <GameOverlay title="🏓 Pong">
          <p className="text-slate-300">Гравці ліворуч і праворуч. Перемагає той, хто першим набере {WIN_SCORE} очок.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <GameChip selected={mode === 'cpu'} onClick={() => setMode('cpu')}>
              🤖 Проти комп'ютера
            </GameChip>
            <GameChip selected={mode === 'pvp'} onClick={() => setMode('pvp')}>
              👥 Двоє гравців
            </GameChip>
          </div>
          {mode === 'cpu' && (
            <div className="flex gap-3 justify-center flex-wrap">
              {(Object.keys(LEVELS) as Level[]).map((l) => (
                <GameChip key={l} selected={level === l} onClick={() => setLevel(l)}>
                  {LEVELS[l].label}
                </GameChip>
              ))}
            </div>
          )}
          <p className="text-sm text-slate-400">
            {mode === 'cpu'
              ? 'Ведіть пальцем вгору-вниз по екрану (або W/S, ↑/↓).'
              : 'Кожен гравець веде пальцем по своїй половині екрана (або W/S та ↑/↓).'}
          </p>
          <GameButton onClick={startGame}>▶ Грати</GameButton>
        </GameOverlay>
      )}

      {phase === 'paused' && (
        <GameOverlay title="Пауза">
          <GameButton onClick={() => setPhase('playing')}>▶ Продовжити</GameButton>
          <GameButton variant="secondary" onClick={() => setPhase('menu')}>
            Вийти в меню гри
          </GameButton>
        </GameOverlay>
      )}

      {phase === 'over' && winner && (
        <GameOverlay title={`🏆 Перемагає: ${names[winner]}`}>
          <p className="text-3xl font-bold">
            {g.current.ls} : {g.current.rs}
          </p>
          <GameButton onClick={startGame}>🔁 Ще раз</GameButton>
          <GameButton variant="secondary" onClick={() => setPhase('menu')}>
            Змінити режим
          </GameButton>
        </GameOverlay>
      )}
    </div>
  );
};

export default PongGame;
