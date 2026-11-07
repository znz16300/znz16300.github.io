import React from 'react';
import { ATOMS, type Mol } from './data';

/** Структура молекули (кульки й зв'язки). */
export const MolView: React.FC<{ mol: Mol; size?: number }> = ({ mol, size = 220 }) => {
  const S = 80;
  return (
    <svg viewBox="-150 -110 300 220" width={size} height={(size * 220) / 300}>
      {mol.bonds.map(([a, b, n], i) => {
        const A = mol.atoms[a], B = mol.atoms[b];
        const dx = B.x - A.x, dy = B.y - A.y;
        const L = Math.hypot(dx, dy) || 1;
        const nx = -dy / L, ny = dx / L;
        const offs = n === 1 ? [0] : n === 2 ? [-5, 5] : [-8, 0, 8];
        return offs.map((o, k) => (
          <line key={`${i}-${k}`} x1={A.x * S + nx * o} y1={A.y * S + ny * o} x2={B.x * S + nx * o} y2={B.y * S + ny * o} stroke="#cbd5e1" strokeWidth={4} strokeLinecap="round" />
        ));
      })}
      {mol.atoms.map((a, i) => (
        <g key={i}>
          <circle cx={a.x * S} cy={a.y * S} r={ATOMS[a.el].r * S} fill={ATOMS[a.el].color} stroke="rgba(15,23,42,0.6)" strokeWidth={2} />
          <text x={a.x * S} y={a.y * S + 6} textAnchor="middle" fontSize={ATOMS[a.el].r * S * 0.9} fontWeight="bold" fill={ATOMS[a.el].text}>{a.el}</text>
        </g>
      ))}
    </svg>
  );
};
