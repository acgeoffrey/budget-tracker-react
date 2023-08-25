import { cloneElement, createContext, useContext, useState } from 'react';
// import { useOuterClick } from '../hooks/useOuterClick';
import { createPortal } from 'react-dom';
import { HiXMark } from 'react-icons/hi2';

const ModalContext = createContext();

function Modal({ children }) {
  const [openComponent, setOpenComponent] = useState('');

  const close = () => setOpenComponent('');
  const open = setOpenComponent;

  return (
    <ModalContext.Provider value={{ openComponent, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, openWindow }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(openWindow) });
}

function Window({ children, windowName }) {
  const { openComponent, close } = useContext(ModalContext);
  // const ref = useOuterClick(close);

  if (windowName !== openComponent) return null;

  return createPortal(
    <div className='bg-backdrop fixed left-0 top-0 z-50 h-screen w-[100%] backdrop-blur-sm transition-all duration-500'>
      <div
        className='translate fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] 
        rounded-lg bg-white px-3 py-5 transition-all duration-500'
      >
        <button
          onClick={close}
          className='absolute right-6 top-4 translate-x-3 rounded-md 
        border-none bg-none p-1 transition-all duration-200 hover:bg-gray-100'
        >
          <HiXMark className='h-6 w-6 text-gray-500' />
        </button>

        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
