import { Link, useLocation } from 'react-router-dom';
import Logout from '../features/authentication/Logout';

function Header() {
  const currentPage = useLocation().pathname.replace('/', '');

  return (
    <header className='flex items-center justify-between gap-3 px-10 pb-2 pl-14 pt-10'>
      <h1 className='text-4xl font-medium capitalize'>{currentPage}</h1>
      <div>
        <Logout />
      </div>
    </header>
  );
}

export default Header;
