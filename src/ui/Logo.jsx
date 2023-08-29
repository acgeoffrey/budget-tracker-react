import { Link } from 'react-router-dom';

function Logo() {
  return (
    <div className='overflow-hidden text-center'>
      <Link to='/'>
        <img
          src='/coinchef-logo.png'
          alt='coinchef-logo'
          className='w-full scale-150'
        />
        {/* <p className='text-primary-mildDark text-3xl'>Coin Chef</p> */}
      </Link>
    </div>
  );
}

export default Logo;
