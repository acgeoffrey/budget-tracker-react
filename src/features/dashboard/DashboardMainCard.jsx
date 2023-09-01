import { BadgeDelta } from '@tremor/react';
import { formatCurrency } from '../../utils/helpers';

function DashboardMainCard({ amount, type, difference, currency, icon }) {
  // if (type === 'expenses') difference = Number(difference) * -1;
  // console.log(difference);

  return (
    <div
      className={`flex flex-grow flex-col gap-4 rounded-md border-2 border-gray-light bg-gray-extraLight px-7 py-5`}
    >
      <div className='flex items-center gap-6 '>
        {icon}
        <div>
          <h4 className='text-lg uppercase text-gray-default'>{type}</h4>
          <h2 className='mb-2 font-number text-2xl font-semibold'>
            {formatCurrency(currency, amount)}
          </h2>
        </div>
      </div>

      {
        <div className='flex items-center justify-start gap-2'>
          <BadgeDelta
            deltaType={difference < 0 ? 'moderateDecrease' : 'moderateIncrease'}
            isIncreasePositive={type === 'expenses' ? false : true}
            size='sm'
          >
            <span className='font-number font-medium '>
              {formatCurrency(currency, Math.abs(difference))}
            </span>{' '}
          </BadgeDelta>

          <p className='text-sm text-gray-medium'>from last month</p>
        </div>
      }
    </div>
  );
}

export default DashboardMainCard;
