import { useSearchParams } from 'react-router-dom';

function BasicFilter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    if (searchParams.get('page')) searchParams.set('page', 1);

    setSearchParams(searchParams);
  }

  return (
    <div className='flex gap-1 rounded-sm border border-solid border-gray-100 p-1 shadow-sm'>
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => handleClick(option.value)}
          disabled={option.value === currentFilter}
          className={` rounded-sm border-none bg-white px-3
          py-1 text-sm font-medium outline-emerald-600 transition-all duration-300 
           hover:bg-emerald-600 hover:text-emerald-50 disabled:bg-emerald-600 disabled:text-emerald-50`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default BasicFilter;
