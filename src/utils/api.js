import { getItemFromLocalStorage } from './helpers';

const API_ROOT = import.meta.env.VITE_API_URL;

export const API_URLS = {
  login: () => `${API_ROOT}/user/login`,
  getCurrentUser: () => `${API_ROOT}/user`,
  signup: () => `${API_ROOT}/user/signup`,
  getAllRecords: (query = 'sort=-amount', page = 1) =>
    `${API_ROOT}/budget/record?${query}&page=${page}&limit=10`,
  createRecord: () => `${API_ROOT}/budget/record`,
};

export const customFetch = async (url, { body, ...customConfig }) => {
  const token = getItemFromLocalStorage('auth-token-cc');

  const headers = {
    'content-type': 'application/json',
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const config = {
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, config);
    const data = await response.json();
    console.log(data);
    if (data.status === 'success') return data;

    throw new Error(data);
  } catch (err) {
    if (err.message === 'Failed to fetch') {
      throw new Error('Failed to fetch data. \n Check your connection');
    }
    return {
      status: 'fail',
      data: err.message,
    };
  }
};
