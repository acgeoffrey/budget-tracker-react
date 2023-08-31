import AddRecord from '../features/records/AddRecord';
import Logo from './Logo';
import MainNav from './MainNav';

function Sidebar() {
  return (
    <aside className='row-span-full flex flex-col justify-between border-r border-solid border-r-gray-light bg-secondary-extraLight p-6'>
      <div>
        <Logo />
        <MainNav />
      </div>
      <AddRecord type='sidebar' />
    </aside>
  );
}

export default Sidebar;
