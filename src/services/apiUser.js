import { API_URLS, customFetch } from '../utils/api';

export const updateSettings = async (body) => {
  const data = await customFetch(API_URLS.updateSettings(), {
    method: 'PATCH',
    body,
  });

  if (data.status === 'fail') throw new Error(data.data);
  return data;
};
