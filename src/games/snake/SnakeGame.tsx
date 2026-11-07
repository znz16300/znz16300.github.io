// Змійка. Керування:
//   свайп по полю, екранні стрілки, клавіатура (стрілки / WASD), Пробіл - пауза.
import React, { useEffect, useRef, useState } from 'react';
import { useFitBox, getDpr } from '../shared/useFitBox';
import { useGameLoop } from '../shared/useGameLoop';
import { useHighScore } from '../shared/useHighScore';
import { GameLayout } from '../shared/GameLayout';
import { GameOverlay, GameButton } from '../shared/GameOverlay';
import { HoldButton } from '../shared/HoldButton';

const N = 20; // поле N x N клітинок
const SWIPE_MIN = 18;

type Phase = 'ready' | 'playing' | 'paused' | 'over';
interface Cell {
  x: number;
  y: number;
}

const UP: Cell = { x: 0, y: -1 };
const DOWN: Cell = { x: 0, y: 1 };
const LEFT: Cell = { x: -1, y: 0 };
const RIGHT: Cell = { x: 1, y: 0 };

interface Engine {
  snake: Cell[];
  dir: Cell;
  queue: Cell[];
  food: Cell;
  timer: number;
  eaten: number;
}

const randomFood = (snake: Cell[]): Cell => {
  const free: Cell[] = [];
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) if (!snake.some((s) => s.x === x && s.y === y)) free.push({ x, y });
  return free.length ? free[Math.floor(Math.random() * free.length)] : { x: -1, y: -1 };
};

const createEngine = (): Engine => {
  const mid = Math.floor(N / 2);
  const snake = [{ x: mid, y: mid }, { x: mid - 1, y: mid }, { x: mid - 2, y: mid }];
  return { snake, dir: RIGHT, queue: [], food: randomFood(snake), timer: 0, eaten: 0 };
};

const tickMs = (eaten: number) => Math.max(70, 150 - eaten * 3);

const SnakeGame: React.FC = () => {
  const [boxRef, size] = useFitBox(1);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const eng = useRef<Engine>(createEngine());
  const phaseRef = useRef<Phase>('ready');
  const [phase, setPhaseState] = useState<Phase>('ready');
  const [score, setScore] = useState(0);
  const [best, submitBest] = useHighScore('snake');
  const swipe = useRef<{ x: number; y: number } | null>(null);

  const setPhase = (p: Phase) => {
    phaseRef.current = p;
    setPhaseState(p);
  };

  const startGame = () => {
    eng.current = createEngine();
    setScore(0);
    setPhase('playing');
  };

  const setDirection = (d: Cell) => {
    if (phaseRef.current !== 'playing') return;
    const e = eng.current;
    const last = e.queue.length ? e.queue[e.queue.length - 1] : e.dir;
    if (d.x === -last.x && d.y === -last.y) return; // розворот на 180° заборонено
    if (d.x === last.x && d.y === last.y) return;
    if (e.queue.length < 2) e.queue.push(d);
  };

  const togglePause = () => {
    if (phaseRef.current === 'playing') setPhase('paused');
    else if (phaseRef.current === 'paused') setPhase('playing');
  };

  const actions = useRef({ setDirection, togglePause });
  actions.current = { setDirection, togglePause };

  useEffect(() => {
    const onKey = (ev: KeyboardEvent) => {
      const a = actions.current;
      const map: Record<string, Cell> = {
        ArrowUp: UP, KeyW: UP, ArrowDown: DOWN, KeyS: DOWN, ArrowLeft: LEFT, KeyA: LEFT, ArrowRight: RIGHT, KeyD: RIGHT,
      };
      if (map[ev.code]) {
        ev.preventDefault();
        a.setDirection(map[ev.code]);
      } else if (ev.code === 'Space' || ev.code === 'KeyP') {
        ev.preventDefault();
        a.togglePause();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const step = () => {
    const e = eng.current;
    if (e.queue.length) e.dir = e.queue.shift() as Cell;
    const head = { x: e.snake[0].x + e.dir.x, y: e.snake[0].y + e.dir.y };
    const ate = head.x === e.food.x && head.y === e.food.y;
    const body = ate ? e.snake : e.snake.slice(0, -1);
    const dead = head.x < 0 || head.y < 0 || head.x >= N || head.y >= N || body.some((s) => s.x === head.x && s.y === head.y);
    if (dead) {
      submitBest(e.eaten);
      setPhase('over');
      return;
    }
    e.snake.unshift(head);
    if (ate) {
      e.eaten += 1;
      e.food = randomFood(e.snake);
      setScore(e.eaten);
    } else e.snake.pop();
  };

  const draw = () => {
    const c = canvasRef.current;
    if (!c || c.width === 0) return;
    const ctx = c.getContext('2d');
    if (!ctx) return;
    const e = eng.current;
    const cell = c.width / N;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    for (let y = 0; y < N; y++) {
      for (let x = 0; x < N; x++) {
        ctx.fillStyle = (x + y) % 2 === 0 ? '#0f1b2d' : '#0b1220';
        ctx.fillRect(x * cell, y * cell, cell, cell);
      }
    }

    // їжа
    if (e.food.x >= 0) {
      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.arc((e.food.x + 0.5) * cell, (e.food.y + 0.5) * cell, cell * 0.36, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#22c55e';
      ctx.fillRect((e.food.x + 0.5) * cell - 1, e.food.y * cell + cell * 0.08, 3, cell * 0.2);
    }

    // змійка
    e.snake.forEach((s, i) => {
      ctx.fillStyle = i === 0 ? '#4ade80' : i % 2 ? '#22c55e' : '#16a34a';
      const pad = i === 0 ? 1 : 2;
      ctx.fillRect(s.x * cell + pad, s.y * cell + pad, cell - pad * 2, cell - pad * 2);
    });

    // очі
    const h = e.snake[0];
    const d = e.dir;
    const cx = (h.x + 0.5) * cell;
    const cy = (h.y + 0.5) * cell;
    const off = cell * 0.2;
    const fwd = cell * 0.12;
    const eyes = d.x !== 0
      ? [[cx + d.x * fwd, cy - off], [cx + d.x * fwd, cy + off]]
      : [[cx - off, cy + d.y * fwd], [cx + off, cy + d.y * fwd]];
    ctx.fillStyle = '#0b1220';
    eyes.forEach(([ex, ey]) => {
      ctx.beginPath();
      ctx.arc(ex, ey, cell * 0.09, 0, Math.PI * 2);
      ctx.fill();
    });
  };

  useGameLoop((dt) => {
    if (phaseRef.current === 'playing') {
      const e = eng.current;
      e.timer += dt * 1000;
      if (e.timer >= tickMs(e.eaten)) {
        e.timer = 0;
        step();
      }
    }
    draw();
  });

  // ---------- Свайпи ----------
  const onPointerDown = (ev: React.PointerEvent<HTMLCanvasElement>) => {
    swipe.current = { x: ev.clientX, y: ev.clientY };
    ev.currentTarget.setPointerCapture(ev.pointerId);
  };
  const onPointerMove = (ev: React.PointerEvent<HTMLCanvasElement>) => {
    const s = swipe.current;
    if (!s) return;
    const dx = ev.clientX - s.x;
    const dy = ev.clientY - s.y;
    if (Math.max(Math.abs(dx), Math.abs(dy)) < SWIPE_MIN) return;
    setDirection(Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? RIGHT : LEFT) : dy > 0 ? DOWN : UP);
    swipe.current = { x: ev.clientX, y: ev.clientY };
  };
  const endSwipe = () => {
    swipe.current = null;
  };

  const dpr = getDpr();
  const statBox = 'bg-slate-800/80 rounded-xl px-4 py-2 text-white';

  const info = (
    <div className="flex flex-col gap-2 w-full min-w-[9rem]">
      <div className={statBox}>
        <div className="text-xs text-slate-400">Рахунок</div>
        <div className="text-2xl font-bold">{score}</div>
      </div>
      <div className={statBox}>
        <div className="text-xs text-slate-400">Рекорд</div>
        <div className="text-xl font-bold">{best}</div>
      </div>
      {phase === 'playing' && (
        <button onClick={togglePause} className="bg-slate-700 hover:bg-slate-600 text-white rounded-xl py-2 font-semibold">
          ⏸ Пауза
        </button>
      )}
    </div>
  );

  const key = 'w-16 h-16 md:w-[4.5rem] md:h-[4.5rem]';
  const controls = (
    <div className="grid grid-cols-3 gap-2">
      <div />
      <HoldButton onAction={() => setDirection(UP)} className={key} label="Вгору">▲</HoldButton>
      <div />
      <HoldButton onAction={() => setDirection(LEFT)} className={key} label="Вліво">◀</HoldButton>
      <HoldButton onAction={() => setDirection(DOWN)} className={key} label="Вниз">▼</HoldButton>
      <HoldButton onAction={() => setDirection(RIGHT)} className={key} label="Вправо">▶</HoldButton>
    </div>
  );

  return (
    <div className="relative w-full h-full">
      <GameLayout info={info} controls={controls}>
        <div ref={boxRef} className="w-full h-full flex items-center justify-center">
          {size.w > 0 && (
            <canvas
              ref={canvasRef}
              width={size.w * dpr}
              height={size.h * dpr}
              style={{ width: size.w, height: size.h, touchAction: 'none' }}
              className="rounded-xl shadow-2xl border border-white/10"
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={endSwipe}
              onPointerCancel={endSwipe}
            />
          )}
        </div>
      </GameLayout>

      {phase === 'ready' && (
        <GameOverlay title="🐍 Змійка">
          <p className="text-slate-300">Збирайте яблука й не врізайтеся в стіни та власний хвіст.</p>
          <p className="text-sm text-slate-400">Свайпайте по полю, користуйтеся стрілками або клавішами ← ↑ ↓ → / WASD.</p>
          <GameButton onClick={startGame}>▶ Грати</GameButton>
        </GameOverlay>
      )}
      {phase === 'paused' && (
        <GameOverlay title="Пауза">
          <GameButton onClick={togglePause}>▶ Продовжити</GameButton>
          <GameButton variant="secondary" onClick={startGame}>
            🔁 Почати спочатку
          </GameButton>
        </GameOverlay>
      )}
      {phase === 'over' && (
        <GameOverlay title="Гру завершено">
          <p className="text-2xl font-bold">Рахунок: {score}</p>
          <p className="text-slate-300">Рекорд: {Math.max(best, score)}</p>
          <GameButton onClick={startGame}>🔁 Ще раз</GameButton>
        </GameOverlay>
      )}
    </div>
  );
};

export default SnakeGame;
