export const setItemInLocalStorage = (key, value) => {
  if (!key || !value) {
    return console.error('Cannot Store in Local Storage');
  }

  const valueToStore =
    typeof value !== 'string' ? JSON.stringify(value) : value;

  localStorage.setItem(key, valueToStore);
};

export const getItemFromLocalStorage = (key) => {
  if (!key) {
    return console.error('Cannot get value from Local Storage');
  }

  return localStorage.getItem(key);
};

export const removeItemFromLocalStorage = (key) => {
  if (!key) {
    return console.error('Cannot get value from Local Storage');
  }

  localStorage.removeItem(key);
};
