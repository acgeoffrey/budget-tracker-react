import { Link } from 'react-router-dom';

function Logo() {
  return (
    <div className='text-center'>
      {/* <img src='/logo.png' alt='coinchef-logo' className='h-28' /> */}
      <Link to='/'>
        <p className='text-3xl text-emerald-700'>Coin Chef</p>
      </Link>
    </div>
  );
}

export default Logo;
