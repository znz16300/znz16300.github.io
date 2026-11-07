// «Дивовижна Україна»: картки про Україну, щоразу в іншому порядку.
import React, { useMemo } from 'react';
import { FactCards } from '../../../physics/shared/FactCards';
import { shuffled } from '../../shared/seed';
import { UA_FACTS } from './facts';

const UkraineFactsPage: React.FC = () => {
  const facts = useMemo(() => shuffled(UA_FACTS), []);
  return <FactCards facts={facts} />;
};

export default UkraineFactsPage;
