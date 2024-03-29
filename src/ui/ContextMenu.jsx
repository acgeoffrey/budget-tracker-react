import { useOuterClick } from '../hooks/useOuterClick';

function ContextMenu({ children, open, handleClose }) {
  const ref = useOuterClick(handleClose);

  if (!open) return null;
  return (
    <div
      className='absolute right-0 z-40 space-y-3 rounded-md bg-white px-4 py-3 shadow-lg'
      ref={ref}
    >
      {children}
    </div>
  );
}

export default ContextMenu;
