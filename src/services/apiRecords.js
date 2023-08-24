import { API_URLS, customFetch } from '../utils/api';

export async function getRecords(query, page) {
  const data = await customFetch(API_URLS.getAllRecords(query, page), {
    method: 'GET',
  });

  if (data.status === 'fail') throw new Error(data.data);

  return data?.data?.records;
}

export async function createRecord(body) {
  const data = await customFetch(API_URLS.createRecord(), {
    method: 'POST',
    body,
  });

  if (data.status === 'fail') throw new Error(data.data);

  return data;
}
