import {
  Card,
  Text,
  Flex,
  Metric,
  CategoryBar,
  BadgeDelta,
  Grid,
} from '@tremor/react';
import { formatCurrency } from '../utils/helpers';

// const categories = [
//   {
//     title: 'Sales',
//     metric: '$ 456,000',
//   },
//   {
//     title: 'Transactions',
//     metric: '89,123',
//   },
//   {
//     title: 'Merchants',
//     metric: '22',
//   },
//   {
//     title: 'Orders',
//     metric: '678',
//   },
// ];

export default function TagCard({ tags, currency }) {
  const categories = tags?.data?.categoryStats;
  const totalStats = tags?.data?.totalStats;

  const expenseStats =
    totalStats?.[0]._id.toLowerCase() === 'expense'
      ? totalStats?.[0]
      : totalStats?.[1];

  const incomeStats =
    totalStats?.[0]._id.toLowerCase() === 'income'
      ? totalStats?.[0]
      : totalStats?.[1];

  let percentageSpent;
  if (expenseStats?.totalAmount && incomeStats?.totalAmount) {
    percentageSpent = (
      (Number(expenseStats.totalAmount) / Number(incomeStats.totalAmount)) *
      100
    ).toFixed(1);
  }

  return (
    <Card className='mx-auto'>
      <Card>
        <Flex>
          <Text className='truncate font-bold'>Total Expense</Text>
          <BadgeDelta deltaType='moderateIncrease'>13.1%</BadgeDelta>
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
            spent on a total of{' '}
            <span className='font-bold text-gray-900'>
              {expenseStats?.numRecords}
            </span>{' '}
            Expenses
          </Text>
        </Flex>
        <CategoryBar
          values={[10, 25, 45, 20]}
          colors={['emerald', 'yellow', 'orange', 'red']}
          markerValue={percentageSpent}
          tooltip={`${percentageSpent}% spent on your total income`}
          className='mt-2'
        />
      </Card>
      <Grid numItemsSm={3} className='mt-4 gap-4'>
        {categories?.map((item) => (
          <Card key={item._id}>
            <h2 className='mt-2 truncate text-2xl font-normal capitalize text-gray-600'>
              {item?._id?.toLowerCase()}
            </h2>
            <h3 className='font-number text-lg font-semibold text-gray-900'>
              {formatCurrency(currency, item.totalAmount)}
            </h3>
          </Card>
        ))}
      </Grid>
    </Card>
  );
}
