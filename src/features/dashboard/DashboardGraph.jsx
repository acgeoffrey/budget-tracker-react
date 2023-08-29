import { AreaChart, Card, Title } from '@tremor/react';
import { formatCurrency } from '../../utils/helpers';

function DashboardGraph({ chartData, currency }) {
  return (
    <Card>
      <Title>Expense comparison with last month</Title>
      <AreaChart
        className='mt-4 h-72 font-number'
        data={chartData}
        index='label'
        categories={['current', 'previous']}
        colors={['indigo', 'cyan']}
        curveType='monotone'
        valueFormatter={(data) => formatCurrency(currency, data)}
        minValue={100}
        yAxisWidth={75}
      />
    </Card>
  );
}

export default DashboardGraph;
