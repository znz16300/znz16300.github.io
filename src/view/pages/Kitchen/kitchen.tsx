/* eslint-disable @typescript-eslint/no-unused-vars */
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
  const { state, setState } = useAppContext();
  const [data, setData] = useState<DataObject[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const responseData: DataObject[] | null = await getOrder(true);
      if (responseData) {
        // eslint-disable-next-line no-console
        console.log('Kitchen responseData', responseData);
        setData(responseData);
      }
    };
    setLoading(true);
    fetchData();
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.wrapper}>
      <Header page={page} />
      <main className={classes.about}>
        <section className={classes.content}>
          <h1>Замовлення</h1>
          {!loading && data ? <KitchenDetails data={data} /> : <Loader />}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Kitchen;
