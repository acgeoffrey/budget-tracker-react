import { useState } from 'react';
import { useUser } from '../features/authentication/useUser';
import { useTags } from '../features/records/useTags';
import Loader from '../ui/Loader';
import TagCard from '../ui/TagCard';
import TagTableOperations from '../features/records/TagTableOperations';
import { DateTime } from 'luxon';

function Tags() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  let body = null;

  if (startDate && endDate) {
    setDateRange([
      DateTime.fromJSDate(startDate).toISODate(),
      DateTime.fromJSDate(endDate).toISODate(),
    ]);
    body = { startDate, endDate };
  }
  // console.log(body);

  const { isLoading, tags } = useTags(
    {
      startDate: '2023-08-11',
      endDate: '2023-08-20',
    },
    endDate,
  );
  const { isLoading: userLoading, user } = useUser();

  if (isLoading || userLoading) return <Loader />;

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
