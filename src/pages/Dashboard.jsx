import { DateTime } from 'luxon';
import { LiaPiggyBankSolid } from 'react-icons/lia';
import { GiReceiveMoney } from 'react-icons/gi';
import { PiMoneyLight } from 'react-icons/pi';

import DashboardMainCard from '../features/dashboard/DashboardMainCard';
import { useUser } from '../features/authentication/useUser';
import Loader from '../ui/Loader';
import { useTags } from '../features/records/useTags';
import { totalStatsHelper } from '../utils/helpers';
import { useDateData } from '../features/dashboard/useDateData';
import DashboardGraph from '../features/dashboard/DashboardGraph';

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

  const { isLoading: dateDataLoading, dateData } = useDateData(
    currentMonthBody,
    currLastDay,
  );

  if (currentLoading || previousLoading || userLoading || dateDataLoading)
    return <Loader />;

  const dateWiseExpenses = dateData?.data?.dateWiseExpenses;
  // console.log(dateWiseExpenses);

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
      <h1 className='text-center text-xl font-medium'>Monthly Summary</h1>
      <div className='flex items-center justify-around gap-5'>
        <DashboardMainCard
          type='savings'
          amount={currentSavings}
          currency={user?.data?.settings[0]?.currency}
          difference={currentSavings - previousSavings}
          icon={
            <LiaPiggyBankSolid className='rounded-full bg-emerald-100 p-2 text-6xl text-emerald-700' />
          }
        />
        <DashboardMainCard
          type='expenses'
          amount={currExpenseAmount}
          currency={user?.data?.settings[0]?.currency}
          difference={currExpenseAmount - prevExpenseAmount}
          icon={
            <PiMoneyLight className='rounded-full bg-rose-100 p-3 text-6xl text-rose-700' />
          }
        />
        <DashboardMainCard
          type='income'
          amount={currIncomeAmount}
          currency={user?.data?.settings[0]?.currency}
          difference={currIncomeAmount - prevIncomeAmount}
          icon={
            <GiReceiveMoney className='rounded-full bg-sky-100 p-3 text-6xl text-sky-700' />
          }
        />
      </div>
      <div>
        <DashboardGraph
          chartData={dateWiseExpenses}
          currency={user?.data?.settings[0]?.currency}
        />
      </div>
    </>
  );
}

export default Dashboard;
