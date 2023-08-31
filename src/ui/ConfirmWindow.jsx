import LoaderMini from './LoaderMini';

function ConfirmWindow({ name, onConfirm, disabled, onCloseModal, action }) {
  return (
    <div className='flex w-[30rem] flex-col gap-2 p-3'>
      <h3 className='text-xl font-medium'>{name}</h3>
      <p className='mb-5 text-gray-medium'>
        Are you sure? This action cannot be undone
      </p>

      <div className='flex justify-end gap-5'>
        <button
          className='button border border-solid border-gray-muted bg-white px-3
          text-gray-default hover:bg-gray-extraLight'
          disabled={disabled}
          onClick={onCloseModal}
        >
          Cancel
        </button>
        <button
          className='rounded-md bg-red-600 px-3 capitalize text-red-100 hover:bg-red-700'
          disabled={disabled}
          onClick={onConfirm}
        >
          {disabled ? <LoaderMini /> : action}
        </button>
      </div>
    </div>
  );
}

export default ConfirmWindow;
