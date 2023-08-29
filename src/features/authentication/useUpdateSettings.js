import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateSettings as updateSettingsAPI } from '../../services/apiUser';
import { toast } from 'react-hot-toast';

export function useUpdateSettings() {
  const queryClient = useQueryClient();

  const { mutate: updateSettings, isLoading: isUpdatingSettings } = useMutation(
    {
      mutationFn: updateSettingsAPI,
      onSuccess: () => {
        toast.success('Settings Updated');
        queryClient.invalidateQueries({ queryKey: ['user'] });
      },
      onError: () => {
        toast.error('Error updating settings');
      },
    },
  );

  return { updateSettings, isUpdatingSettings };
}
