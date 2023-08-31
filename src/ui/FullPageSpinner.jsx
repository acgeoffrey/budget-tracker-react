import Loader from './Loader';

function FullPageSpinner() {
  return (
    <main className='flex h-screen items-center justify-center'>
      <Loader />
    </main>
  );
}

export default FullPageSpinner;
