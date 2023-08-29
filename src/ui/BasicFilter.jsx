import { useSearchParams } from 'react-router-dom';

function BasicFilter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    if (searchParams.get('page')) searchParams.set('page', 1);
    if (searchParams.get('recordType') === 'all')
      searchParams.delete('category');

    setSearchParams(searchParams);
  }

  return (
    <div className='border-gray-light flex gap-1 rounded-sm border border-solid p-1 shadow-sm'>
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => handleClick(option.value)}
          disabled={option.value === currentFilter}
          className={` rounded-sm border-none bg-white px-3
          py-1 text-sm font-medium outline-primary-default transition-all duration-300 
           hover:bg-primary-default hover:text-primary-extraLight disabled:bg-primary-default disabled:text-primary-extraLight`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default BasicFilter;
