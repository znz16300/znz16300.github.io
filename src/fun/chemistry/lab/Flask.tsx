// Колба з анімацією реакції: бульбашки, піна, осад, зміна кольору, нагрівання.
import React, { useEffect, useImperativeHandle, useRef } from 'react';
import { SimCanvas } from '../../../physics/shared/SimCanvas';
import type { RGBA, Reaction } from './data';

export interface FlaskHandle {
  start: (liq: RGBA, reaction: Reaction | null, solid?: string) => void;
  reset: () => void;
}

interface Bub { x: number; y: number; vy: number; r: number }
interface Prc { x: number; y: number; vy: number; c: string }

export const Flask = React.forwardRef<FlaskHandle>((_, ref) => {
  const s = useRef({
    liq: [147, 197, 253, 0.2] as RGBA, from: [147, 197, 253, 0.2] as RGBA, to: [147, 197, 253, 0.2] as RGBA, t: 1,
    has: false, rx: null as Reaction | null, time: 0,
    bubs: [] as Bub[], prc: [] as Prc[], sed: 0, sedColor: '#fff', foam: 0, temp: 0, flash: 0, solid: '' as string, solidY: 0, solidAlpha: 0,
  });

  useImperativeHandle(ref, () => ({
    start: (liq, reaction, solid) => {
      const st = s.current;
      st.from = [...st.liq] as RGBA;
      st.to = reaction?.liq ?? liq;
      st.liq = [...liq] as RGBA;
      st.from = [...liq] as RGBA;
      st.t = 0; st.has = true; st.rx = reaction; st.time = 0;
      st.bubs = []; st.prc = []; st.sed = 0; st.foam = 0; st.temp = 0; st.flash = reaction?.flash ? 1 : 0;
      st.solid = solid ?? ''; st.solidY = 0; st.solidAlpha = solid ? 1 : 0;
      if (reaction?.precip) st.sedColor = reaction.precip;
    },
    reset: () => {
      const st = s.current;
      st.liq = [147, 197, 253, 0.12]; st.from = st.liq; st.to = st.liq; st.t = 1; st.has = false; st.rx = null;
      st.bubs = []; st.prc = []; st.sed = 0; st.foam = 0; st.temp = 0; st.flash = 0; st.solidAlpha = 0;
    },
  }));
  useEffect(() => { (ref as React.RefObject<FlaskHandle>).current?.reset(); }, [ref]);

  const draw = (ctx: CanvasRenderingContext2D, w: number, h: number, dt: number) => {
    const st = s.current;
    st.time += dt;
    const rx = st.rx;
    // колір рідини
    if (st.t < 1) st.t = Math.min(1, st.t + dt / (rx?.liq ? 3 : 1));
    const col = st.from.map((c, i) => c + (st.to[i] - c) * st.t) as RGBA;
    st.liq = col;
    // події
    if (rx && st.time < 5) {
      if (rx.gas) {
        const rate = rx.gas * (st.time < 4 ? 1 : 0.3);
        if (Math.random() < rate * 0.9) st.bubs.push({ x: 0.25 + Math.random() * 0.5, y: 0.95, vy: 0.25 + Math.random() * 0.35, r: 0.012 + Math.random() * 0.02 });
        if (rx.gas > 0.7 && Math.random() < rate * 0.6) st.bubs.push({ x: 0.25 + Math.random() * 0.5, y: 0.95, vy: 0.4 + Math.random() * 0.4, r: 0.01 + Math.random() * 0.015 });
      }
      if (rx.precip && st.time < 2.5 && Math.random() < 0.7) st.prc.push({ x: 0.28 + Math.random() * 0.44, y: 0.45, vy: 0.12 + Math.random() * 0.1, c: rx.precip });
      if (rx.foam) st.foam = Math.min(0.16, st.foam + dt * 0.06);
      if (rx.heat) st.temp = Math.min(rx.heat, st.temp + dt * 0.4);
    } else if (st.foam > 0) st.foam = Math.max(0, st.foam - dt * 0.01);
    if (st.flash > 0) st.flash = Math.max(0, st.flash - dt * 1.2);
    if (st.solidAlpha > 0 && st.solid) { st.solidY = Math.min(0.9, st.solidY + dt * 0.9); if (st.solidY >= 0.9) st.solidAlpha = Math.max(0, st.solidAlpha - dt * 0.4); }

    // фон
    const bg = ctx.createLinearGradient(0, 0, 0, h);
    bg.addColorStop(0, '#1e293b'); bg.addColorStop(1, '#0f172a');
    ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#334155'; ctx.fillRect(0, h * 0.93, w, h * 0.07);

    // колба: трапеція-склянка
    const cx = w * 0.45, top = h * 0.12, bot = h * 0.92, wt = w * 0.34, wb = w * 0.28;
    const glass = () => { ctx.beginPath(); ctx.moveTo(cx - wt, top); ctx.lineTo(cx - wb, bot); ctx.lineTo(cx + wb, bot); ctx.lineTo(cx + wt, top); ctx.closePath(); };
    const levelY = top + (bot - top) * 0.32;
    ctx.save(); glass(); ctx.clip();
    ctx.fillStyle = `rgba(${col[0] | 0},${col[1] | 0},${col[2] | 0},${col[3]})`;
    ctx.fillRect(cx - wt, levelY - st.foam * (bot - top) * 0.3, wt * 2, bot - levelY);
    // піна
    if (st.foam > 0) {
      ctx.fillStyle = 'rgba(255,255,255,0.85)';
      for (let i = 0; i < 24; i++) { ctx.beginPath(); ctx.arc(cx - wt + ((i * 37) % 100) / 100 * wt * 2, levelY - st.foam * (bot - top) * 0.3 + ((i * 13) % 20) - 4, 5 + (i % 4) * 2, 0, Math.PI * 2); ctx.fill(); }
    }
    // осад
    if (st.sed > 0) { ctx.fillStyle = st.sedColor; ctx.fillRect(cx - wb, bot - st.sed * (bot - top), wb * 2, st.sed * (bot - top)); }
    // частинки осаду
    st.prc.forEach((p) => { p.y += p.vy * dt; });
    st.prc = st.prc.filter((p) => { if (p.y >= 0.92 - st.sed * 0.8) { st.sed = Math.min(0.14, st.sed + 0.0008); return false; } return true; });
    st.prc.forEach((p) => { ctx.fillStyle = p.c; ctx.beginPath(); ctx.arc(cx - wt + p.x * wt * 2, top + p.y * (bot - top), 3.2, 0, Math.PI * 2); ctx.fill(); });
    // бульбашки
    st.bubs.forEach((b) => { b.y -= b.vy * dt; });
    st.bubs = st.bubs.filter((b) => b.y > 0.32 - st.foam);
    st.bubs.forEach((b) => { ctx.strokeStyle = 'rgba(255,255,255,0.8)'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(cx - wt + b.x * wt * 2, top + b.y * (bot - top), b.r * w, 0, Math.PI * 2); ctx.stroke(); });
    // тверда речовина
    if (st.solid && st.solidAlpha > 0) { ctx.globalAlpha = st.solidAlpha; ctx.fillStyle = st.solid; ctx.fillRect(cx - 10, top + (bot - top) * (0.05 + st.solidY * 0.85), 20, 14); ctx.globalAlpha = 1; }
    ctx.restore();
    glass(); ctx.strokeStyle = '#e2e8f0'; ctx.lineWidth = 4; ctx.stroke();

    // нагрівання: термометр і пара
    const tx = w * 0.85, ty = h * 0.15, th = h * 0.6;
    ctx.fillStyle = '#e2e8f0'; ctx.fillRect(tx - 6, ty, 12, th);
    ctx.fillStyle = '#ef4444'; ctx.fillRect(tx - 4, ty + th * (1 - 0.15 - st.temp * 0.7), 8, th * (0.15 + st.temp * 0.7));
    ctx.beginPath(); ctx.arc(tx, ty + th + 12, 14, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#94a3b8'; ctx.font = '12px system-ui, sans-serif'; ctx.textAlign = 'center'; ctx.fillText('t°', tx, ty - 6);
    if (st.temp > 0.4) { for (let i = 0; i < 3; i++) { ctx.fillStyle = `rgba(226,232,240,${0.25})`; ctx.beginPath(); ctx.arc(cx + Math.sin(st.time * 2 + i * 2) * 20 + (i - 1) * 25, top - 12 - ((st.time * 20 + i * 15) % 40), 10, 0, Math.PI * 2); ctx.fill(); } }
    if (st.flash > 0) { ctx.fillStyle = `rgba(251,191,36,${st.flash * 0.6})`; ctx.fillRect(0, 0, w, h); }
    if (!st.has) { ctx.fillStyle = '#94a3b8'; ctx.font = `bold ${Math.max(14, h * 0.045)}px system-ui, sans-serif`; ctx.textAlign = 'center'; ctx.fillText('Обери дві речовини й натисни «Змішати»', cx, h * 0.6); }
  };
  return <SimCanvas aspect={4 / 3} draw={draw} />;
});
Flask.displayName = 'Flask';
