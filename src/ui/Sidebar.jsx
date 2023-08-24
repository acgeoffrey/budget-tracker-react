import Logo from './Logo';
import MainNav from './MainNav';

function Sidebar() {
  return (
    <aside className='row-span-full flex flex-col gap-10 p-6 py-10'>
      <Logo />
      <MainNav />
    </aside>
  );
}

export default Sidebar;
