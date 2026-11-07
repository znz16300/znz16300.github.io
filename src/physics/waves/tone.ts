// Прості тони на WebAudio (без файлів). Поважає перемикач «Звук» зі shared/sound.
import { isMuted } from '../shared/sound';

export type WaveType = 'sine' | 'square' | 'triangle' | 'sawtooth';

export const NOTES = [
  { name: 'До', freq: 261.63 },
  { name: 'Ре', freq: 293.66 },
  { name: 'Мі', freq: 329.63 },
  { name: 'Фа', freq: 349.23 },
  { name: 'Соль', freq: 392.0 },
  { name: 'Ля', freq: 440.0 },
  { name: 'Сі', freq: 493.88 },
];

let ctx: AudioContext | null = null;
const getCtx = (): AudioContext | null => {
  try {
    if (!ctx) {
      const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      ctx = new AC();
    }
    if (ctx.state === 'suspended') void ctx.resume();
    return ctx;
  } catch {
    return null;
  }
};

export interface Tone {
  setFreq: (f: number) => void;
  setVolume: (v: number) => void;
  setType: (t: WaveType) => void;
  stop: () => void;
}

/** Безперервний тон. Повертає керівник або null, якщо звук вимкнено/недоступний. */
export function startTone(freq: number, type: WaveType, volume: number): Tone | null {
  if (isMuted()) return null;
  const ac = getCtx();
  if (!ac) return null;
  const o = ac.createOscillator();
  const g = ac.createGain();
  o.type = type;
  o.frequency.value = freq;
  g.gain.setValueAtTime(0.0001, ac.currentTime);
  g.gain.exponentialRampToValueAtTime(Math.max(0.0002, volume * 0.25), ac.currentTime + 0.03);
  o.connect(g).connect(ac.destination);
  o.start();
  return {
    setFreq: (f) => o.frequency.setTargetAtTime(f, ac.currentTime, 0.02),
    setVolume: (v) => g.gain.setTargetAtTime(Math.max(0.0002, v * 0.25), ac.currentTime, 0.02),
    setType: (t) => {
      o.type = t;
    },
    stop: () => {
      g.gain.setTargetAtTime(0.0001, ac.currentTime, 0.03);
      o.stop(ac.currentTime + 0.15);
    },
  };
}

/** Короткий тон на dur секунд */
export function playNote(freq: number, dur = 0.9, type: WaveType = 'triangle'): void {
  const t = startTone(freq, type, 0.8);
  if (t) window.setTimeout(() => t.stop(), dur * 1000);
}
