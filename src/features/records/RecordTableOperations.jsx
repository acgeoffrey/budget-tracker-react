import { useSearchParams } from 'react-router-dom';
import { useUser } from '../authentication/useUser';

import BasicFilter from '../../ui/BasicFilter';
import Loader from '../../ui/Loader';
import Sort from '../../ui/Sort';

function RecordTableOperations() {
  const [searchParams] = useSearchParams();
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
      {recordType === 'expense' && (
        <Sort options={expenseCategories} action='category' />
      )}
      {recordType === 'income' && (
        <Sort options={incomeCategories} action='category' />
      )}
      <Sort
        options={[
          { value: '-amount', label: 'Sort by amount (highest first)' },
          { value: 'amount', label: 'Sort by amount (lowest first)' },
          { value: '-date', label: 'Sort by Date (Latest first)' },
          { value: 'date', label: 'Sort by Date (Oldest first)' },
        ]}
        action='sort'
      />
    </div>
  );
}

export default RecordTableOperations;
