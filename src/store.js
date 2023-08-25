import { configureStore } from '@reduxjs/toolkit';

import recordReducer from './features/records/recordSlice';

const store = configureStore({
  reducer: {
    records: recordReducer,
  },
});

export default store;
