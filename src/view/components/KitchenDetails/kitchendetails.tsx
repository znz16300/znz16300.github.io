/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import * as classes from './kitchendetails.module.css';
import {
  filterByDate,
  filterLatestEntries,
  formatDate,
  formatDate2,
  formatToDateString,
  KitchenOrder,
  OrderItemProps,
  transformData
} from './kitchenfuncs';

function KitchenDetails({ data }: OrderItemProps) {
  // Встановлюємо початкову дату як поточну
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    console.log('today:', formatToDateString(today.toISOString()));
    return formatToDateString(today.toISOString());
  });
  const [modalData, setModalData] = useState<
    { date: string; nameKlas: string; students: import('./kitchenfuncs').Student[] } | undefined
  >(undefined);

  const [newData, setNewData] = useState<KitchenOrder | undefined>(undefined);

  useEffect(() => {
    if (data) {
      const allData = transformData(data);
      console.log('Усі дані:', allData);
      const filteredData = filterLatestEntries(filterByDate(allData, selectedDate));
      console.log('Фільтровані дані:', filteredData);
      setNewData(filteredData);
      setSelectedDate(selectedDate);
      console.log('Нові дані:', newData);
    }
  }, [data, selectedDate]); // Переобчислюємо, коли змінюється `data` або `selectedDate`

  // Оновлюємо selectedDate при зміні значення в полі введення
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(formatDate(event.target.value));
    console.log('Нова дата:', event.target.value);
    console.log('selectedDate:', selectedDate);
  };

  return (
    <section className={classes.main}>
      {modalData && (
        <div className={classes.modal}>
          <div className={classes.modalContent}>
            <h2>Деталі класу</h2>
            <p>Дата: {modalData.date}</p>
            <p>Клас: {modalData.nameKlas}</p>
            <p>Учні:</p>
            <ul>
              {modalData.students.map((student, idx) => (
                <li key={idx}>{student.name}</li>
              ))}
            </ul>
            <button onClick={() => setModalData(undefined)}>Закрити</button>
          </div>
        </div>
      )}
      <h1>Замовлення порцій</h1>
      <div className={classes.datePicker}>
        <label htmlFor="datePicker">Дата:</label>
        <input
          id="datePicker"
          type="date"
          value={formatDate2(selectedDate)}
          onChange={handleDateChange}
        />
      </div>
      <div>
        Працівників: <span className={classes.value}>{newData?.workers.length ?? 0}</span>
      </div>
      <div>
        Учнів: {newData?.klasses.reduce((acc, klass) => acc + klass.students.length, 0) ?? 0}
      </div>
      {newData?.klassList.map((klass, index) => {
        const klassData = newData.klasses.find((k) => k.nameKlas === klass);
        return (
          <ul key={index}>
            <li className={classes.items}>
              <span className={classes.label}>{klass}: </span>
              <span className={classes.value} onClick={() => setModalData(klassData)}>
                {klassData ? klassData.students.length.toString() : '...'}
              </span>
            </li>
          </ul>
        );
      })}

      <div>Всього класів: {newData?.klasses.length ?? 0}</div>
      <br />
      <div>
        Не надіслали класи:{' '}
        {newData?.klassList
          .filter((klass) => !newData?.klasses.some((k) => k.nameKlas === klass))
          .join(', ') ?? 'Немає'}
      </div>

      <div>
        <a
          className={classes.link}
          href="https://docs.google.com/spreadsheets/d/1GdKOPBo_NJ9xSXrp6xKluEGYedrQuMX4cfym5llxemU"
          target="_blank"
          rel="noreferrer">
          <br />
          Детальніше в таблиці
        </a>
      </div>
    </section>
  );
}

export default KitchenDetails;
