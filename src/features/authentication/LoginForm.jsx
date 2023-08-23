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
    <form onSubmit={handleSubmit}>
      <FormElement label='Email'>
        <input
          type='email'
          id='email'
          autoComplete='username'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormElement>

      <FormElement label='Password'>
        <input
          type='password'
          id='password'
          autoComplete='current-password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormElement>

      <button>Log in</button>
    </form>
  );
}

export default LoginForm;
