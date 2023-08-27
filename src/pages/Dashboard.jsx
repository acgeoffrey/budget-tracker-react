import { DateTime } from 'luxon';
import DashboardMainCard from '../features/dashboard/DashboardMainCard';
import { useUser } from '../features/authentication/useUser';
import Loader from '../ui/Loader';
import { useTags } from '../features/records/useTags';

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
  console.log(previousMonthData);

  return (
    <>
      <div className='flex items-center justify-end'></div>
      <div>
        <DashboardMainCard />
      </div>
    </>
  );
}

export default Dashboard;
