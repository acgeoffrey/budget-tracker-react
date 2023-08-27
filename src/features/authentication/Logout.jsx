import { HiOutlineArrowRightOnRectangle } from 'react-icons/hi2';
import { useLogout } from './useLogout';
import LoaderMini from '../../ui/LoaderMini';

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <button
      className='button-icon flex items-center justify-center gap-2 bg-lime-100
      hover:bg-lime-200'
      onClick={logout}
      disabled={isLoading}
    >
      {!isLoading ? (
        <>
          <span>Logout</span> <HiOutlineArrowRightOnRectangle />
        </>
      ) : (
        <LoaderMini color='emerald-600' />
      )}
    </button>
  );
}

export default Logout;
