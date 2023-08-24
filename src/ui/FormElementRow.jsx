function FormElementRow({ label, error, children }) {
  return (
    <div
      className='grid grid-cols-[20rem_1fr_1.2fr] items-center gap-9 border-b 
    border-solid border-b-gray-100 px-10 py-4 first:pt-0 last:border-none last:pb-0
    [&:has(.button)]:flex [&:has(button)]:justify-end [&:has(button)]:gap-5'
    >
      {label && (
        <label htmlFor={children.props.id} className='font-medium'>
          {label}
        </label>
      )}
      {children}
      {error && <span className='text-sm text-red-700'>{error}</span>}
    </div>
  );
}

export default FormElementRow;
