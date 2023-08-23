import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginAPI } from '../../services/apiAuthentication';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: (body) => loginAPI(body),
    onSuccess: (user) => {
      queryClient.setQueryData(['user'], user);
      navigate('/dashboard', { replace: true });
    },
    onError: (err) => {
      console.log('ERROR', err);
      toast.error(err.message);
    },
  });

  return { login, isLoading };
}
