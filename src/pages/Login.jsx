import { useNavigate } from 'react-router-dom';
import LoginForm from '../features/authentication/LoginForm';
import Logo from '../ui/Logo';
import { useUser } from '../features/authentication/useUser';
import { useEffect } from 'react';
import Loader from '../ui/Loader';

function Login() {
  const navigate = useNavigate();

  const { isLoading, isAuthenticated } = useUser();
  console.log(isAuthenticated);

  useEffect(
    function () {
      if (isAuthenticated && !isLoading) navigate('/dashboard');
    },
    [isAuthenticated, isLoading, navigate],
  );

  if (isLoading)
    return (
      <div className='flex h-screen items-center justify-center bg-gray-50'>
        <Loader />
      </div>
    );

  if (!isAuthenticated && !isLoading)
    return (
      <main className='grid min-h-screen grid-cols-[40%] content-center justify-center gap-9 bg-gray-100'>
        <Logo />
        <h3 className='text-center text-2xl'>Login</h3>
        <LoginForm />
      </main>
    );
}

export default Login;
