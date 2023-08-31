import { AreaChart, Card, Title } from '@tremor/react';
import { formatCurrency } from '../../utils/helpers';

function DashboardGraph({ chartData, currency }) {
  return (
    <Card>
      <Title>Expense comparison with Last month</Title>
      <AreaChart
        className='mt-4 h-72 font-number'
        data={chartData}
        index='label'
        categories={['current', 'last']}
        colors={['indigo', 'cyan']}
        curveType='monotone'
        valueFormatter={(data) => formatCurrency(currency, data)}
        minValue={100}
        yAxisWidth={75}
      />
      <p className='text-center text-sm text-gray-medium'>Date (dd)</p>
    </Card>
  );
}

export default DashboardGraph;
