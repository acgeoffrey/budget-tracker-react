import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { useUser } from '../features/authentication/useUser';

import Loader from './Loader';

function AuthLayout() {
  const navigate = useNavigate();

  const { isLoading, isAuthenticated } = useUser();
  // console.log(isAuthenticated);

  useEffect(
    function () {
      if (isAuthenticated && !isLoading) navigate('/dashboard');
    },
    [isAuthenticated, isLoading, navigate],
  );

  if (isLoading)
    return (
      <div className='flex h-screen items-center justify-center bg-gray-extraLight'>
        <Loader />
      </div>
    );

  if (!isAuthenticated) return <Outlet />;
}

export default AuthLayout;
