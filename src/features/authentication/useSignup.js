import { useMutation } from '@tanstack/react-query';
import { signup as signupAPI } from '../../services/apiAuthentication';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export function useSignup() {
  const navigate = useNavigate();

  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupAPI,
    onSuccess: () => {
      navigate('/login');
      toast.success('Account successfully created');
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { signup, isLoading };
}
