import { useState } from 'react';
import Logo from '../ui/Logo';
import FormElement from '../ui/FormElement';
import { Link } from 'react-router-dom';
import { useForgetPassword } from '../features/authentication/useForgetPassword';
import Loader from '../ui/Loader';
import LoaderMini from '../ui/LoaderMini';

function ForgetPassword() {
  const [email, setEmail] = useState('');

  const { isLoading, forgetPassword } = useForgetPassword();

  if (isLoading) return <Loader />;

  function handleSubmit(e) {
    e.preventDefault();
    forgetPassword({ email });
  }

  return (
    <main className='grid min-h-screen grid-cols-[40%] content-center justify-center bg-gray-light'>
      <div className='mx-auto w-48'>
        <Logo />
      </div>
      <h3 className='mb-9 text-center text-2xl'>Password Reset</h3>
      <form onSubmit={handleSubmit}>
        <FormElement label='Enter your email'>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='input'
            disabled={isLoading}
          />
        </FormElement>
        <FormElement>
          <button className='button mx-auto w-96' disabled={isLoading}>
            {isLoading ? <LoaderMini /> : 'Send Reset Password Link'}
          </button>
        </FormElement>
      </form>
      <div className='mt-9 flex flex-col items-center justify-center gap-2'>
        <Link to='/login' className='text-primary-default'>
          Go back to Login
        </Link>{' '}
      </div>
    </main>
  );
}

export default ForgetPassword;
