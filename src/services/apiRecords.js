import { API_URLS, customFetch } from '../utils/api';

export async function getRecords(type, tag, sort, dateStart, dateEnd, page) {
  const data = await customFetch(
    API_URLS.getAllRecords(type, tag, sort, dateStart, dateEnd, page),
    {
      method: 'GET',
    },
  );

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

export async function updateRecord(body, id) {
  const data = await customFetch(API_URLS.updateRecord(id), {
    method: 'PATCH',
    body,
  });

  if (data.status === 'fail') throw new Error(data.data);

  return data;
}

export async function deleteRecord(id) {
  const data = await customFetch(API_URLS.deleteRecord(id), {
    method: 'DELETE',
  });

  if (data.status === 'fail') throw new Error(data.data);

  return data;
}
