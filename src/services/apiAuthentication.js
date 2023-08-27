import { API_URLS, customFetch } from '../utils/api';
import {
  getItemFromLocalStorage,
  removeItemFromLocalStorage,
  setItemInLocalStorage,
} from '../utils/helpers';

export const login = async (body) => {
  const data = await customFetch(API_URLS.login(), {
    method: 'POST',
    body,
  });

  if (data.status === 'fail') throw new Error(data.data);

  setItemInLocalStorage('auth-token-cc', data.token);
  return data;
};

export const getCurrentUser = async () => {
  if (!getItemFromLocalStorage('auth-token-cc')) return null;

  const data = await customFetch(API_URLS.getCurrentUser(), {
    method: 'GET',
  });

  return data;
};

export const logout = () => {
  removeItemFromLocalStorage('auth-token-cc');
};

export const signup = async (body) => {
  const data = await customFetch(API_URLS.signup(), {
    method: 'POST',
    body,
  });

  if (data.status === 'fail') throw new Error(data.data);
  return data;
};

export const updatePassword = async (body) => {
  const data = await customFetch(API_URLS.updatePassword(), {
    method: 'PATCH',
    body,
  });

  if (data.status === 'fail') throw new Error(data.data);
  return data;
};

export const forgetPassword = async (body) => {
  const data = await customFetch(API_URLS.forgetPassword(), {
    method: 'POST',
    body,
  });

  if (data.status === 'fail') throw new Error(data.data);
  return data;
};
