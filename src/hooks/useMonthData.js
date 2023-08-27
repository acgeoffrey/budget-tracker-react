import { DateTime } from 'luxon';
import { useState } from 'react';

// console.log(DateTime.now().startOf('month').toJSDate(), lastDay);

export default function useMonthData(firstDay, lastDay) {
  const [dateRange, setDateRange] = useState([
    firstDay.toJSDate(),
    lastDay.toJSDate(),
  ]);
  const [startDate, endDate] = dateRange;

  let body = {
    startDate: firstDay.toUTC().toISO(),
    endDate: lastDay.toUTC().toISO(),
  };

  if (startDate && endDate) {
    body = {
      startDate: DateTime.fromJSDate(startDate).startOf('day').toJSDate(),
      endDate: DateTime.fromJSDate(endDate).endOf('day').toJSDate(),
    };
  }

  return { body, startDate, endDate, setDateRange };
}
