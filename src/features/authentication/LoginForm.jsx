import { useState } from 'react';

import FormElement from '../../ui/FormElement';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
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
          onChange={(e) => setPassword(e.target.value)}
          className='input'
        />
      </FormElement>

      <FormElement>
        <button className='button'>Log in</button>
      </FormElement>
    </form>
  );
}

export default LoginForm;
