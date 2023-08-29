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
const color = () => colors[Math.floor(Math.random() * colors.length)];

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
  console.log(percentageSpent);

  const isSaving = percentageSpent >= 100 ? false : true;

  if (!expenseStats)
    return (
      <Card className='bg-secondary-extraLight'>
        <p>Not enough data</p>
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
            {formatCurrency(currency, expenseStats?.totalAmount)}
          </Metric>
          <Text>
            spent on over{' '}
            <span className='text-gray-veryDark font-bold'>
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
        {categories?.map((item) => (
          <Card key={item._id} className={`bg-${color()}-100`}>
            <h2 className='text-gray-mildDark mt-2 truncate text-xl font-medium capitalize'>
              {item?._id?.toLowerCase()}
            </h2>
            <h3 className='text-gray-veryDark font-number text-lg font-semibold'>
              {formatCurrency(currency, item.totalAmount)}
            </h3>
            <p className='text-gray-default mt-2'>{item.numRecords} Expense</p>
          </Card>
        ))}
      </Grid>
      {/* </Card> */}
    </>
  );
}
