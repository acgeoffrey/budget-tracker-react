import { AreaChart, Card, Title } from '@tremor/react';

function DashboardGraph({ chartData }) {
  return (
    <Card>
      <Title>Expenses over this month</Title>
      <AreaChart
        className='mt-4 h-72'
        data={chartData}
        index='_id'
        categories={['totalAmount']}
        colors={['indigo']}
      />
    </Card>
  );
}

export default DashboardGraph;
