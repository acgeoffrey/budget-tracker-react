import { Controller, useForm, useWatch } from 'react-hook-form';
import { useUser } from '../authentication/useUser';
import { DatePicker } from '@mui/x-date-pickers';
import { DateTime } from 'luxon';
import { Select, SelectItem } from '@tremor/react';

import FormElementRow from '../../ui/FormElementRow';
import LoaderMini from '../../ui/LoaderMini';

import { useCreateRecord } from './useCreateRecord';
import { useUpdateRecord } from './useUpdateRecord';

// const recordTypeOptions = [
//   {
//     value: 'expense',
//     label: 'Expense',
//   },
//   {
//     value: 'income',
//     label: 'Income',
//   },
// ];

function CreateRecordForm({ updateForm = {}, onCloseModal }) {
  const { isCreating, createRecord } = useCreateRecord();
  const { isUpdating, updateRecord } = useUpdateRecord();

  const { user } = useUser();

  const settings = user?.data?.settings[0];
  const busy = isCreating || isUpdating;

  const { id: updateId, ...updateValues } = updateForm;
  const isUpdate = Boolean(updateId);

  const { register, handleSubmit, reset, getValues, formState, control } =
    useForm({
      defaultValues: isUpdate
        ? { ...updateValues, date: DateTime.fromISO(updateValues.date) }
        : {},
    });
  const { errors } = formState;

  function onSubmit(data) {
    console.log(data.date.toISO());
    if (isUpdate)
      updateRecord(
        { updateData: { ...data, date: data.date.toISO() }, id: updateId },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        },
      );
    else
      createRecord(
        { ...data, date: data.date.toISO() },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        },
      );
  }

  // console.log('RENDER', getValues().recordType);
  useWatch({ control, name: 'recordType' });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-[80vw] text-base'>
      <FormElementRow label='Title' error={errors?.title?.message}>
        <input
          type='text'
          id='title'
          className='input h-10 rounded-md'
          disabled={busy}
          {...register('title', {
            required: 'This field is required',
          })}
        />
      </FormElementRow>

      <FormElementRow label='Type' error={errors?.recordType?.message}>
        <Controller
          name='recordType'
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select value={value} onValueChange={onChange} disabled={busy}>
              <SelectItem value='expense' className='capitalize'>
                Expense
              </SelectItem>
              <SelectItem value='income' className='capitalize'>
                Income
              </SelectItem>
            </Select>
          )}
        />
      </FormElementRow>

      <FormElementRow label='Amount' error={errors?.amount?.message}>
        <input
          type='number'
          id='amount'
          className='input h-10 rounded-md'
          disabled={busy}
          {...register('amount', { required: 'This field is required' })}
        />
      </FormElementRow>

      <FormElementRow label='Category'>
        <Controller
          name='category'
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select value={value} onValueChange={onChange} disabled={busy}>
              {getValues().recordType === 'income'
                ? settings.incomeCategories.map((item) => (
                    <SelectItem value={item} key={item} className='capitalize'>
                      {item}
                    </SelectItem>
                  ))
                : settings.expenseCategories.map((item) => (
                    <SelectItem value={item} key={item} className='capitalize'>
                      {item}
                    </SelectItem>
                  ))}
            </Select>
          )}
        />
      </FormElementRow>

      {/* <FormElementRow label='Category'>
        <select
          name='category'
          id='category'
          className='input rounded-md capitalize'
          defaultValue='other'
          disabled={busy}
          {...register('category')}
        >
          {getValues().recordType === 'income'
            ? settings.incomeCategories.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))
            : settings.expenseCategories.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
        </select>
      </FormElementRow> */}

      <FormElementRow label='Date'>
        <Controller
          name='date'
          defaultValue={DateTime.now()}
          control={control}
          render={({ field: { onChange, value } }) => (
            <DatePicker value={value} onChange={onChange} />
          )}
        />
      </FormElementRow>

      <FormElementRow label='Notes' error={errors?.notes?.message}>
        <textarea
          className='h-28 w-[100%] rounded-md border border-solid bg-white px-5
          py-3 shadow-sm outline-emerald-600'
          type='text'
          id='notes'
          disabled={busy}
          {...register('notes')}
        />
      </FormElementRow>

      <FormElementRow>
        <button
          type='reset'
          className='button rounded-md border border-gray-200 bg-white px-3 text-gray-600
          hover:bg-gray-100'
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </button>
        <button className='button px-3' disabled={busy}>
          {!busy ? 'Add Entry' : <LoaderMini />}
        </button>
      </FormElementRow>
    </form>
  );
}

export default CreateRecordForm;
