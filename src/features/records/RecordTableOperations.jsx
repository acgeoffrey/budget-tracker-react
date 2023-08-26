// import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { HiAdjustmentsHorizontal } from 'react-icons/hi2';

import { useUser } from '../authentication/useUser';

import BasicFilter from '../../ui/BasicFilter';
import Loader from '../../ui/Loader';
import Sort from '../../ui/Sort';
import Filter from '../../ui/Filter';

function RecordTableOperations() {
  // const [searchParams] = useSearchParams();
  const [openFilter, setOpenFilter] = useState(false);
  const { isLoading } = useUser();

  // const recordType = searchParams.get('recordType');

  if (isLoading) return <Loader />;

  // let expenseCategories = user.data.settings[0].expenseCategories;
  // let incomeCategories = user.data.settings[0].incomeCategories;
  // expenseCategories = expenseCategories.map((item) => {
  //   return { value: item, label: item };
  // });
  // incomeCategories = incomeCategories.map((item) => {
  //   return { value: item, label: item };
  // });

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
      {/* {recordType === 'expense' && (
        <Sort options={expenseCategories} action='category' />
      )}
      {recordType === 'income' && (
        <Sort options={incomeCategories} action='category' />
      )} */}
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
        {openFilter && <Filter />}
      </div>
    </div>
  );
}

export default RecordTableOperations;
