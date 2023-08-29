import { Link } from 'react-router-dom';

function Logo() {
  return (
    <div className='text-center'>
      {/* <img src='/logo.png' alt='coinchef-logo' className='h-28' /> */}
      <Link to='/'>
        <p className='text-primary-mildDark text-3xl'>Coin Chef</p>
      </Link>
    </div>
  );
}

export default Logo;
