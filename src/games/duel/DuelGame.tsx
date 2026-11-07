// Козацькі двобої: файтинг із фольклорними героями (без крові - переможений «в нокауті»).
// Керування:
//   екранні кнопки (мультитач); клавіатура гравця 1: A/D - ходьба, W - стрибок, S - блок, F - удар рукою, G - удар ногою, H - спецприйом;
//   гравця 2: ←/→, ↑ - стрибок, ↓ - блок, K, L, ; (у режимах з комп'ютером працюють обидва набори). Пробіл / P - пауза.
import React, { useEffect, useRef, useState } from 'react';
import { useFitBox, getDpr } from '../shared/useFitBox';
import { useGameLoop } from '../shared/useGameLoop';
import { useHighScore } from '../shared/useHighScore';
import { PressButton } from '../shared/PressButton';
import { GameOverlay, GameButton, GameChip } from '../shared/GameOverlay';
import { ROSTER, BOSS, byId, type FighterDef } from './fighters';
import { W, H, createWorld, step, noInput, createAI, aiInput, LEVELS, type Inp, type World, type AI, type Level } from './engine';
import { drawArena, drawFighter, drawProjectiles, drawHud, ARENAS } from './draw';

type Phase = 'menu' | 'playing' | 'paused' | 'over';
type Mode = 'cpu' | 'pvp' | 'tour';
type Key = keyof Inp;

const KEYMAP: [Record<string, Key>, Record<string, Key>] = [
  { KeyA: 'left', KeyD: 'right', KeyW: 'jump', KeyS: 'block', KeyF: 'punch', KeyG: 'kick', KeyH: 'special' },
  { ArrowLeft: 'left', ArrowRight: 'right', ArrowUp: 'jump', ArrowDown: 'block', KeyK: 'punch', KeyL: 'kick', Semicolon: 'special' },
];

const TOUR_LEVELS: Level[] = ['easy', 'medium', 'hard', 'boss'];

const BTN: { k: Key; icon: string; label: string; col: string }[] = [
  { k: 'left', icon: '◀', label: 'Вліво', col: 'bg-slate-600' },
  { k: 'right', icon: '▶', label: 'Вправо', col: 'bg-slate-600' },
  { k: 'jump', icon: '⤒', label: 'Стрибок', col: 'bg-sky-600' },
  { k: 'block', icon: '🛡', label: 'Блок', col: 'bg-indigo-600' },
  { k: 'punch', icon: '👊', label: 'Удар рукою', col: 'bg-orange-500' },
  { k: 'kick', icon: '🦶', label: 'Удар ногою', col: 'bg-red-600' },
  { k: 'special', icon: '✨', label: 'Спецприйом', col: 'bg-fuchsia-600' },
];

const merge = (a: Inp, b: Inp): Inp => ({
  left: a.left || b.left, right: a.right || b.right, jump: a.jump || b.jump, punch: a.punch || b.punch,
  kick: a.kick || b.kick, special: a.special || b.special, block: a.block || b.block,
});

const DuelGame: React.FC = () => {
  const [boxRef, size] = useFitBox(W / H);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [best, submitBest] = useHighScore('duel');

  const [phase, setPhaseState] = useState<Phase>('menu');
  const [mode, setMode] = useState<Mode>('cpu');
  const [level, setLevel] = useState<Level>('medium');
  const [p1, setP1] = useState<string>('cossack');
  const [p2, setP2] = useState<string>('witch');
  const [result, setResult] = useState<{ title: string; sub: string; next: boolean } | null>(null);
  const [tourInfo, setTourInfo] = useState('');

  const phaseRef = useRef<Phase>('menu');
  const modeRef = useRef<Mode>(mode);
  modeRef.current = mode;
  const world = useRef<World | null>(null);
  const ai = useRef<AI>(createAI('medium'));
  const keys = useRef<Set<string>>(new Set());
  const touch = useRef<[Inp, Inp]>([noInput(), noInput()]);
  const tour = useRef({ step: 0, score: 0, opps: [] as FighterDef[] });
  const clock = useRef(0);
  const names = useRef<[string, string]>(['', '']);

  const setPhase = (p: Phase) => {
    phaseRef.current = p;
    setPhaseState(p);
  };

  const begin = (a: FighterDef, b: FighterDef, lvl: Level, arena: number, nameA: string, nameB: string) => {
    world.current = createWorld(a, b, arena);
    ai.current = createAI(lvl);
    names.current = [nameA, nameB];
    touch.current = [noInput(), noInput()];
    keys.current.clear();
    setResult(null);
    setPhase('playing');
  };

  const startTournament = () => {
    const me = byId(p1);
    const opps = [...ROSTER.filter((r) => r.id !== me.id), BOSS];
    tour.current = { step: 0, score: 0, opps };
    startTourFight();
  };
  const startTourFight = () => {
    const t = tour.current;
    const me = byId(p1);
    const opp = t.opps[t.step];
    setTourInfo(`Бій ${t.step + 1} з ${t.opps.length}`);
    begin(me, opp, TOUR_LEVELS[Math.min(t.step, 3)], t.step % ARENAS.length, 'Ви', opp.name);
  };

  const start = () => {
    if (mode === 'tour') return startTournament();
    const a = byId(p1);
    let b = byId(p2);
    if (mode === 'cpu' && a.id === b.id) b = ROSTER.find((r) => r.id !== a.id)!;
    setTourInfo('');
    begin(a, b, level, Math.floor(Math.random() * 3), mode === 'pvp' ? 'Гравець 1' : 'Ви', mode === 'pvp' ? 'Гравець 2' : "Комп'ютер");
  };

  const finish = (w: World) => {
    const won = w.matchWinner === 0;
    const m = modeRef.current;
    if (m === 'tour') {
      const t = tour.current;
      if (won) {
        t.score += 100 * (t.step + 1) + Math.round((w.f[0].hp / w.f[0].maxHp) * 50);
        submitBest(t.score);
        if (t.step + 1 >= t.opps.length) setResult({ title: '🏆 Ви - чемпіон Січі!', sub: `Рахунок: ${t.score}`, next: false });
        else setResult({ title: `✅ Перемога над: ${t.opps[t.step].name}`, sub: `Рахунок: ${t.score}. Далі - ${t.opps[t.step + 1].name}!`, next: true });
      } else {
        submitBest(t.score);
        setResult({ title: 'Поразка...', sub: `Ваш рахунок: ${t.score}`, next: false });
      }
    } else if (m === 'pvp') setResult({ title: `🏆 Перемагає: ${w.matchWinner === 0 ? 'Гравець 1' : 'Гравець 2'}`, sub: `${w.wins[0]} : ${w.wins[1]}`, next: false });
    else setResult({ title: won ? '🏆 Перемога!' : 'Поразка...', sub: `${w.wins[0]} : ${w.wins[1]}`, next: false });
    setPhase('over');
  };

  // ---------- Клавіатура ----------
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) e.preventDefault();
      keys.current.add(e.code);
      if (e.code === 'Space' || e.code === 'KeyP' || e.code === 'Escape') {
        if (phaseRef.current === 'playing') setPhase('paused');
        else if (phaseRef.current === 'paused') setPhase('playing');
      }
    };
    const up = (e: KeyboardEvent) => keys.current.delete(e.code);
    const blur = () => keys.current.clear();
    window.addEventListener('keydown', down);
    window.addEventListener('keyup', up);
    window.addEventListener('blur', blur);
    return () => {
      window.removeEventListener('keydown', down);
      window.removeEventListener('keyup', up);
      window.removeEventListener('blur', blur);
    };
  }, []);

  const readKeys = (p: 0 | 1): Inp => {
    const r = noInput();
    for (const [code, k] of Object.entries(KEYMAP[p])) if (keys.current.has(code)) r[k] = true;
    return r;
  };

  useGameLoop((dt) => {
    clock.current += dt;
    const w = world.current;
    if (w && phaseRef.current === 'playing') {
      const pvp = modeRef.current === 'pvp';
      const i0 = pvp ? merge(readKeys(0), touch.current[0]) : merge(merge(readKeys(0), readKeys(1)), touch.current[0]);
      const i1 = pvp ? merge(readKeys(1), touch.current[1]) : aiInput(w, 1, ai.current, dt);
      step(w, i0, i1, dt);
      w.events.length = 0;
      if (w.phase === 'end' && w.t > 0.4) finish(w);
    }
    const c = canvasRef.current;
    if (!c || c.width === 0 || !w) return;
    const ctx = c.getContext('2d');
    if (!ctx) return;
    const k = c.width / W;
    ctx.setTransform(k, 0, 0, k, 0, 0);
    ctx.save();
    if (w.shake > 0) ctx.translate((Math.random() - 0.5) * w.shake * 18, (Math.random() - 0.5) * w.shake * 18);
    drawArena(ctx, w.arena, clock.current);
    const order = w.f[0].y > w.f[1].y ? [1, 0] : [0, 1];
    order.forEach((i) => drawFighter(ctx, w.f[i], clock.current));
    drawProjectiles(ctx, w, clock.current);
    ctx.restore();
    drawHud(ctx, w, names.current);
  });

  const press = (p: 0 | 1, k: Key, v: boolean) => {
    touch.current[p][k] = v;
  };
  const Btn: React.FC<{ p: 0 | 1; b: (typeof BTN)[number]; cls: string }> = ({ p, b, cls }) => (
    <PressButton onDown={() => press(p, b.k, true)} onUp={() => press(p, b.k, false)} label={b.label} className={`${b.col} rounded-2xl ${cls}`}>
      {b.icon}
    </PressButton>
  );

  const dpr = getDpr();
  const pvp = mode === 'pvp';
  const showPad = phase === 'playing' || phase === 'paused';

  const Picker: React.FC<{ value: string; onChange: (v: string) => void; boss?: boolean }> = ({ value, onChange, boss }) => (
    <div className="flex gap-2 justify-center flex-wrap">
      {(boss ? [...ROSTER, BOSS] : ROSTER).map((r) => (
        <GameChip key={r.id} selected={value === r.id} onClick={() => onChange(r.id)}>
          {r.emoji} {r.name}
        </GameChip>
      ))}
    </div>
  );
  const info = (id: string) => {
    const f = byId(id);
    return (
      <p className="text-sm text-slate-300">
        <b>{f.title}.</b> {f.desc} Спецприйом «{f.special.name}»: {f.special.text}.
      </p>
    );
  };

  return (
    <div className="relative w-full h-full flex flex-col p-3 gap-2">
      <div ref={boxRef} className="flex-1 min-h-0 w-full flex items-center justify-center">
        {size.w > 0 && (
          <canvas
            ref={canvasRef}
            width={size.w * dpr}
            height={size.h * dpr}
            style={{ width: size.w, height: size.h, touchAction: 'none' }}
            className="rounded-2xl shadow-2xl border border-white/10"
          />
        )}
      </div>

      {showPad && (
        <div className="flex justify-between items-end gap-2 shrink-0 select-none">
          {pvp ? (
            ([0, 1] as const).map((p) => (
              <div key={p} className="flex gap-1.5">
                {BTN.map((b) => (
                  <Btn key={b.k} p={p} b={b} cls="w-11 h-11 sm:w-14 sm:h-14 text-xl" />
                ))}
              </div>
            ))
          ) : (
            <>
              <div className="flex gap-2">
                {BTN.slice(0, 4).map((b) => (
                  <Btn key={b.k} p={0} b={b} cls="w-14 h-14 sm:w-16 sm:h-16 text-2xl" />
                ))}
              </div>
              <div className="flex gap-2">
                {BTN.slice(4).map((b) => (
                  <Btn key={b.k} p={0} b={b} cls="w-14 h-14 sm:w-16 sm:h-16 text-2xl" />
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {phase === 'playing' && (
        <button
          onClick={() => setPhase('paused')}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 w-12 h-12 rounded-full bg-black/40 hover:bg-black/60 text-white"
          aria-label="Пауза"
        >
          ⏸
        </button>
      )}

      {phase === 'menu' && (
        <GameOverlay title="⚔️ Козацькі двобої">
          <p className="text-slate-300">Виграйте два раунди з трьох. Без крові - переможений просто «в нокауті». Рекорд турніру: {best}</p>
          <div className="flex gap-2 justify-center flex-wrap">
            <GameChip selected={mode === 'cpu'} onClick={() => setMode('cpu')}>🤖 Проти комп'ютера</GameChip>
            <GameChip selected={mode === 'tour'} onClick={() => setMode('tour')}>🏆 Турнір</GameChip>
            <GameChip selected={mode === 'pvp'} onClick={() => setMode('pvp')}>👥 Двоє гравців</GameChip>
          </div>
          <div>
            <p className="font-semibold mb-1">{pvp ? 'Боєць 1' : 'Ваш боєць'}</p>
            <Picker value={p1} onChange={setP1} />
            {info(p1)}
          </div>
          {mode !== 'tour' && (
            <div>
              <p className="font-semibold mb-1">{pvp ? 'Боєць 2' : 'Суперник'}</p>
              <Picker value={p2} onChange={setP2} boss={!pvp} />
            </div>
          )}
          {mode === 'cpu' && (
            <div className="flex gap-2 justify-center flex-wrap">
              {(['easy', 'medium', 'hard'] as Level[]).map((l) => (
                <GameChip key={l} selected={level === l} onClick={() => setLevel(l)}>{LEVELS[l].label}</GameChip>
              ))}
            </div>
          )}
          {mode === 'tour' && <p className="text-sm text-slate-400">Переможіть трьох суперників, а потім Змія Горинича!</p>}
          <p className="text-sm text-slate-400">
            Кнопки на екрані або клавіатура: A/D, W, S, F, G, H (гравець 1); ←/→, ↑, ↓, K, L, ; (гравець 2). Спецприйом потребує повної шкали енергії.
          </p>
          <GameButton onClick={start}>▶ До бою!</GameButton>
        </GameOverlay>
      )}

      {phase === 'paused' && (
        <GameOverlay title="Пауза">
          <GameButton onClick={() => setPhase('playing')}>▶ Продовжити</GameButton>
          <GameButton variant="secondary" onClick={() => setPhase('menu')}>Вийти в меню гри</GameButton>
        </GameOverlay>
      )}

      {phase === 'over' && result && (
        <GameOverlay title={result.title}>
          <p className="text-2xl font-bold">{result.sub}</p>
          {tourInfo && <p className="text-slate-400">{tourInfo}</p>}
          {result.next ? (
            <GameButton onClick={() => { tour.current.step += 1; startTourFight(); }}>⚔️ Наступний бій</GameButton>
          ) : (
            <GameButton onClick={start}>🔁 Ще раз</GameButton>
          )}
          <GameButton variant="secondary" onClick={() => setPhase('menu')}>Змінити режим</GameButton>
        </GameOverlay>
      )}
    </div>
  );
};

export default DuelGame;
