import { useQuery } from '@tanstack/react-query';
import { getRecords } from '../../services/apiRecords';

export function useRecords() {
  const {
    isLoading,
    data: records,
    error,
  } = useQuery({
    queryKey: ['records'],
    queryFn: getRecords,
  });

  return { isLoading, error, records };
}
