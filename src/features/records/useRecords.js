import { useQuery } from '@tanstack/react-query';
import { getRecords } from '../../services/apiRecords';

export function useRecords(query, page) {
  const {
    isLoading,
    data: records,
    error,
  } = useQuery({
    queryKey: ['records'],
    queryFn: () => getRecords(query, page),
  });

  return { isLoading, error, records };
}
