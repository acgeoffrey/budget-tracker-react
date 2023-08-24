import { Link } from 'react-router-dom';
import Logo from './Logo';
import Logout from '../features/authentication/Logout';

function Header() {
  return (
    <header className='absolute right-12 top-8 bg-transparent'>
      <Logout />
    </header>
  );
}

export default Header;
