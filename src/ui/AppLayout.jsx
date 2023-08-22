import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

function AppLayout() {
  return (
    <div className='grid grid-cols-[1fr_5fr] h-screen'>
      <Header />
      <Sidebar />

      <main className='bg-gray-50 pt-12 pl-16 pr-12'>
        <div className='max-auto overflow-scroll flex flex-col gap-12'>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
