import { Link } from 'react-router-dom';

function Logo() {
  return (
    <div className='text-center'>
      {/* <img src='/logo.png' alt='coinchef-logo' className='h-28' /> */}
      <Link to='/'>
        <p className='text-primaryDark text-3xl'>Coin Chef</p>
      </Link>
    </div>
  );
}

export default Logo;
