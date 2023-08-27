import { Link } from 'react-router-dom';
import SignupForm from '../features/authentication/SignupForm';
import Logo from '../ui/Logo';

function Signup() {
  return (
    <main className='grid min-h-screen grid-cols-[40%] content-center justify-center gap-7 bg-gray-100'>
      <Logo />
      <h3 className='text-center text-2xl'>Sign Up</h3>
      <SignupForm />
      <div className='flex flex-col items-center justify-center gap-2'>
        <p>
          Already a user?{' '}
          <Link to='/login' className='text-emerald-600'>
            Login
          </Link>{' '}
        </p>
      </div>
    </main>
  );
}

export default Signup;
