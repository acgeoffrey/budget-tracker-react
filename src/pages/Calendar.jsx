import { StaticDatePicker } from '@mui/x-date-pickers';
import RecordsTable from '../features/records/RecordsTable';
import { useState } from 'react';
import { DateTime } from 'luxon';
import { useCalendar } from '../features/records/useCalendar';
import Loader from '../ui/Loader';
import CalendarTableOperations from '../features/records/CalendarTableOperations';
import { Box } from '@mui/material';
import AddRecord from '../features/records/AddRecord';
import { useUser } from '../features/authentication/useUser';
import { formatCurrency } from '../utils/helpers';

function Calendar() {
  const [date, setDate] = useState(DateTime.now());
  const [type, setType] = useState('expense');

  const { isLoading: userLoading, user } = useUser();
  const { isLoading, calendar } = useCalendar(
    type,
    date.startOf('day').toUTC().toISO(),
    date.endOf('day').toUTC().toISO(),
  );

  if (isLoading || userLoading) return <Loader />;

  const totalAmount = calendar?.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <>
      <div className='flex items-center justify-end'>
        <CalendarTableOperations type={type} setType={setType} />
      </div>
      <div className='flex items-start justify-between gap-3'>
        <Box>
          <StaticDatePicker
            value={date}
            onChange={setDate}
            slotProps={{
              actionBar: {
                actions: ['today'],
              },
            }}
          />
        </Box>

        <div className='flex-grow'>
          {totalAmount ? (
            <p className='mb-3 text-right font-medium uppercase text-gray-500'>
              Total Amount:{' '}
              <span className='font-number text-lg font-semibold text-gray-950'>
                {formatCurrency(user?.data?.settings?.currency, totalAmount)}
              </span>
            </p>
          ) : null}
          <RecordsTable
            type='calendar'
            columns='grid-cols-[1.2fr_0.6fr_0.7fr_0.2fr]'
            records={calendar}
          />
        </div>
      </div>
      <AddRecord />
    </>
  );
}

export default Calendar;
