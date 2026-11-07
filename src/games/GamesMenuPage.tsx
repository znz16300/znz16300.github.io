// Підменю «Ігри» - плитки будуються автоматично з реєстру ігор.
import React from 'react';
import { Kiosk } from '../pages/Kiosk/kiosk';
import { games } from './registry';

export const GamesMenuPage: React.FC = () => (
  <Kiosk
    config={{
      type: 'menu',
      title: 'Ігри',
      buttons: games.map((g) => ({
        label: g.title,
        image: g.icon,
        link: `/kiosk/games/play/${g.id}`,
        color: g.color,
      })),
    }}
  />
);

export default GamesMenuPage;
