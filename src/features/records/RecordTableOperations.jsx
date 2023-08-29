// import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { HiAdjustmentsHorizontal, HiOutlineXCircle } from 'react-icons/hi2';
import { BsSortNumericDownAlt, BsSortNumericDown } from 'react-icons/bs';
import { TbCalendarDown, TbCalendarUp } from 'react-icons/tb';

import BasicFilter from '../../ui/BasicFilter';
import Sort from '../../ui/Sort';
import Filter from '../../ui/Filter';
import { useSearchParams } from 'react-router-dom';

function RecordTableOperations() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [openFilter, setOpenFilter] = useState(false);

  function handleClearFilters() {
    searchParams.delete('recordType');
    searchParams.delete('date[gte]');
    searchParams.delete('date[lte]');
    searchParams.delete('amount[gte]');
    searchParams.delete('amount[lte]');
    searchParams.delete('sort');
    searchParams.delete('category');
    searchParams.delete('search');

    setSearchParams(searchParams);
    setOpenFilter(false);
  }

  return (
    <div className='flex items-center gap-3'>
      {' '}
      <BasicFilter
        filterField='recordType'
        options={[
          { value: 'all', label: 'All' },
          { value: 'expense', label: 'Expense' },
          { value: 'income', label: 'Income' },
        ]}
      />
      <Sort
        options={[
          {
            value: '-date',
            label: 'Sort by Date (Latest first)',
            icon: TbCalendarDown,
          },
          {
            value: 'date',
            label: 'Sort by Date (Oldest first)',
            icon: TbCalendarUp,
          },
          {
            value: '-amount',
            label: 'Sort by amount (highest first)',
            icon: BsSortNumericDownAlt,
          },
          {
            value: 'amount',
            label: 'Sort by amount (lowest first)',
            icon: BsSortNumericDown,
          },
        ]}
        action='sort'
      />
      <div className='relative'>
        <button
          className={` hover:text-tertiaryExtraLight bg-tertiaryMedium border-tertiary outline-tertiary
        hover:bg-tertiary flex items-center justify-center gap-3 rounded-md border border-solid 
        px-3 py-1 text-sm font-medium
        text-sky-900 transition-all duration-300`}
          onClick={() => setOpenFilter(!openFilter)}
        >
          <HiAdjustmentsHorizontal className='text-base ' />
          <span className='uppercase tracking-wide'>Filters</span>
        </button>
        {openFilter && <Filter setOpenFilter={setOpenFilter} />}
      </div>
      <button
        className='cursor-pointer text-xl text-gray-600'
        onClick={handleClearFilters}
      >
        <HiOutlineXCircle />
      </button>
    </div>
  );
}

export default RecordTableOperations;
