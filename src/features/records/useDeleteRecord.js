import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteRecord as deleteRecordAPI } from '../../services/apiRecords';
import { toast } from 'react-hot-toast';

export function useDeleteRecord() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteRecord } = useMutation({
    mutationFn: deleteRecordAPI,
    onSuccess: () => {
      toast.success('Record deleted');

      queryClient.invalidateQueries({ queryKey: ['records'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteRecord };
}
