import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createRecord as createRecordAPI } from '../../services/apiRecords';
import { toast } from 'react-hot-toast';

export function useCreateRecord() {
  const queryClient = useQueryClient();

  const { mutate: createRecord, isLoading: isCreating } = useMutation({
    mutationFn: createRecordAPI,
    onSuccess: () => {
      toast.success('Entry added.');
      queryClient.invalidateQueries({ queryKey: ['records'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createRecord, isCreating };
}
