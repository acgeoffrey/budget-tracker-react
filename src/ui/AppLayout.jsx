import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

function AppLayout() {
  return (
    <div className='grid grid-cols-[1fr_4fr] grid-rows-[auto_1fr] h-screen'>
      <Header />
      <Sidebar />

      <div className='overflow-scroll'>
        <main className='max-auto'>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
