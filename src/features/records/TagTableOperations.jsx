import DatePicker from 'react-datepicker';

function TagTableOperations({ startDate, endDate, setDateRange }) {
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
        onChange={(update) => {
          setDateRange(update);
        }}
        // isClearable={true}
      />
    </div>
  );
}

export default TagTableOperations;
