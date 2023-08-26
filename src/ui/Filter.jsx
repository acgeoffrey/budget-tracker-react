import { DateTime } from 'luxon';
import { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { useSearchParams } from 'react-router-dom';

const h3Classes = `font-medium text-gray-800`;

function Filter({ setOpenFilter }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const [minAmount, setMinAmount] = useState(0);
  const [maxAmount, setMaxAmount] = useState(0);

  const onChangeDate = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    searchParams.set('date[gte]', DateTime.fromJSDate(start).toISODate());
    if (end)
      searchParams.set('date[lte]', DateTime.fromJSDate(end).toISODate());
  };

  function handleSubmitFilter() {
    searchParams.set('amount[gte]', minAmount);
    searchParams.set('amount[lte]', maxAmount);

    setSearchParams(searchParams);
    setOpenFilter(false);
  }

  return (
    <div
      className='absolute right-0 z-50 mt-2 flex w-[20rem] flex-col gap-5 rounded-md 
    border border-solid border-gray-200 bg-white px-8 py-3 shadow-2xl'
    >
      <div className='flex items-center justify-between'>
        <h3 className='text-lg font-semibold uppercase tracking-wide text-sky-600'>
          Filters
        </h3>
        <button onClick={handleSubmitFilter}>Apply</button>
      </div>

      <div className='flex flex-col gap-3'>
        <h3 className={h3Classes}>Dates</h3>
        <DatePicker
          selected={startDate}
          onChange={onChangeDate}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          inline
        />
      </div>

      <div className='flex flex-col gap-3'>
        <h3 className={h3Classes}>Amount</h3>
        <input
          type='number'
          className='input rounded-sm p-2 text-sm'
          placeholder='Min Amount'
          value={minAmount}
          onChange={(e) => setMinAmount(e.target.value)}
        />
        <input
          type='number'
          className='input rounded-sm p-2 text-sm'
          placeholder='Max Amount'
          value={maxAmount}
          onChange={(e) => setMaxAmount(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Filter;
