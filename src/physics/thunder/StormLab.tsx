// 🔬 Дослідити: блискавка й грім. Бачимо спалах одразу, а звук іде повільно - рахуємо відстань.
import React, { useRef, useState } from 'react';
import { SimCanvas } from '../shared/SimCanvas';
import { BigSlider } from '../shared/BigSlider';
import { ActionButton, Chip, LabLayout, fmt } from '../shared/ui';
import { SoundToggle } from '../shared/SoundToggle';
import { playThunder, unlockAudio } from '../shared/sound';
import { SOUND_SPEED, drawStorm, makeBolt, thunderDelay, type SceneState } from './scene';

export const StormLab: React.FC = () => {
  const [dist, setDist] = useState(2);
  const [mul, setMul] = useState(1);
  const [phase, setPhase] = useState<'idle' | 'running' | 'done'>('idle');
  const [result, setResult] = useState<number | null>(null);

  const sim = useRef({
    phase: 'idle' as 'idle' | 'running' | 'done',
    t: 0,
    dist,
    mul,
    scene: { flash: 0, shake: 0, bolt: null, soundFrac: null, distKm: dist, showTrack: false, dark: 0.35 } as SceneState,
  });
  sim.current.dist = dist;
  sim.current.mul = mul;
  sim.current.scene.distKm = dist;

  const strike = () => {
    unlockAudio();
    const s = sim.current;
    s.phase = 'running';
    s.t = 0;
    s.scene.bolt = makeBolt();
    s.scene.flash = 1;
    s.scene.soundFrac = 0;
    s.scene.showTrack = true;
    s.scene.dark = 0.8;
    setResult(null);
    setPhase('running');
  };

  const draw = (ctx: CanvasRenderingContext2D, w: number, h: number, dt: number) => {
    const s = sim.current;
    const sc = s.scene;
    if (s.phase === 'running') {
      s.t += dt * s.mul;
      const tArr = thunderDelay(s.dist);
      sc.soundFrac = Math.min(1, s.t / tArr);
      if (s.t >= tArr) {
        s.phase = 'done';
        sc.shake = 1;
        playThunder(s.dist);
        setResult(tArr);
        setPhase('done');
      }
    }
    sc.flash = Math.max(0, sc.flash - dt * 2.5);
    sc.shake = Math.max(0, sc.shake - dt * 1.5);
    if (s.phase === 'idle') {
      sc.dark = 0.35;
      sc.soundFrac = null;
      sc.showTrack = false;
    }
    drawStorm(ctx, w, h, sc);

    // секундомір
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'left';
    ctx.font = `bold ${Math.max(16, h * 0.07)}px system-ui, sans-serif`;
    if (s.phase !== 'idle') ctx.fillText(`⏱ ${fmt(s.phase === 'done' ? thunderDelay(s.dist) : s.t, 1)} с`, 14, h * 0.1);
    if (s.phase === 'done') {
      ctx.font = `bold ${Math.max(14, h * 0.055)}px system-ui, sans-serif`;
      ctx.fillStyle = '#93c5fd';
      ctx.fillText('🔊 Грім дійшов!', 14, h * 0.18);
    }
  };

  const reset = () => {
    sim.current.phase = 'idle';
    sim.current.t = 0;
    sim.current.scene.soundFrac = null;
    setPhase('idle');
    setResult(null);
  };

  const panel = (
    <>
      <BigSlider label="Відстань до грози" value={dist} min={0.5} max={6} step={0.5} unit="км" format={(v) => fmt(v, 1)} disabled={phase === 'running'} onChange={(v) => { setDist(v); reset(); }} />
      <div className="flex gap-2 items-center text-white">
        <span className="text-sm text-slate-300">Швидкість показу:</span>
        <Chip selected={mul === 1} onClick={() => setMul(1)}>×1</Chip>
        <Chip selected={mul === 4} onClick={() => setMul(4)}>×4</Chip>
      </div>
      <ActionButton onClick={strike} disabled={phase === 'running'} variant="warn">
        ⚡ Блискавка!
      </ActionButton>
      <div className="bg-slate-800/80 rounded-xl p-3 text-white text-base md:text-lg">
        <div className="font-bold mb-1">Формула</div>
        <div>відстань = швидкість звуку × час</div>
        {result != null ? (
          <div className="mt-2 text-indigo-200">
            = {SOUND_SPEED} м/с × {fmt(result, 1)} с ≈ <b>{fmt(SOUND_SPEED * result, 0)} м</b> ≈ {fmt((SOUND_SPEED * result) / 1000, 1)} км
          </div>
        ) : (
          <div className="mt-2 text-slate-400">Натисни «Блискавка!» і дочекайся грому.</div>
        )}
      </div>
      <div className="bg-amber-900/40 border border-amber-400/40 rounded-xl p-3 text-amber-100 text-base">
        💡 <b>Правило:</b> кожні <b>3 секунди</b> між спалахом і громом - це приблизно <b>1 кілометр</b>.
      </div>
      <SoundToggle />
    </>
  );

  return <LabLayout scene={<SimCanvas aspect={16 / 10} draw={draw} />} panel={panel} />;
};
