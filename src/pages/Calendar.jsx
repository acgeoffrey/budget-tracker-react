import { StaticDatePicker } from '@mui/x-date-pickers';
import RecordsTable from '../features/records/RecordsTable';
import { useState } from 'react';
import { DateTime } from 'luxon';
import { useCalendar } from '../features/records/useCalendar';
import Loader from '../ui/Loader';
import CalendarTableOperations from '../features/records/CalendarTableOperations';
import { Box } from '@mui/material';

function Calendar() {
  const [date, setDate] = useState(DateTime.now());
  const [type, setType] = useState('expense');

  const { isLoading, calendar } = useCalendar(
    type,
    date.startOf('day').toUTC().toISO(),
    date.endOf('day').toUTC().toISO(),
  );

  if (isLoading) return <Loader />;

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
          <RecordsTable
            type='calendar'
            columns='grid-cols-[1.2fr_0.6fr_0.7fr_0.2fr]'
            records={calendar}
          />
        </div>
      </div>
    </>
  );
}

export default Calendar;
