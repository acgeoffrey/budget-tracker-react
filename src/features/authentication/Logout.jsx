import { HiOutlineArrowRightOnRectangle } from 'react-icons/hi2';
import { useLogout } from './useLogout';
import Modal from '../../ui/Modal';
import ConfirmLogout from '../../ui/ConfirmWindow';

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <Modal>
      <Modal.Open openWindow='logout'>
        <button
          className='button-icon flex items-center justify-center gap-2 
      hover:bg-secondary-muted'
        >
          <HiOutlineArrowRightOnRectangle />
        </button>
      </Modal.Open>
      <Modal.Window windowName='logout'>
        <ConfirmLogout
          name='Logout'
          disabled={isLoading}
          onConfirm={logout}
          action='logout'
        />
      </Modal.Window>
    </Modal>
  );
}

export default Logout;
