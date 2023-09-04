import { useUser } from '../features/authentication/useUser';
import { useTags } from '../features/records/useTags';
import Loader from '../ui/Loader';
import TagCard from '../features/records/TagCard';
import TagTableOperations from '../features/records/TagTableOperations';
import { DateTime } from 'luxon';
import useMonthData from '../hooks/useMonthData';

const firstDay = DateTime.now().startOf('month');
const lastDay = DateTime.now().endOf('month');

function Tags() {
  const { isLoading: userLoading, user } = useUser();
  if (userLoading) <Loader />;

  const { body, startDate, endDate, setDateRange } = useMonthData(
    firstDay,
    lastDay,
  );
  console.log(body);
  const { isLoading, tags } = useTags(body, body);
  if (isLoading || userLoading) return <Loader />;

  console.log(tags);

  return (
    <>
      <div className='flex items-center justify-end'>
        <TagTableOperations
          startDate={startDate}
          endDate={endDate}
          setDateRange={setDateRange}
        />
      </div>
      <div>
        <TagCard tags={tags} currency={user?.data?.settings?.currency} />
      </div>
    </>
  );
}

export default Tags;
