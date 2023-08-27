import { Select, SelectItem } from '@tremor/react';

function SelectComponent({ options, value, onChange, ...props }) {
  return (
    <Select
      value={props.action === 'sort' && !value ? '-date' : value}
      onValueChange={onChange}
      className={` ${props.action === 'sort' ? 'w-[16rem]' : ''}`}
    >
      {options.map((option) => (
        <SelectItem value={option.value} key={option.value} icon={option.icon}>
          {option.label}
        </SelectItem>
      ))}
    </Select>

    // <select
    //   value={value}
    //   onChange={onChange}
    //   {...props}
    //   className='rounded-sm border border-solid border-gray-300 bg-white px-4 py-1 text-sm font-medium capitalize shadow-sm outline-emerald-600'
    // >
    //   {props.action !== 'sort' && (
    //     <option disabled={true} value=''>
    //       -- Choose a {props.action} --
    //     </option>
    //   )}
    //   {options.map((option) => (
    //     <option value={option.value} key={option.value}>
    //       {option.label}
    //     </option>
    //   ))}
    // </select>
  );
}

export default SelectComponent;
