import {
  Card,
  Text,
  Flex,
  Metric,
  CategoryBar,
  BadgeDelta,
  Grid,
} from '@tremor/react';
import { formatCurrency } from '../../utils/helpers';

const colors = [
  'amber',
  'teal',
  'sky',
  'purple',
  'pink',
  'rose',
  'blue',
  'green',
  'orange',
  'stone',
];
// const color = () => colors[Math.floor(Math.random() * colors.length)];

export default function TagCard({ tags, currency }) {
  const categories = tags?.data?.categoryStats;
  const totalStats = tags?.data?.totalStats;

  const expenseStats =
    totalStats?.[0]?._id.toLowerCase() === 'expense'
      ? totalStats?.[0]
      : totalStats?.[1];

  const incomeStats =
    totalStats?.[0]?._id.toLowerCase() === 'income'
      ? totalStats?.[0]
      : totalStats?.[1];

  let percentageSpent;
  if (expenseStats?.totalAmount && incomeStats?.totalAmount) {
    percentageSpent = (
      (Number(expenseStats.totalAmount) / Number(incomeStats.totalAmount)) *
      100
    ).toFixed(1);
  }
  // console.log(percentageSpent);

  const isSaving = percentageSpent >= 100 ? false : true;

  const totalAmount = expenseStats?.totalAmount;

  if (!expenseStats)
    return (
      <Card className='flex-cols flex items-center justify-center bg-secondary-extraLight'>
        <p>Not enough data. Start adding some Expenses.</p>
      </Card>
    );

  return (
    <>
      {/* <Card className=' mx-auto bg-white'> */}
      <Card className='bg-secondary-extraLight'>
        <Flex>
          <Text className='truncate font-bold'>Total Expense</Text>
          {percentageSpent && (
            <BadgeDelta
              deltaType={isSaving ? 'moderateIncrease' : 'moderateDecrease'}
            >
              {isSaving
                ? `${(100 - percentageSpent).toFixed(1)}% Savings`
                : `${(100 - percentageSpent).toFixed(1)}% Deficit`}
            </BadgeDelta>
          )}
        </Flex>
        <Flex
          justifyContent='start'
          alignItems='baseline'
          className='space-x-1'
        >
          <Metric className='font-number'>
            {formatCurrency(currency, totalAmount)}
          </Metric>
          <Text>
            spent on over{' '}
            <span className='font-bold text-gray-veryDark'>
              {categories?.length}
            </span>{' '}
            categories
          </Text>
        </Flex>
        {percentageSpent && (
          <CategoryBar
            values={[10, 25, 45, 20]}
            colors={['emerald', 'yellow', 'orange', 'red']}
            markerValue={percentageSpent}
            tooltip={`${percentageSpent}% spent on your total income`}
            className='mt-2'
          />
        )}
      </Card>
      <Grid numItemsSm={4} className='mt-4 gap-4'>
        {categories?.map((item, index) => (
          <div
            key={item._id}
            className={`bg-${colors[index]}-50 flex items-center justify-between gap-1 border-4 p-5 
            border-${colors[index]}-200 rounded`}
          >
            <div>
              <h2 className='mt-2 truncate text-xl font-medium capitalize text-gray-mildDark'>
                {item?._id?.toLowerCase()}
              </h2>
              <h3 className='font-number text-lg font-semibold text-gray-veryDark'>
                {formatCurrency(currency, item.totalAmount)}
              </h3>
              <p className='mt-2 text-gray-default'>
                {item.numRecords} Expense
              </p>
            </div>
            <div
              className={` bg-${colors[index]}-200 rounded-full p-3 text-gray-dark`}
            >
              {' '}
              <span className=' text-xl font-semibold'>
                {((item.totalAmount / totalAmount) * 100).toFixed(1)}
              </span>
              %
            </div>
          </div>
        ))}
      </Grid>
      {/* </Card> */}
    </>
  );
}
