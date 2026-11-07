// «Рекорди світу»: картки зі свайпом, щоразу в іншому порядку.
import React, { useMemo } from 'react';
import { FactCards } from '../../../physics/shared/FactCards';
import { shuffled } from '../../shared/seed';
import { RECORDS } from './records';

const RecordsPage: React.FC = () => {
  const facts = useMemo(() => shuffled(RECORDS), []);
  return <FactCards facts={facts} />;
};

export default RecordsPage;
