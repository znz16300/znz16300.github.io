// 🔬 Дослідити: частота = висота звуку, амплітуда = гучність, форма хвилі = тембр.
import React, { useEffect, useRef, useState } from 'react';
import { BigSlider } from '../shared/BigSlider';
import { ActionButton, Chip, LabLayout } from '../shared/ui';
import { SoundToggle } from '../shared/SoundToggle';
import { unlockAudio } from '../shared/sound';
import { NOTES, startTone, type Tone, type WaveType } from './tone';
import { WaveScope } from './WaveScope';

const TYPES: { id: WaveType; label: string }[] = [
  { id: 'sine', label: 'Синус (флейта)' },
  { id: 'triangle', label: 'Трикутна' },
  { id: 'square', label: 'Квадратна' },
  { id: 'sawtooth', label: 'Пилкоподібна' },
];

export const WaveLab: React.FC = () => {
  const [freq, setFreq] = useState(440);
  const [vol, setVol] = useState(0.7);
  const [type, setType] = useState<WaveType>('sine');
  const [playing, setPlaying] = useState(false);
  const tone = useRef<Tone | null>(null);

  useEffect(() => () => tone.current?.stop(), []);
  useEffect(() => tone.current?.setFreq(freq), [freq]);
  useEffect(() => tone.current?.setVolume(vol), [vol]);
  useEffect(() => tone.current?.setType(type), [type]);

  const toggle = () => {
    unlockAudio();
    if (playing) {
      tone.current?.stop();
      tone.current = null;
      setPlaying(false);
    } else {
      tone.current = startTone(freq, type, vol);
      setPlaying(true);
    }
  };

  const panel = (
    <>
      <ActionButton onClick={toggle} variant={playing ? 'secondary' : 'primary'}>
        {playing ? '⏹ Стоп' : '▶ Грати'}
      </ActionButton>
      <BigSlider label="Частота (висота звуку)" value={freq} min={100} max={1000} step={1} unit="Гц" onChange={setFreq} />
      <BigSlider label="Амплітуда (гучність)" value={vol} min={0.1} max={1} step={0.05} format={(v) => `${Math.round(v * 100)}%`} onChange={setVol} />
      <div className="flex flex-wrap gap-2">
        {NOTES.map((n) => (
          <Chip key={n.name} selected={Math.abs(freq - n.freq) < 1} onClick={() => setFreq(Math.round(n.freq))}>
            {n.name}
          </Chip>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {TYPES.map((t) => (
          <Chip key={t.id} selected={type === t.id} onClick={() => setType(t.id)}>
            {t.label}
          </Chip>
        ))}
      </div>
      <div className="bg-amber-900/40 border border-amber-400/40 rounded-xl p-3 text-amber-100 text-base">
        💡 Чим <b>вища частота</b>, тим <b>вищий звук</b>. Чим <b>більша амплітуда</b>, тим <b>гучніше</b>. Форма хвилі змінює <b>тембр</b> — саме тому скрипка й флейта звучать по-різному.
      </div>
      <SoundToggle />
    </>
  );
  return <LabLayout scene={<WaveScope freq={freq} volume={vol} type={type} />} panel={panel} />;
};
