import { AreaChart, Card, Title } from '@tremor/react';
import { formatCurrency } from '../../utils/helpers';

function DashboardGraph({ chartData, currency }) {
  return (
    <Card>
      <Title>Expenses over this month</Title>
      <AreaChart
        className='mt-4 h-72'
        data={chartData}
        index='_id'
        categories={['totalExpenses']}
        colors={['indigo']}
      />
    </Card>
  );
}

export default DashboardGraph;
