import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateRecord as updateRecordAPI } from '../../services/apiRecords';
import { toast } from 'react-hot-toast';

export function useUpdateRecord() {
  const queryClient = useQueryClient();

  const { mutate: updateRecord, isLoading: isUpdating } = useMutation({
    mutationFn: ({ updateData, id }) => updateRecordAPI(updateData, id),
    onSuccess: () => {
      toast.success('Entry updated');
      queryClient.invalidateQueries({ queryKey: ['records'] });
      queryClient.invalidateQueries({ queryKey: ['calendar'] });
      queryClient.invalidateQueries({ queryKey: ['tags'] });
      queryClient.invalidateQueries({ queryKey: ['dateData'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateRecord, isUpdating };
}
