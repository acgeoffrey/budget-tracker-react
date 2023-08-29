import { useNavigate } from 'react-router-dom';
import { useUser } from '../features/authentication/useUser';
import Loader from '../ui/Loader';
import { useEffect } from 'react';

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const { isLoading, isAuthenticated } = useUser();

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate('/login');
    },
    [isAuthenticated, isLoading, navigate],
  );

  if (isLoading)
    return (
      <div className='bg-gray-extraLight flex h-screen items-center justify-center'>
        <Loader />
      </div>
    );

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
``;
