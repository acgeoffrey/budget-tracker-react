import Logo from './Logo';
import MainNav from './MainNav';

function Sidebar() {
  return (
    <aside className='p-6 row-span-full flex flex-col gap-12'>
      <Logo />
      <MainNav />
    </aside>
  );
}

export default Sidebar;
