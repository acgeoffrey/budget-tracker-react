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
      className={`bg-gray-extraLight border-gray-light flex flex-grow flex-col gap-4 rounded-md border-2 px-7 py-5`}
    >
      <div className='flex items-center gap-6 '>
        {icon}
        <div>
          {!amount ? (
            <p>Not enough data</p>
          ) : (
            <>
              <h4 className='text-gray-default text-lg uppercase'>{type}</h4>
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

          <p className='text-gray-medium text-sm'>
            <span className='text-gray-veryDark font-number font-medium'>
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
