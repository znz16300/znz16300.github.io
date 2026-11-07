// Головна сторінка розділу (напр. «Квіз дня») - плитки будуються автоматично з реєстру розділу.
import React from 'react';
import { Kiosk } from '../pages/Kiosk/kiosk';
import type { FunSection } from './types';

export const FunHubPage: React.FC<{ section: FunSection }> = ({ section }) => (
  <Kiosk
    config={{
      type: 'menu',
      title: section.title,
      buttons: section.pages.map((p) => ({
        label: p.title,
        image: p.icon,
        link: `${section.base}/${p.id}`,
        color: p.color,
      })),
    }}
  />
);

export default FunHubPage;
