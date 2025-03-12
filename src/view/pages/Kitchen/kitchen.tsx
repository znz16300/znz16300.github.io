import React, { useEffect, useState } from 'react';
import Footer from '../../components/common/footer/footer';
import * as classes from './kitchen.module.css';
// eslint-disable-next-line import/no-cycle
import Header from '../../components/common/header/header';
import { useAppContext } from '../../../App';
import { getOrder } from '../../../data/api/getData';
import Loader from '../../components/common/Loader/Loader';
import KitchenDetails from '../../components/KitchenDetails/kitchendetails';

const page = 'kitchen';

interface DataObject {
  id: string;
  [key: string]: string;
}

function Kitchen() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { state, setState } = useAppContext();
  const [data, setData] = useState<DataObject[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      const responseData: DataObject[] | null = await getOrder(true);
      if (isMounted && JSON.stringify(responseData) !== JSON.stringify(data)) {
        // eslint-disable-next-line no-console
        console.log('Kitchen responseData', responseData);
        setData(responseData);
      }
      setLoading(false);
    };

    fetchData();
    const interval = setInterval(fetchData, 300000); // Оновлення щохвилини

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [data]);

  return (
    <div className={classes.wrapper}>
      <Header page={page} />
      <section className={classes.content}>
        {!loading && data ? <KitchenDetails data={data} /> : <Loader />}
      </section>
      <Footer />
    </div>
  );
}

export default Kitchen;
