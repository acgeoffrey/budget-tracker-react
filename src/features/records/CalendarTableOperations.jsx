function CalendarTableOperations({ type, setType }) {
  return (
    <div className='flex gap-1 rounded-sm border border-solid border-gray-100 bg-lime-50 p-1 shadow-sm'>
      <button
        onClick={() => setType('expense')}
        disabled={type === 'expense'}
        className={` rounded-sm border-none bg-white px-3
          py-1 text-sm font-medium outline-emerald-600 transition-all duration-300 
           hover:bg-emerald-600 hover:text-emerald-50 disabled:bg-emerald-600 disabled:text-emerald-50`}
      >
        Expense
      </button>
      <button
        onClick={() => setType('income')}
        disabled={type === 'income'}
        className={` rounded-sm border-none bg-lime-50 px-3
          py-1 text-sm font-medium outline-emerald-600 transition-all duration-300 
           hover:bg-emerald-600 hover:text-emerald-50 disabled:bg-emerald-600 disabled:text-emerald-50`}
      >
        Income
      </button>
    </div>
  );
}

export default CalendarTableOperations;
