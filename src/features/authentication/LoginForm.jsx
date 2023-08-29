import { useEffect, useState } from 'react';

import FormElement from '../../ui/FormElement';
import LoaderMini from '../../ui/LoaderMini';
import { useLogin } from './useLogin';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ email: '', password: '' });
  const { login, isLoading } = useLogin();

  useEffect(
    function () {
      if (error.email === 'Email field is required') {
        if (email.length > 0) setError((err) => ({ ...err, email: '' }));
        else setError((err) => ({ ...err, email: 'Email field is required' }));
      }

      if (error.password === 'Password must contain minimum of 8 characters') {
        if (password.length > 7) setError((err) => ({ ...err, password: '' }));
        else
          setError((err) => ({
            ...err,
            password: 'Password must contain minimum of 8 characters',
          }));
      }
    },
    [error.password, password.length, error.email, email.length],
  );

  function handleSubmit(e) {
    e.preventDefault();
    setError({ email: '', password: '' });
    if (!email || !password) {
      setError((err) => ({ ...err, email: 'Email field is required' }));
      setError((err) => ({
        ...err,
        password: 'Password must contain minimum of 8 characters',
      }));
      return;
    }

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail('');
          setPassword('');
          setError({ email: '', password: '' });
        },
      },
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='overflow-hidden rounded-xl border-[1px] border-solid border-gray-light bg-white px-10 py-6 text-base'
    >
      <FormElement label='Email' error={error.email}>
        <input
          type='email'
          id='email'
          autoComplete='username'
          placeholder='user@email.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          className={`input ${error.email.length > 0 ? ' border-red-600' : ''}`}
        />
      </FormElement>

      <FormElement label='Password' error={error.password}>
        <input
          type='password'
          id='password'
          placeholder='Enter password'
          autoComplete='current-password'
          value={password}
          disabled={isLoading}
          onChange={(e) => setPassword(e.target.value)}
          className={`input ${
            error.password.length > 0 ? 'border-red-600' : ''
          }`}
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
