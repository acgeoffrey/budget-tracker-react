// import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { HiAdjustmentsHorizontal, HiOutlineXCircle } from 'react-icons/hi2';

import { useUser } from '../authentication/useUser';

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
          { value: '-date', label: 'Sort by Date (Latest first)' },
          { value: 'date', label: 'Sort by Date (Oldest first)' },
          { value: '-amount', label: 'Sort by amount (highest first)' },
          { value: 'amount', label: 'Sort by amount (lowest first)' },
        ]}
        action='sort'
      />
      <div className='relative'>
        <button
          className={` flex items-center justify-center gap-3
        rounded-md border border-solid border-sky-600 bg-sky-200 px-3 py-1 text-sm 
        font-medium text-sky-900 outline-sky-600 transition-all
        duration-300 hover:bg-sky-600 hover:text-sky-50`}
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
