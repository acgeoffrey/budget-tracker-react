import { useQuery } from '@tanstack/react-query';
import { getAllCategories } from '../../services/apiRecords';

export function useTags(body, endDate) {
  // if (endDate) console.log(body);
  const {
    isLoading,
    data: tags,
    error,
  } = useQuery({
    queryKey: ['tags', endDate],
    queryFn: () => getAllCategories(body),
    staleTime: 10 * 60 * 1000,
  });

  return { isLoading, tags, error };
}
