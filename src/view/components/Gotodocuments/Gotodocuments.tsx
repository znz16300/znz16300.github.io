import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as classes from './gotodocuments.module.css';
import Button from '../common/Button/Button';

function Gotodocuments() {
  const navigate = useNavigate();

  const goToPage = (path: string) => {
    navigate(path);
  };

  return (
    <section className={classes.greeting}>
      <div className={classes.picture} />
      <div className={classes.textContent}>
        <h2>Документація закладу</h2>
        <p>
          Обов’язкова документація, розміщена на нашому сайті згідно статті 30 Закону України «Про
          освіту» від 05.09.2017 № 2145-VIII.
        </p>
        <div className={classes.wrapper}>
          <Button
            type="button"
            className={classes.catalogButton}
            onClick={() =>
              goToPage(
                '/page?titlePages=%D0%92%D1%96%D0%B4%D0%BA%D1%80%D0%B8%D1%82%D1%96%D1%81%D1%82%D1%8C%20%D1%82%D0%B0%20%D0%BF%D1%80%D0%BE%D0%B7%D0%BE%D1%80%D1%96%D1%81%D1%82%D1%8C&keyPages=1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI'
              )
            }>
            Читати
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Gotodocuments;
