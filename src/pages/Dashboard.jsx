import { DateTime, Interval } from 'luxon';
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
const currLastDay = DateTime.now().endOf('month');

const prevFirstDay = DateTime.now().startOf('month').minus({ month: 1 });
const prevLastDay = DateTime.now().endOf('month').minus({ month: 1 });

let interval = Interval.fromDateTimes(currFirstDay, currLastDay)
  .splitBy({ day: 1 })
  .map((date) => date.start.toISODate());

function Dashboard() {
  const { isLoading: userLoading, user } = useUser();
  if (userLoading) <Loader />;

  const currentMonthBody = {
    startDate: currFirstDay.toUTC().toISO(),
    endDate: currLastDay.toUTC().toISO(),
  };

  const previousMonthBody = {
    startDate: prevFirstDay.toUTC().toISO(),
    endDate: prevLastDay.toUTC().toISO(),
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
  const { isLoading: prevDateDataLoading, dateData: prevDateData } =
    useDateData(previousMonthBody, prevLastDay);

  if (
    currentLoading ||
    previousLoading ||
    userLoading ||
    dateDataLoading ||
    prevDateDataLoading
  )
    return <Loader />;

  const dateWiseExpenses = dateData?.data?.dateWiseExpenses;
  const previousDateWiseExpenses = prevDateData?.data?.dateWiseExpenses;

  const data = interval.map((date) => {
    return {
      label: DateTime.fromISO(date).toFormat('dd'),
      current: dateWiseExpenses
        ?.filter((expense) => date === expense._id)
        .reduce((acc, curr) => acc + parseInt(curr.totalExpenses), 0),
      previous: previousDateWiseExpenses
        ?.filter(
          (expense) =>
            DateTime.fromISO(date).toFormat('dd') ===
            DateTime.fromISO(expense._id).toFormat('dd'),
        )
        .reduce((acc, curr) => acc + parseInt(curr.totalExpenses), 0),
    };
  });

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
  // console.log(((currentSavings / previousSavings) * 100).toFixed(1) - 100);
  // console.log(previousSavings, cursa);
  return (
    <>
      <h1 className='text-center text-xl font-medium'>Monthly Summary</h1>
      <div className='flex items-center justify-around gap-5'>
        <DashboardMainCard
          type='savings'
          amount={currentSavings}
          currency={user?.data?.settings?.currency}
          difference={
            previousSavings && currentSavings
              ? (currentSavings - previousSavings).toFixed(1)
              : 0
          }
          icon={
            <LiaPiggyBankSolid className='rounded-full bg-primary-light p-2 text-6xl text-primary-mildDark' />
          }
        />
        <DashboardMainCard
          type='expenses'
          amount={currExpenseAmount}
          currency={user?.data?.settings?.currency}
          difference={currExpenseAmount - prevExpenseAmount}
          icon={
            <PiMoneyLight className='rounded-full bg-rose-100 p-3 text-6xl text-rose-700' />
          }
        />
        <DashboardMainCard
          type='income'
          amount={currIncomeAmount}
          currency={user?.data?.settings?.currency}
          difference={currIncomeAmount - prevIncomeAmount}
          icon={
            <GiReceiveMoney className='rounded-full bg-tertiary-light p-3 text-6xl text-tertiary-mildDark' />
          }
        />
      </div>
      <div>
        <DashboardGraph
          chartData={data}
          currency={user?.data?.settings?.currency}
        />
      </div>
    </>
  );
}

export default Dashboard;
