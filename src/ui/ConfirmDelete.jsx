function ConfirmDelete({ name, onConfirm, disabled, onCloseModal }) {
  return (
    <div className='flex w-[30rem] flex-col gap-2 p-3'>
      <h3 className='text-xl font-medium'>Delete {name}</h3>
      <p className='mb-5 text-gray-500'>
        Are you sure? This action cannot be undone.
      </p>

      <div className='flex justify-end gap-5'>
        <button
          className='button border border-solid border-gray-200 bg-white px-3
          text-gray-600 hover:bg-gray-50'
          disabled={disabled}
          onClick={onCloseModal}
        >
          Cancel
        </button>
        <button
          className='button bg-red-600 px-3 text-red-100 hover:bg-red-700'
          disabled={disabled}
          onClick={onConfirm}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
