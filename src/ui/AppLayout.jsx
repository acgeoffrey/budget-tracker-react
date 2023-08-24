import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

function AppLayout() {
  return (
    <div className='grid h-screen grid-cols-[1fr_5fr]'>
      <Header />
      <Sidebar />

      <main className='overflow-scroll bg-gray-50 pl-16 pr-12 pt-12'>
        <div className='max-auto  flex flex-col gap-12'>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
