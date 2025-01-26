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
      <div className={classes.picture} />
      <div>
        <label htmlFor="datePicker">Дата:</label>
        <input id="datePicker" type="date" value={selectedDate} onChange={handleDateChange} />
      </div>
      <div>Працівників: {newData?.workers.length ?? 0}</div>
      <div>
        Учнів: {newData?.klasses.reduce((acc, klass) => acc + klass.students.length, 0) ?? 0}
      </div>
      {newData?.klassList.map((klass, index) => {
        const klassData = newData.klasses.find((k) => k.nameKlas === klass);
        return (
          // eslint-disable-next-line react/no-array-index-key
          <ul key={index}>
            <li>
              {klass}: {klassData ? klassData.students.length.toString() : '-'}
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
          href="https://docs.google.com/spreadsheets/d/${1GdKOPBo_NJ9xSXrp6xKluEGYedrQuMX4cfym5llxemU}"
          target="_blank"
          rel="noreferrer">
          <br />
          Дивитися в таблиці
        </a>
      </div>
    </section>
  );
}

export default KitchenDetails;
