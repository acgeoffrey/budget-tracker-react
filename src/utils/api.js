import { getItemFromLocalStorage } from './helpers';

const API_ROOT = import.meta.env.VITE_API_URL;

export const API_URLS = {
  login: () => `${API_ROOT}/user/login`,
  getCurrentUser: () => `${API_ROOT}/user`,
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
    return {
      status: 'fail',
      data: err.message,
    };
  }
};
