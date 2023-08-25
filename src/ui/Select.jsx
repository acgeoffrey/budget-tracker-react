function Select({ options, value, onChange, ...props }) {
  return (
    <select
      value={value}
      onChange={onChange}
      {...props}
      className='rounded-md border border-solid border-gray-300 bg-white px-4 py-1 text-sm font-medium capitalize shadow-sm outline-emerald-600'
    >
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
