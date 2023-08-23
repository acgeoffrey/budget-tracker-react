import { useState } from 'react';

import FormElement from '../../ui/FormElement';
import LoaderMini from '../../ui/LoaderMini';
import { useLogin } from './useLogin';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail('');
          setPassword('');
        },
      },
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='overflow-hidden rounded-xl border-[1px] border-solid border-gray-100 bg-white px-10 py-6 text-base'
    >
      <FormElement label='Email'>
        <input
          type='email'
          id='email'
          autoComplete='username'
          placeholder='user@email.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          className='input'
        />
      </FormElement>

      <FormElement label='Password'>
        <input
          type='password'
          id='password'
          placeholder='Min. 8 characters'
          autoComplete='current-password'
          value={password}
          disabled={isLoading}
          onChange={(e) => setPassword(e.target.value)}
          className='input'
        />
      </FormElement>

      <FormElement>
        <button className='button' disabled={isLoading}>
          {!isLoading ? 'Log in' : <LoaderMini />}
        </button>
      </FormElement>
    </form>
  );
}

export default LoginForm;
