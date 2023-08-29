import { useState } from 'react';
import { useUser } from './useUser';
import { Select, SelectItem } from '@tremor/react';
import { currencyData } from '../../utils/constants';
import Loader from '../../ui/Loader';
import FormElementRow from '../../ui/FormElementRow';
import { useUpdateSettings } from './useUpdateSettings';
import LoaderMini from '../../ui/LoaderMini';

function UpdateSettings() {
  const { isLoading, user } = useUser();

  const [currency, setCurrency] = useState(user?.data?.settings?.currency);
  const [incomeTag, setIncomeTag] = useState('');
  const [expenseTag, setExpenseTag] = useState('');

  const { isUpdatingSettings, updateSettings } = useUpdateSettings();

  if (isLoading) return <Loader />;

  function handleSubmit(e) {
    e.preventDefault();
    if (incomeTag && expenseTag) {
      updateSettings({
        expenseCategories: expenseTag,
        incomeCategories: incomeTag,
      });
    }

    if (incomeTag.length > 0) {
      updateSettings({ incomeCategories: incomeTag });
    }

    if (expenseTag.length > 0) {
      updateSettings({ expenseCategories: expenseTag });
    }

    setIncomeTag('');
    setExpenseTag('');
  }

  return (
    <>
      <h2 className='mt-5 border-b border-gray-pale pb-3 text-xl font-medium'>
        Change User Settings
      </h2>
      <form
        className='flex w-[50%] flex-col gap-5 py-5'
        onSubmit={handleSubmit}
      >
        <FormElementRow
          styles='grid grid-cols-[0.5fr_1fr] items-center gap-5'
          label='Change Currency'
        >
          <Select
            value={currency}
            onValueChange={(data) => {
              setCurrency(data);
              updateSettings({ currency: data });
            }}
          >
            {currencyData.map((option) => (
              <SelectItem value={option.code} key={option.code}>
                {option.name}
              </SelectItem>
            ))}
          </Select>
        </FormElementRow>

        <FormElementRow
          label='Add Expense Tag'
          styles='grid grid-cols-[0.5fr_1fr] items-center gap-5'
        >
          <input
            type='text'
            id='expense-tag'
            className='input h-10 rounded px-3'
            placeholder='Electronics'
            value={expenseTag}
            onChange={(e) => setExpenseTag(e.target.value)}
          />
        </FormElementRow>
        <FormElementRow
          label='Add Income Tag'
          styles='grid grid-cols-[0.5fr_1fr] items-center gap-5'
        >
          <input
            type='text'
            id='income-tag'
            className='input h-10 rounded px-3'
            placeholder='Dividends'
            value={incomeTag}
            onChange={(e) => setIncomeTag(e.target.value)}
          />
        </FormElementRow>
        <FormElementRow styles='flex justify-start items-center '>
          <button
            className='button mt-3 px-3 py-2'
            disabled={isUpdatingSettings}
          >
            {isUpdatingSettings ? <LoaderMini /> : 'Update Tags'}
          </button>
        </FormElementRow>
      </form>
    </>
  );
}

export default UpdateSettings;
