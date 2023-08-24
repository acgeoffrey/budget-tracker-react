import { useNavigate } from 'react-router-dom';
import SignupForm from '../features/authentication/SignupForm';
import Logo from '../ui/Logo';
import { useUser } from '../features/authentication/useUser';
import Loader from '../ui/Loader';
import { useEffect } from 'react';

function Signup() {
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

  if (!isAuthenticated && !isLoading) {
    return (
      <main className='grid min-h-screen grid-cols-[40%] content-center justify-center gap-9 bg-gray-100'>
        <Logo />
        <h3 className='text-center text-2xl'>Sign Up</h3>
        <SignupForm />
      </main>
    );
  }
}

export default Signup;
