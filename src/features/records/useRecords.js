import { useQuery } from '@tanstack/react-query';
import { getRecords } from '../../services/apiRecords';
import { useSearchParams } from 'react-router-dom';

export function useRecords() {
  const [searchParams, setSearchParams] = useSearchParams();

  // let query = 'sort=-amount';

  const filterType = searchParams.get('recordType');
  let filterCategory = searchParams.get('category');
  const sort = searchParams.get('sort');
  const page = searchParams.get('page');

  const filterTypeParams =
    !filterType || filterType === 'all' ? null : filterType;

  if (filterType === 'all') {
    searchParams.delete('category');
    setSearchParams(searchParams);
  }

  const filterCategoryParams = !filterCategory ? null : filterCategory;

  const sortParams = !sort ? '-amount' : sort;

  const pageParams = !page ? 1 : page;

  // for (const entry of searchParams.entries()) {
  //   if (entry[0] === 'recordType' && entry[1] === 'all') {
  //     query = 'sort=-amount';
  //     continue;
  //   }

  //   query += '&';
  //   query += entry.toString().replace(',', '=');
  // }

  // console.log(query);

  // TODO: Optimize query string to reduce refetching

  const {
    isLoading,
    data: records,
    error,
  } = useQuery({
    queryKey: [
      'records',
      filterTypeParams,
      filterCategoryParams,
      sortParams,
      pageParams,
    ],
    // queryFn: () => getRecords(query, 1),
    queryFn: () =>
      getRecords(
        filterTypeParams,
        filterCategoryParams,
        sortParams,
        pageParams,
      ),
  });

  return { isLoading, error, records };
}
