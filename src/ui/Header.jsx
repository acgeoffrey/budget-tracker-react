import { useLocation } from 'react-router-dom';
import Logout from '../features/authentication/Logout';
import { HiOutlineUser } from 'react-icons/hi2';
import { useUser } from '../features/authentication/useUser';
import Loader from './Loader';

function Header() {
  const { isLoading, user } = useUser();
  if (isLoading) <Loader />;

  const currentPage = useLocation().pathname.replace('/', '');

  return (
    <header className='flex items-center justify-between gap-3 px-10 pb-2 pl-14 pt-10'>
      <h1 className='text-4xl font-medium capitalize'>{currentPage}</h1>
      <div className='flex items-center justify-end gap-3'>
        <div className='flex items-center gap-2'>
          <HiOutlineUser className='bg-primaryLight rounded-full p-2 text-4xl text-primary' />
          <h4 className=''>{user?.data?.user?.name}</h4>
        </div>
        <Logout />
      </div>
    </header>
  );
}

export default Header;
