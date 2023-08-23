import LoginForm from '../features/authentication/LoginForm';
import Logo from '../ui/Logo';

function Login() {
  return (
    <main className='grid min-h-screen grid-cols-[40%] content-center justify-center gap-9 bg-gray-100'>
      <Logo />
      <h3 className='text-center text-2xl'>Login</h3>
      <LoginForm />
    </main>
  );
}

export default Login;
