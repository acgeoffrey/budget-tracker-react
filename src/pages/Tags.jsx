import { useState } from 'react';
import { useUser } from '../features/authentication/useUser';
import { useTags } from '../features/records/useTags';
import Loader from '../ui/Loader';
import TagCard from '../features/records/TagCard';
import TagTableOperations from '../features/records/TagTableOperations';
import { DateTime } from 'luxon';

function Tags() {
  const { isLoading: userLoading, user } = useUser();
  if (userLoading) <Loader />;

  const date = new Date();
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  const [dateRange, setDateRange] = useState([firstDay, lastDay]);
  const [startDate, endDate] = dateRange;

  let body = { startDate: firstDay, endDate: lastDay };

  if (startDate && endDate) {
    body = {
      startDate,
      endDate,
    };
  }

  const { isLoading, tags } = useTags(body, endDate);
  if (isLoading || userLoading) return <Loader />;

  console.log(tags);

  return (
    <>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-medium'>Overview on Tags</h1>
        <TagTableOperations
          startDate={startDate}
          endDate={endDate}
          setDateRange={setDateRange}
        />
      </div>
      <div>
        <TagCard tags={tags} currency={user?.data?.settings[0]?.currency} />
      </div>
    </>
  );
}

export default Tags;
