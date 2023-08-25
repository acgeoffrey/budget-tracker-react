import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';

import { getRecords } from '../../services/apiRecords';

export function useRecords() {
  const queryClient = useQueryClient();
  const [searchParams, setSearchParams] = useSearchParams();

  // let query = 'sort=-amount';

  const filterType = searchParams.get('recordType');
  let filterCategory = searchParams.get('category');
  const sort = searchParams.get('sort');
  const page = searchParams.get('page');

  const filterTypeParams =
    !filterType || filterType === 'all' ? null : filterType;

  const filterCategoryParams = !filterCategory ? null : filterCategory;

  const sortParams = !sort ? '-amount' : sort;

  const pageParams = !page ? 1 : Number(page);

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

  // PRE-FETCHING
  if (records?.length > 9) {
    queryClient.prefetchQuery({
      queryKey: [
        'records',
        filterTypeParams,
        filterCategoryParams,
        sortParams,
        pageParams + 1,
      ],
      queryFn: () =>
        getRecords(
          filterTypeParams,
          filterCategoryParams,
          sortParams,
          pageParams + 1,
        ),
    });
  }

  if (pageParams > 1) {
    queryClient.prefetchQuery({
      queryKey: [
        'records',
        filterTypeParams,
        filterCategoryParams,
        sortParams,
        pageParams - 1,
      ],
      queryFn: () =>
        getRecords(
          filterTypeParams,
          filterCategoryParams,
          sortParams,
          pageParams - 1,
        ),
    });
  }

  return { isLoading, error, records };
}
