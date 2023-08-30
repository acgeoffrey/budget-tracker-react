import Logo from '../ui/Logo';

function PageNotFound() {
  return (
    <main className='grid min-h-screen grid-cols-[40%] content-center justify-center gap-9 bg-gray-light'>
      <div className='mx-auto w-48'>
        <Logo />
      </div>
      <img src='./page_not_found.svg' alt='' />
      <h3 className='text-center text-2xl uppercase'>Page Not Found</h3>
    </main>
  );
}

export default PageNotFound;
