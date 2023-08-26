import { useQuery } from '@tanstack/react-query';
import { getAllCategories } from '../../services/apiRecords';

export function useTags(body, endDate) {
  const {
    isLoading,
    data: tags,
    error,
  } = useQuery({
    queryKey: ['tags', endDate],
    queryFn: () => getAllCategories(body),
  });

  return { isLoading, tags, error };
}
