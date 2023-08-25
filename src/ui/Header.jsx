import { Link } from 'react-router-dom';
import Logout from '../features/authentication/Logout';

function Header() {
  return (
    <header className='flex items-center justify-end gap-3 bg-gray-50 px-10 py-2'>
      <Logout />
    </header>
  );
}

export default Header;
