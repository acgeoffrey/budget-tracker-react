import { BadgeDelta } from '@tremor/react';
import { formatCurrency } from '../../utils/helpers';

function DashboardMainCard({
  amount,
  type,
  difference,
  currency,

  icon,
}) {
  // if (type === 'expenses') difference = Number(difference) * -1;

  return (
    <div
      className={`flex flex-grow flex-col gap-4 rounded-md border-2 border-gray-100 bg-gray-50 px-7 py-5`}
    >
      <div className='flex items-center gap-6 '>
        {icon}
        <div>
          {!amount ? (
            <p>Not enough data</p>
          ) : (
            <>
              <h4 className='text-lg uppercase text-gray-600'>{type}</h4>
              <h2 className='mb-2 font-number text-2xl font-semibold'>
                {formatCurrency(currency, amount)}
              </h2>
            </>
          )}
        </div>
      </div>

      {difference ? (
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
      ) : null}
    </div>
  );
}

export default DashboardMainCard;
