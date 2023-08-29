import { Link } from 'react-router-dom';
import LoginForm from '../features/authentication/LoginForm';
import Logo from '../ui/Logo';

function Login() {
  return (
    <main className='bg-gray-light grid min-h-screen grid-cols-[40%] content-center justify-center gap-9'>
      <Logo />
      <h3 className='text-center text-2xl'>Login</h3>
      <LoginForm />
      <div className='flex flex-col items-center justify-center gap-2'>
        <p>
          New User?{' '}
          <Link to='/signup' className='text-primary-default'>
            Register
          </Link>{' '}
        </p>
        <p>
          Trouble Signing in?{' '}
          <Link to='/forgetpassword' className='text-primary-default'>
            Reset Password
          </Link>{' '}
        </p>
      </div>
    </main>
  );
}

export default Login;
