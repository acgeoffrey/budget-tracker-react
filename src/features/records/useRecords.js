import { useQuery } from '@tanstack/react-query';
import { getRecords } from '../../services/apiRecords';
import { useSearchParams } from 'react-router-dom';

export function useRecords() {
  const [searchParams] = useSearchParams();

  let query = 'sort=-amount';
  for (const entry of searchParams.entries()) {
    if (entry[0] === 'recordType' && entry[1] === 'all') continue;

    query += '&';
    query += entry.toString().replace(',', '=');
  }

  console.log(query);

  const {
    isLoading,
    data: records,
    error,
  } = useQuery({
    queryKey: ['records', query],
    queryFn: () => getRecords(query, 1),
  });

  return { isLoading, error, records };
}
