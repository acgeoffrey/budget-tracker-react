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

  const firstDay = DateTime.now().startOf('month');
  const lastDay = DateTime.now().endOf('day');

  // console.log(DateTime.now().startOf('month').toJSDate(), lastDay);

  const [dateRange, setDateRange] = useState([
    firstDay.toJSDate(),
    lastDay.toJSDate(),
  ]);
  const [startDate, endDate] = dateRange;

  let body = {
    startDate: firstDay.toUTC().toISO(),
    endDate: lastDay.toUTC().toISO(),
  };

  if (startDate && endDate) {
    body = {
      startDate: DateTime.fromJSDate(startDate).startOf('day').toJSDate(),
      endDate: DateTime.fromJSDate(endDate).endOf('day').toJSDate(),
    };
  }

  const { isLoading, tags } = useTags(body, endDate);
  if (isLoading || userLoading) return <Loader />;

  // console.log(tags);

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
