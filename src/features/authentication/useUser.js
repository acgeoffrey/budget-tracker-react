import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '../../services/apiAuthentication';

export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ['user'],
    queryFn: getCurrentUser,
    staleTime: 10 * 60 * 1000,
  });

  return { isLoading, user, isAuthenticated: user?.status === 'success' };
}
