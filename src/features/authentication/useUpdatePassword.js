import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updatePassword as updatePassAPI } from '../../services/apiAuthentication';
import { toast } from 'react-hot-toast';

export function useUpdatePassword() {
  const queryClient = useQueryClient();

  const { mutate: updatePassword, isLoading } = useMutation({
    mutationFn: updatePassAPI,
    onSuccess: () => {
      toast.success('Password updated');
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updatePassword, isLoading };
}
