import { useState } from 'react';
import Logo from '../ui/Logo';
import FormElement from '../ui/FormElement';
import { Link } from 'react-router-dom';

function ForgetPassword() {
  const [email, setEmail] = useState('');

  function handleSubmit() {}

  return (
    <main className='grid min-h-screen grid-cols-[40%] content-center justify-center gap-9 bg-gray-100'>
      <Logo />
      <h3 className='text-center text-2xl'>Password Reset</h3>
      <form onSubmit={handleSubmit}>
        <FormElement label='Enter your email'>
          <input
            type='email'
            value={email}
            onChange={setEmail}
            className='input'
          />
        </FormElement>
        <FormElement>
          <button className='button mx-auto w-96'>
            Send Reset Password Link
          </button>
        </FormElement>
      </form>
      <div className='flex flex-col items-center justify-center gap-2'>
        <Link to='/login' className='text-emerald-600'>
          Go back to Login
        </Link>{' '}
      </div>
    </main>
  );
}

export default ForgetPassword;
