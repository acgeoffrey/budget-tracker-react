import { useQuery } from '@tanstack/react-query';
import { getAllCategories } from '../../services/apiRecords';

export function useTags() {
  const {
    isLoading,
    data: tags,
    error,
  } = useQuery({
    queryKey: ['tags'],
    queryFn: getAllCategories,
  });

  return { isLoading, tags, error };
}
