import Logo from './Logo';
import MainNav from './MainNav';

function Sidebar() {
  return (
    <aside className='border-r-gray-light row-span-full flex flex-col gap-10 border-r border-solid bg-secondary-extraLight p-6 py-10'>
      <Logo />
      <MainNav />
    </aside>
  );
}

export default Sidebar;
