import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';

import { getRecords } from '../../services/apiRecords';

export function useRecords() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // let query = 'sort=-amount';

  const filterType = searchParams.get('recordType');
  let filterCategory = searchParams.get('category');
  const sort = searchParams.get('sort');
  const page = searchParams.get('page');

  const filterTypeParams =
    !filterType || filterType === 'all' ? null : filterType;

  const filterCategoryParams = !filterCategory ? null : filterCategory;

  const sortParams = !sort ? '-date' : sort;

  const pageParams = !page ? null : Number(page);

  const dateStart = !searchParams.get('date[gte]')
    ? null
    : searchParams.get('date[gte]');
  const dateEnd = !searchParams.get('date[lte]')
    ? null
    : searchParams.get('date[lte]');

  const amountStart = !searchParams.get('amount[gte]')
    ? null
    : searchParams.get('amount[gte]');
  const amountEnd = !searchParams.get('amount[lte]')
    ? null
    : searchParams.get('amount[lte]');

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
      dateStart,
      dateEnd,
      amountStart,
      amountEnd,
    ],
    // queryFn: () => getRecords(query, 1),
    queryFn: () =>
      getRecords(
        filterTypeParams,
        filterCategoryParams,
        sortParams,
        dateStart,
        dateEnd,
        amountStart,
        amountEnd,
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
        dateStart,
        dateEnd,
        amountStart,
        amountEnd,
        pageParams + 1,
      ],
      queryFn: () =>
        getRecords(
          filterTypeParams,
          filterCategoryParams,
          sortParams,
          dateStart,
          dateEnd,
          amountStart,
          amountEnd,
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
        dateStart,
        dateEnd,
        amountStart,
        amountEnd,
        pageParams - 1,
      ],
      queryFn: () =>
        getRecords(
          filterTypeParams,
          filterCategoryParams,
          sortParams,
          dateStart,
          dateEnd,
          amountStart,
          amountEnd,
          pageParams - 1,
        ),
    });
  }

  return { isLoading, error, records };
}
