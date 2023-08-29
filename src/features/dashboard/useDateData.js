import { useQuery } from '@tanstack/react-query';
import { getDateWiseData } from '../../services/apiRecords';

export function useDateData(body, endDate) {
  // if (endDate) console.log(body);
  const {
    isLoading,
    data: dateData,
    error,
  } = useQuery({
    queryKey: ['dateData', endDate],
    queryFn: () => getDateWiseData(body),
    staleTime: 10 * 60 * 1000,
  });

  return { isLoading, dateData, error };
}
