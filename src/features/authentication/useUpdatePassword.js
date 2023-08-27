import { useMutation } from '@tanstack/react-query';
import { updatePassword as updatePassAPI } from '../../services/apiAuthentication';
import { toast } from 'react-hot-toast';

export function useUpdatePassword() {
  const { mutate: updatePassword, isLoading } = useMutation({
    mutationFn: updatePassAPI,
    onSuccess: () => {
      toast.success('Password updated');
    },
    onError: (err) => {
      toast.error('Error updating password');
    },
  });

  return { updatePassword, isLoading };
}
