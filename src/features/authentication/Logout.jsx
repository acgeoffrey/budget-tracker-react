import { HiOutlineArrowRightOnRectangle } from 'react-icons/hi2';
import { useLogout } from './useLogout';
import LoaderMini from '../../ui/LoaderMini';

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <button
      className='button-icon hover:bg-secondaryMedium flex items-center justify-center 
      gap-2'
      onClick={logout}
      disabled={isLoading}
    >
      {!isLoading ? (
        <>
          <HiOutlineArrowRightOnRectangle />
        </>
      ) : (
        <LoaderMini color='primary' />
      )}
    </button>
  );
}

export default Logout;
