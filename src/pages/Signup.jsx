import SignupForm from '../features/authentication/SignupForm';
import Logo from '../ui/Logo';

function Signup() {
  return (
    <main className='grid min-h-screen grid-cols-[40%] content-center justify-center gap-9 bg-gray-100'>
      <Logo />
      <h3 className='text-center text-2xl'>Sign Up</h3>
      <SignupForm />
    </main>
  );
}

export default Signup;
