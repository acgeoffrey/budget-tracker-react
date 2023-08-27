import { BadgeDelta } from '@tremor/react';
import { formatCurrency } from '../../utils/helpers';

function DashboardMainCard({
  amount,
  type,
  difference,
  currency,
  color = 'sky',
}) {
  // if (type === 'expenses') difference = Number(difference) * -1;

  return (
    <div
      className={`flex flex-grow flex-col gap-2 rounded-md bg-${color}-50 border-2 px-7 py-5 border-${color}-600`}
    >
      <h4 className='text-xl capitalize'>{type}</h4>
      <h2 className='mb-2 font-number text-2xl font-semibold'>
        {formatCurrency(currency, amount)}
      </h2>

      <div className='flex items-center justify-start gap-2'>
        <BadgeDelta
          deltaType={difference < 0 ? 'moderateDecrease' : 'moderateIncrease'}
          isIncreasePositive={type === 'expenses' ? false : true}
          size='sm'
        />

        <p className='text-sm text-gray-500'>
          <span className='font-number font-medium text-gray-900'>
            {formatCurrency(currency, difference)}
          </span>{' '}
          from last month
        </p>
      </div>
    </div>
  );
}

export default DashboardMainCard;
