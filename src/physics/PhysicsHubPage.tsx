// Головна сторінка розділу «Фізика навколо нас» - плитки будуються автоматично з реєстру.
import React from 'react';
import { Kiosk } from '../pages/Kiosk/kiosk';
import { physicsPages, PHYSICS_BASE } from './registry';

export const PhysicsHubPage: React.FC = () => (
  <Kiosk
    config={{
      type: 'menu',
      title: 'Фізика навколо нас',
      buttons: physicsPages.map((p) => ({
        label: p.title,
        image: p.icon,
        link: `${PHYSICS_BASE}/${p.id}`,
        color: p.color,
      })),
    }}
  />
);

export default PhysicsHubPage;
