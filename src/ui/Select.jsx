function Select({ options, value, onChange, ...props }) {
  return (
    <select
      value={value}
      onChange={onChange}
      {...props}
      className='rounded-sm border border-solid border-gray-300 bg-white px-4 py-1 text-sm font-medium capitalize shadow-sm outline-emerald-600'
    >
      <option disabled={true} value=''>
        -- {props.action} --
      </option>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
