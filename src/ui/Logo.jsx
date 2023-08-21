import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to='/' className='mx-auto'>
      {/* <img src='/logo.png' alt='coinchef-logo' className='h-28' /> */}
      <p className='text-3xl '>Coin Chef</p>
    </Link>
  );
}

export default Logo;
