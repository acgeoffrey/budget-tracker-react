import { HiOutlineArrowRightOnRectangle } from 'react-icons/hi2';
import { useLogout } from './useLogout';
import LoaderMini from '../../ui/LoaderMini';

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <button className='button-icon' onClick={logout} disabled={isLoading}>
      {!isLoading ? (
        <HiOutlineArrowRightOnRectangle />
      ) : (
        <LoaderMini color='emerald-600' />
      )}
    </button>
  );
}

export default Logout;
