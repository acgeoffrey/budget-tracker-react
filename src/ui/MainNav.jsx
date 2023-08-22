import { NavLink } from 'react-router-dom';
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineDocumentChartBar,
  HiOutlineHome,
  HiOutlineNewspaper,
} from 'react-icons/hi2';

const navLinkClasses = `  `;

const svgClasses = ``;

function MainNav() {
  return (
    <nav>
      <ul className='flex flex-col gap-3'>
        <li>
          <NavLink to='/dashboard' className='navLink'>
            <HiOutlineHome className='navSvg' />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/records' className='navLink'>
            <HiOutlineNewspaper className='navSvg' />
            <span>Records</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/calendar' className='navLink'>
            <HiOutlineCalendarDays className='navSvg' />
            <span>Calendar</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/budgets' className='navLink'>
            <HiOutlineDocumentChartBar className='navSvg' />
            <span>Budgets</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/settings' className='navLink'>
            <HiOutlineCog6Tooth className='navSvg' />
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
