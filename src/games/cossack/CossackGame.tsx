// «Козак у підземеллі Змія» - власна гра в жанрі кінематографічного платформера:
// стрибки, ухоплення за край, пастки, бій на шаблях. Оригінальний герой і сюжет.
// Керування:
//   екранні кнопки: ◀ ▶ ходьба, ▲ стрибок / ухопитися за край / залізти вгору, ▼ присісти / відпустити край,
//                   ⚔ удар шаблею, 🛡 захист (утримувати). Шабля виймається автоматично, коли вартовий поруч.
//   клавіатура: ←/→ (A/D), ↑/Пробіл/W - стрибок, ↓/S, Z - удар, X - захист, P - пауза.
import React, { useEffect, useRef, useState } from 'react';
import { useFitBox, getDpr } from '../shared/useFitBox';
import { useGameLoop } from '../shared/useGameLoop';
import { useHighScore } from '../shared/useHighScore';
import { GameOverlay, GameButton } from '../shared/GameOverlay';
import { PressButton } from '../shared/PressButton';
import { LEVELS } from './levels';
import { createWorld, updateWorld, World, Inp } from './engine';
import { drawWorld, VIEW_W, VIEW_H } from './draw';

type Phase = 'intro' | 'playing' | 'paused' | 'levelDone' | 'won';

const newInp = (): Inp => ({ left: false, right: false, up: false, down: false, parry: false, upEdge: false, attackEdge: false });
const fmt = (t: number) => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;

const CossackGame: React.FC = () => {
  const [boxRef, size] = useFitBox(VIEW_W / VIEW_H);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phaseRef = useRef<Phase>('intro');
  const [phase, setPhaseState] = useState<Phase>('intro');
  const [levelIdx, setLevelIdx] = useState(0);
  const levelRef = useRef(0);
  const world = useRef<World>(createWorld(0));
  const startHp = useRef(3);
  const inp = useRef<Inp>(newInp());
  const total = useRef({ time: 0, deaths: 0 });
  const clock = useRef(0);
  const [best, submitBest] = useHighScore('cossack');
  const [summary, setSummary] = useState({ time: 0, deaths: 0, score: 0 });

  const setPhase = (p: Phase) => {
    phaseRef.current = p;
    inp.current = newInp();
    setPhaseState(p);
  };

  const beginLevel = (idx: number, carryHp: number) => {
    levelRef.current = idx;
    setLevelIdx(idx);
    startHp.current = carryHp;
    world.current = createWorld(idx, carryHp);
    setPhase('playing');
  };

  const newGame = () => {
    total.current = { time: 0, deaths: 0 };
    levelRef.current = 0;
    setLevelIdx(0);
    world.current = createWorld(0);
    setPhase('intro');
  };

  const togglePause = () => {
    if (phaseRef.current === 'playing') setPhase('paused');
    else if (phaseRef.current === 'paused') setPhase('playing');
  };

  const completeLevel = () => {
    const w = world.current;
    if (levelRef.current >= LEVELS.length - 1) {
      const t = total.current;
      const score = Math.max(100, 6000 - Math.round(t.time) * 6 - t.deaths * 250);
      submitBest(score);
      setSummary({ time: t.time, deaths: t.deaths, score });
      setPhase('won');
    } else {
      startHp.current = w.hero.maxHp;
      setPhase('levelDone');
    }
  };

  const actions = useRef({ togglePause });
  actions.current = { togglePause };

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      const i = inp.current;
      if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Space'].includes(e.code)) e.preventDefault();
      if (e.code === 'ArrowLeft' || e.code === 'KeyA') i.left = true;
      else if (e.code === 'ArrowRight' || e.code === 'KeyD') i.right = true;
      else if (e.code === 'ArrowUp' || e.code === 'KeyW' || e.code === 'Space') {
        if (!e.repeat) i.upEdge = true;
        i.up = true;
      } else if (e.code === 'ArrowDown' || e.code === 'KeyS') i.down = true;
      else if (e.code === 'KeyZ' || e.code === 'KeyJ') {
        if (!e.repeat) i.attackEdge = true;
      } else if (e.code === 'KeyX' || e.code === 'KeyK') i.parry = true;
      else if (e.code === 'KeyP' || e.code === 'Escape') actions.current.togglePause();
    };
    const up = (e: KeyboardEvent) => {
      const i = inp.current;
      if (e.code === 'ArrowLeft' || e.code === 'KeyA') i.left = false;
      else if (e.code === 'ArrowRight' || e.code === 'KeyD') i.right = false;
      else if (e.code === 'ArrowUp' || e.code === 'KeyW' || e.code === 'Space') i.up = false;
      else if (e.code === 'ArrowDown' || e.code === 'KeyS') i.down = false;
      else if (e.code === 'KeyX' || e.code === 'KeyK') i.parry = false;
    };
    window.addEventListener('keydown', down);
    window.addEventListener('keyup', up);
    return () => {
      window.removeEventListener('keydown', down);
      window.removeEventListener('keyup', up);
    };
  }, []);

  useGameLoop((dt) => {
    clock.current += dt;
    const w = world.current;
    if (phaseRef.current === 'playing') {
      total.current.time += dt;
      updateWorld(w, inp.current, dt, VIEW_W);
      if (w.event === 'restart') {
        total.current.deaths += 1;
        world.current = createWorld(levelRef.current, startHp.current);
      } else if (w.event === 'levelDone') {
        w.event = null;
        completeLevel();
      }
    }
    const c = canvasRef.current;
    if (!c || c.width === 0) return;
    const ctx = c.getContext('2d');
    if (!ctx) return;
    const k = c.width / VIEW_W;
    ctx.setTransform(k, 0, 0, k, 0, 0);
    drawWorld(ctx, world.current, clock.current, { time: total.current.time, deaths: total.current.deaths, level: levelRef.current });
  });

  const dpr = getDpr();
  const showPad = phase === 'playing' || phase === 'paused';
  const dpad = 'bg-white/25 hover:bg-white/35 active:bg-white/50 backdrop-blur-sm border border-white/30';
  const press = (key: keyof Pick<Inp, 'left' | 'right' | 'down' | 'parry'>) => ({
    onDown: () => {
      inp.current[key] = true;
    },
    onUp: () => {
      inp.current[key] = false;
    },
  });

  return (
    <div className="relative w-full h-full p-2">
      <div ref={boxRef} className="w-full h-full flex items-center justify-center">
        {size.w > 0 && (
          <canvas
            ref={canvasRef}
            width={size.w * dpr}
            height={size.h * dpr}
            style={{ width: size.w, height: size.h }}
            className="rounded-xl shadow-2xl border border-white/10"
          />
        )}
      </div>

      {showPad && (
        <>
          <div className="absolute bottom-3 left-3 z-20 flex gap-2">
            <PressButton {...press('left')} className={`${dpad} w-[4.5rem] h-[4.5rem] rounded-2xl text-3xl`} label="Вліво">◀</PressButton>
            <PressButton {...press('down')} className={`${dpad} w-[4.5rem] h-[4.5rem] rounded-2xl text-3xl`} label="Вниз">▼</PressButton>
            <PressButton {...press('right')} className={`${dpad} w-[4.5rem] h-[4.5rem] rounded-2xl text-3xl`} label="Вправо">▶</PressButton>
          </div>
          <div className="absolute bottom-3 right-3 z-20 flex gap-2 items-end">
            <PressButton {...press('parry')} className={`${dpad} w-[4.5rem] h-[4.5rem] rounded-full text-3xl`} label="Захист">🛡</PressButton>
            <PressButton
              onDown={() => {
                inp.current.attackEdge = true;
              }}
              onUp={() => undefined}
              className={`${dpad} w-[4.5rem] h-[4.5rem] rounded-full text-3xl`}
              label="Удар"
            >
              ⚔
            </PressButton>
            <PressButton
              onDown={() => {
                inp.current.up = true;
                inp.current.upEdge = true;
              }}
              onUp={() => {
                inp.current.up = false;
              }}
              className={`${dpad} w-24 h-24 rounded-full text-4xl`}
              label="Стрибок"
            >
              ▲
            </PressButton>
          </div>
          {phase === 'playing' && (
            <button
              onClick={togglePause}
              className="absolute top-3 right-3 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white"
              aria-label="Пауза"
            >
              ⏸
            </button>
          )}
        </>
      )}

      {phase === 'intro' && (
        <GameOverlay title={levelIdx === 0 ? '🗡️ Козак у підземеллі' : `Рівень ${levelIdx + 1}: ${LEVELS[levelIdx].name}`}>
          {levelIdx === 0 && <p className="text-slate-300 text-sm">Змій украв Оксану й сховав її в глибокому підземеллі. Козак Тарас вирушає її рятувати.</p>}
          <p className="text-slate-200">
            Рівень {levelIdx + 1}/{LEVELS.length}: <b>{LEVELS[levelIdx].name}</b>
          </p>
          <p className="text-sm text-slate-300">{LEVELS[levelIdx].intro}</p>
          {levelIdx === 0 && (
            <div className="text-xs text-slate-400 text-left leading-relaxed">
              <b>▲</b> — стрибок; у повітрі біля краю підлоги утримуйте ▲, щоб ухопитися, і ще раз ▲, щоб залізти. <b>▼</b> — відпустити край.
              <br />
              <b>⚔</b> — удар, <b>🛡</b> — захист (утримувати): шабля виймається, коли вартовий поруч. Падіння з великої висоти шкодить, шипи й прірви вбивають.
            </div>
          )}
          <GameButton onClick={() => beginLevel(levelIdx, startHp.current)}>▶ Вирушити</GameButton>
        </GameOverlay>
      )}

      {phase === 'paused' && (
        <GameOverlay title="Пауза">
          <GameButton onClick={togglePause}>▶ Продовжити</GameButton>
          <GameButton variant="secondary" onClick={() => beginLevel(levelRef.current, startHp.current)}>
            🔁 Рівень спочатку
          </GameButton>
          <GameButton variant="secondary" onClick={() => completeLevel()}>
            ⏭ Пропустити рівень
          </GameButton>
          <GameButton variant="secondary" onClick={newGame}>
            Почати гру заново
          </GameButton>
        </GameOverlay>
      )}

      {phase === 'levelDone' && (
        <GameOverlay title="🎉 Рівень пройдено!">
          <p className="text-slate-300">Загибелі: {total.current.deaths} · час {fmt(total.current.time)}</p>
          <GameButton
            onClick={() => {
              setLevelIdx(levelRef.current + 1);
              levelRef.current += 1;
              world.current = createWorld(levelRef.current, startHp.current);
              setPhase('intro');
            }}
          >
            Далі ▶
          </GameButton>
        </GameOverlay>
      )}

      {phase === 'won' && (
        <GameOverlay title="🏆 Оксану врятовано!">
          <p className="text-slate-300">Змій переможений, а козак із дівчиною вийшли на світло.</p>
          <p className="text-2xl font-bold">Очки: {summary.score}</p>
          <p className="text-slate-300">
            Час {fmt(summary.time)} · загибелі: {summary.deaths} · рекорд: {Math.max(best, summary.score)}
          </p>
          <GameButton onClick={newGame}>🔁 Грати знову</GameButton>
        </GameOverlay>
      )}
    </div>
  );
};

export default CossackGame;
