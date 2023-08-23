function FormElement({ label, error, children }) {
  // console.log(children.props);
  return (
    <div className='flex flex-col py-3'>
      {label && (
        <label htmlFor={children.props.id} className='mb-3 font-medium'>
          {label}
        </label>
      )}
      {children}
      {error && <span className='text-sm text-red-700'>{error}</span>}
    </div>
  );
}

export default FormElement;
