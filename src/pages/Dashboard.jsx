import { DateTime } from 'luxon';
import DashboardMainCard from '../features/dashboard/DashboardMainCard';
import { useUser } from '../features/authentication/useUser';
import Loader from '../ui/Loader';
import { useTags } from '../features/records/useTags';
import { totalStatsHelper } from '../utils/helpers';

const currFirstDay = DateTime.now().startOf('month');
const currLastDay = DateTime.now().endOf('day');

const prevFirstDay = DateTime.now().startOf('month').minus({ month: 1 });
const prevLastDay = DateTime.now().endOf('day').minus({ month: 1 });

function Dashboard() {
  const { isLoading: userLoading, user } = useUser();
  if (userLoading) <Loader />;

  const currentMonthBody = {
    startDate: currFirstDay.toUTC().toJSDate(),
    endDate: currLastDay.toUTC().toJSDate(),
  };

  const previousMonthBody = {
    startDate: prevFirstDay.toUTC().toJSDate(),
    endDate: prevLastDay.toUTC().toJSDate(),
  };

  const { isLoading: currentLoading, tags: currentMonthData } = useTags(
    currentMonthBody,
    currLastDay,
  );
  const { isLoading: previousLoading, tags: previousMonthData } = useTags(
    previousMonthBody,
    prevLastDay,
  );

  if (currentLoading || previousLoading || userLoading) return <Loader />;

  const { expenseStats: currExpenseStats, incomeStats: currIncomeStats } =
    totalStatsHelper(currentMonthData);

  const { expenseStats: prevExpenseStats, incomeStats: prevIncomeStats } =
    totalStatsHelper(previousMonthData);

  const currIncomeAmount = Number(currIncomeStats?.totalAmount) || 0;
  const currExpenseAmount = Number(currExpenseStats?.totalAmount) || 0;
  const currentSavings = currIncomeAmount - currExpenseAmount;

  const prevIncomeAmount = Number(prevIncomeStats?.totalAmount) || 0;
  const prevExpenseAmount = Number(prevExpenseStats?.totalAmount) || 0;
  const previousSavings = prevIncomeAmount - prevExpenseAmount;

  return (
    <>
      {/* <h1 className='text-center text-xl font-medium'>Monthly Statistics</h1> */}
      <div className='flex items-center justify-around gap-5'>
        <DashboardMainCard
          type='savings'
          amount={currentSavings}
          currency={user?.data?.settings[0]?.currency}
          difference={currentSavings - previousSavings}
          color='green'
        />
        <DashboardMainCard
          type='expenses'
          amount={currExpenseAmount}
          currency={user?.data?.settings[0]?.currency}
          difference={currExpenseAmount - prevExpenseAmount}
          color='sky'
        />
        <DashboardMainCard
          type='income'
          amount={currIncomeAmount}
          currency={user?.data?.settings[0]?.currency}
          difference={currIncomeAmount - prevIncomeAmount}
          color='yellow'
        />
      </div>
    </>
  );
}

export default Dashboard;
