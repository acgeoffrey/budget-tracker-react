import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { useSearchParams } from 'react-router-dom';

import { PAGE_LIMIT } from '../utils/constants';

const paginationButton = `flex items-center justify-center gap-2 border-none px-2 rounded
py-1 font-medium  transition-all duration-300 [&>svg]:h-5 [&>svg]:w-5 outline-primary
disabled:text-gray-500 disabled:cursor-not-allowed`;

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get('page')
    ? 1
    : Number(searchParams.get('page'));

  // const totalPages = Math.ceil(count / 10); // 10 is the limit
  // console.log(count, totalPages);

  function nextPage() {
    const next = currentPage + 1;

    searchParams.set('page', next);
    setSearchParams(searchParams);
  }

  function previousPage() {
    const previous = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set('page', previous);
    setSearchParams(searchParams);
  }

  // if (totalPages <= 1) return null;

  return (
    <div className='flex w-[100%] items-center justify-between'>
      <p className='ml-3 [&>span]:font-bold'>
        Showing <span>{count}</span> results
      </p>

      <div className='flex gap-2'>
        <button
          onClick={previousPage}
          disabled={currentPage === 1}
          className={`${paginationButton}`}
        >
          <HiChevronLeft />
          <span>Previous</span>
        </button>
        <button
          onClick={nextPage}
          disabled={count < PAGE_LIMIT}
          className={`${paginationButton} `}
        >
          <span>Next</span>
          <HiChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
