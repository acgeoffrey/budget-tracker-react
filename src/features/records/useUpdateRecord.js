import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateRecord as updateRecordAPI } from '../../services/apiRecords';
import { toast } from 'react-hot-toast';

export function useUpdateRecord() {
  const queryClient = useQueryClient();

  const { mutate: updateRecord, isLoading: isUpdating } = useMutation({
    mutationFn: updateRecordAPI,
    onSuccess: () => {
      toast.success('Entry updated');
      queryClient.invalidateQueries({ queryKey: ['records'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateRecord, isUpdating };
}
