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

export const formatCurrency = (currency, value) => {
  if (!currency || !value) return;

  // if (value < 0) value = Math.abs(value);

  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: currency,
  }).format(value);
};

export function totalStatsHelper(data) {
  const totalStats = data?.data?.totalStats;

  const expenseStats =
    totalStats?.[0]._id.toLowerCase() === 'expense'
      ? totalStats?.[0]
      : totalStats?.[1];

  const incomeStats =
    totalStats?.[0]._id.toLowerCase() === 'income'
      ? totalStats?.[0]
      : totalStats?.[1];

  return { expenseStats, incomeStats };
}
