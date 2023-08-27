import Logo from './Logo';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center gap-10'>
      <Logo />
      <div className='flex flex-col items-center justify-center gap-5'>
        <h1 className=' text-4xl font-bold'>Something went wrong</h1>
        <p className='font-number text-xl'>{error.message}</p>
        <button className='button w-96' onClick={resetErrorBoundary}>
          Go Home
        </button>
      </div>
    </div>
  );
}

export default ErrorFallback;
