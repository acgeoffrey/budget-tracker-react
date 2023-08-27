import { useMutation } from '@tanstack/react-query';
import { updateSettings as updateSettingsAPI } from '../../services/apiUser';
import { toast } from 'react-hot-toast';

export function useUpdateSettings() {
  const { mutate: updateSettings, isLoading: isUpdatingSettings } = useMutation(
    {
      mutationFn: updateSettingsAPI,
      onSuccess: () => {
        toast.success('Settings Updated');
      },
      onError: () => {
        toast.error('Error updating settings');
      },
    },
  );

  return { updateSettings, isUpdatingSettings };
}
