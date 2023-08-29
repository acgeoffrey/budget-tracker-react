function CalendarTableOperations({ type, setType }) {
  return (
    <div className='border-gray-light flex gap-1 rounded-sm border border-solid bg-secondary-extraLight p-1 shadow-sm'>
      <button
        onClick={() => setType('expense')}
        disabled={type === 'expense'}
        className={` rounded-sm border-none bg-white px-3
          py-1 text-sm font-medium outline-primary-default transition-all duration-300 
           hover:bg-primary-default hover:text-primary-extraLight disabled:bg-primary-default disabled:text-primary-extraLight`}
      >
        Expense
      </button>
      <button
        onClick={() => setType('income')}
        disabled={type === 'income'}
        className={` rounded-sm border-none bg-secondary-extraLight px-3
          py-1 text-sm font-medium outline-primary-default transition-all duration-300 
           hover:bg-primary-default hover:text-primary-extraLight disabled:bg-primary-default disabled:text-primary-extraLight`}
      >
        Income
      </button>
    </div>
  );
}

export default CalendarTableOperations;
