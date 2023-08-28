import { AreaChart, Card, Title } from '@tremor/react';
import { formatCurrency } from '../../utils/helpers';

function DashboardGraph({ chartData, currency }) {
  return (
    <Card>
      <Title>Expense comparison with last month</Title>
      <AreaChart
        className='mt-4 h-72'
        data={chartData}
        index='label'
        categories={['current', 'previous']}
        colors={['indigo', 'cyan']}
      />
    </Card>
  );
}

export default DashboardGraph;
