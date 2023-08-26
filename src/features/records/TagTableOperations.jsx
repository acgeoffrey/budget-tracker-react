import DatePicker from 'react-datepicker';

function TagTableOperations({ startDate, endDate, setDateRange }) {
  return (
    <div>
      <DatePicker
        className='input rounded p-2 text-sm'
        placeholderText='Filter Dates'
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => {
          setDateRange(update);
        }}
        isClearable={true}
      />
    </div>
  );
}

export default TagTableOperations;
