import { useMutation } from '@tanstack/react-query';
import { resetPassword as resetPasswordAPI } from '../../services/apiAuthentication';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export function useResetPassword() {
  const navigate = useNavigate();

  const { mutate: resetPassword, isLoading } = useMutation({
    mutationFn: ({ password, passwordConfirm, token }) =>
      resetPasswordAPI({ password, passwordConfirm }, token),
    onSuccess: () => {
      navigate('/login');
      toast.success('Password Reset Successful.');
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { resetPassword, isLoading };
}
