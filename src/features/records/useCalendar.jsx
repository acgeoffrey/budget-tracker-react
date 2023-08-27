import { useQuery } from '@tanstack/react-query';
import { getCalendarRecord } from '../../services/apiRecords';

export function useCalendar(type, date1, date2) {
  console.log(date1, date2);
  const { isLoading, data: calendar } = useQuery({
    queryKey: ['calendar', type, date1],
    queryFn: () => getCalendarRecord(type, date1, date2),
  });

  return { isLoading, calendar };
}
