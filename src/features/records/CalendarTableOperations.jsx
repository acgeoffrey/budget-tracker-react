function CalendarTableOperations({ type, setType }) {
  return (
    <div className='bg-secondaryExtraLight flex gap-1 rounded-sm border border-solid border-gray-100 p-1 shadow-sm'>
      <button
        onClick={() => setType('expense')}
        disabled={type === 'expense'}
        className={` hover:text-primaryExtraLight disabled:text-primaryExtraLight rounded-sm border-none
          bg-white px-3 py-1 text-sm font-medium outline-primary 
           transition-all duration-300 hover:bg-primary disabled:bg-primary`}
      >
        Expense
      </button>
      <button
        onClick={() => setType('income')}
        disabled={type === 'income'}
        className={` hover:text-primaryExtraLight disabled:text-primaryExtraLight bg-secondaryExtraLight rounded-sm
          border-none px-3 py-1 text-sm font-medium outline-primary 
           transition-all duration-300 hover:bg-primary disabled:bg-primary`}
      >
        Income
      </button>
    </div>
  );
}

export default CalendarTableOperations;
