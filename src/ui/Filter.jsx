import { DateTime } from 'luxon';
import { useState } from 'react';
import DatePicker from 'react-datepicker';

import { useSearchParams } from 'react-router-dom';
import { useUser } from '../features/authentication/useUser';
import Loader from './Loader';
import Sort from './Sort';
// import { useOuterClick } from '../hooks/useOuterClick';

const h3Classes = `font-medium text-gray-800`;

function Filter({ setOpenFilter }) {
  // const ref = useOuterClick();
  const [searchParams, setSearchParams] = useSearchParams();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const [minAmount, setMinAmount] = useState(0);
  const [maxAmount, setMaxAmount] = useState(0);

  const [searchText, setSearchText] = useState('');

  const { isLoading, user } = useUser();

  const recordType = searchParams.get('recordType');

  if (isLoading) return <Loader />;

  let expenseCategories = user.data.settings[0].expenseCategories;
  let incomeCategories = user.data.settings[0].incomeCategories;
  expenseCategories = expenseCategories.map((item) => {
    return { value: item, label: item };
  });
  incomeCategories = incomeCategories.map((item) => {
    return { value: item, label: item };
  });

  const onChangeDate = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);

    searchParams.set(
      'date[gte]',
      DateTime.fromJSDate(start).startOf('day').toUTC().toISO(),
    );
    if (end)
      searchParams.set(
        'date[lte]',
        DateTime.fromJSDate(end).endOf('day').toUTC().toISO(),
      );
  };

  function handleSubmitFilter() {
    searchParams.delete('page');

    searchParams.set('amount[gte]', minAmount);
    if (maxAmount > 0) searchParams.set('amount[lte]', maxAmount);

    searchParams.set('search', searchText);

    setSearchParams(searchParams);
    setOpenFilter(false);
  }

  return (
    <div
      className='absolute right-0 z-50 mt-2 flex max-h-[80vh] max-w-[30rem] flex-col gap-5 
    overflow-scroll rounded-md border border-solid border-gray-200 bg-white px-8 py-3 shadow-2xl'
    >
      <div className='flex items-center justify-between'>
        <h3 className='text-tertiary text-lg font-semibold uppercase tracking-wide'>
          Filters
        </h3>
        <div>
          <button
            className='outline-tertiary mr-4 text-sm outline-offset-2'
            onClick={() => setOpenFilter(false)}
          >
            Cancel
          </button>
          <button
            onClick={handleSubmitFilter}
            className='text-primaryExtraLight hover:bg-primaryDark rounded bg-primary px-3 
            py-1 text-sm outline-offset-2 outline-primary'
          >
            Apply
          </button>
        </div>
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

      {recordType === 'expense' && (
        <div className='flex flex-col gap-2'>
          <h3 className={h3Classes}>Categories</h3>
          <Sort options={expenseCategories} action='category' />
        </div>
      )}
      {recordType === 'income' && (
        <div className='flex flex-col gap-2'>
          <h3 className={h3Classes}>Categories</h3>
          <Sort options={incomeCategories} action='category' />
        </div>
      )}

      <div className='flex flex-col gap-2'>
        <h3 className={h3Classes}>Amount</h3>
        <div className='flex items-center justify-start gap-3 text-sm'>
          <label htmlFor='min'>Min</label>
          <input
            type='number'
            id='min'
            className='input rounded p-2 text-sm focus:text-primary'
            placeholder='Min Amount'
            value={minAmount}
            onChange={(e) => setMinAmount(e.target.value)}
          />
        </div>
        <div className='flex items-center justify-start gap-3 text-sm '>
          <label htmlFor='max'>Max</label>
          <input
            type='number'
            id='max'
            className='input rounded p-2 text-sm focus:text-primary'
            placeholder='Max Amount'
            value={maxAmount}
            onChange={(e) => setMaxAmount(e.target.value)}
          />
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <h3 className={h3Classes}>Search Records</h3>
        <input
          type='text'
          placeholder='Search Title'
          className='input rounded p-2 text-sm focus:placeholder:text-primary'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Filter;
