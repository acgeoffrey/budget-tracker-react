import { Link } from 'react-router-dom';
import SignupForm from '../features/authentication/SignupForm';
import Logo from '../ui/Logo';

function Signup() {
  return (
    <main className='grid min-h-screen grid-cols-[40%] content-center justify-center bg-gray-light'>
      <div className='mx-auto w-48'>
        <Logo />
      </div>
      <h3 className='mb-7 text-center text-2xl'>Sign Up</h3>
      <SignupForm />
      <div className='my-7 flex flex-col items-center justify-center gap-2'>
        <p>
          Already a user?{' '}
          <Link to='/login' className='text-primary-default'>
            Login
          </Link>{' '}
        </p>
      </div>
    </main>
  );
}

export default Signup;
