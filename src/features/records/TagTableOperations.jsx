import DatePicker from 'react-datepicker';
import useMonthData from '../../hooks/useMonthData';
import { DateTime } from 'luxon';
import { useTags } from './useTags';
import Loader from '../../ui/Loader';

const firstDay = DateTime.now().startOf('month');
const lastDay = DateTime.now().endOf('month');

function TagTableOperations() {
  const { startDate, endDate, body, setDateRange } = useMonthData(
    firstDay,
    lastDay,
  );

  const { isLoading } = useTags(body, endDate);

  if (isLoading) return <Loader />;

  return (
    <div className='flex items-center justify-between gap-3'>
      <label htmlFor='date-picker-tag' className='font-medium'>
        Filter:
      </label>
      <DatePicker
        className='input w-60 rounded p-2 text-sm'
        placeholderText='Filter Dates'
        id='date-picker-tag'
        selectsRange={true}
        startDate={startDate}
        dateFormat='dd/MM/yyyy'
        endDate={endDate}
        onChange={setDateRange}
        // isClearable={true}
      />
    </div>
  );
}

export default TagTableOperations;
