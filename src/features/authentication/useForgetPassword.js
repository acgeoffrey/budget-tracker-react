import { useMutation } from '@tanstack/react-query';
import { forgetPassword as forgetPasswordAPI } from '../../services/apiAuthentication';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export function useForgetPassword() {
  const navigate = useNavigate();

  const { mutate: forgetPassword, isLoading } = useMutation({
    mutationFn: forgetPasswordAPI,
    onSuccess: () => {
      navigate('/login');
      toast.success('Reset password link sent to email');
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { forgetPassword, isLoading };
}
