import { Slider } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

const h3Classes = `font-medium text-gray-800`;

function Filter() {
  return (
    <div
      className='absolute right-0 z-50 mt-2 flex w-[20rem] flex-col gap-5 rounded-md 
    border border-solid border-gray-200 bg-white px-8 py-3 shadow-2xl'
    >
      <h3 className='text-lg font-semibold uppercase tracking-wide text-sky-600'>
        Filters
      </h3>

      <div className='flex flex-col gap-3'>
        <h3 className={h3Classes}>Dates</h3>
        <DatePicker
          label='Start Date'
          slotProps={{ textField: { size: 'small' } }}
        />
        <DatePicker
          label='End Date'
          slotProps={{ textField: { size: 'small' } }}
        />
      </div>

      <div>
        <h3 className={h3Classes}>Amount</h3>
        <Slider
          getAriaLabel={() => 'Amount range'}
          value={[20, 80]}
          // onChange={handleChange}
          valueLabelDisplay='auto'
          getAriaValueText={() => 'Amount'}
          sx={{
            color: '#0284c7',
          }}
        />
      </div>
    </div>
  );
}

export default Filter;
