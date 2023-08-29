import { HiOutlineArrowRightOnRectangle } from 'react-icons/hi2';
import { useLogout } from './useLogout';
import LoaderMini from '../../ui/LoaderMini';

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <button
      className='button-icon hover:bg-secondary-muted flex items-center justify-center 
      gap-2'
      onClick={logout}
      disabled={isLoading}
    >
      {!isLoading ? (
        <>
          <HiOutlineArrowRightOnRectangle />
        </>
      ) : (
        <LoaderMini color='primary-default' />
      )}
    </button>
  );
}

export default Logout;
