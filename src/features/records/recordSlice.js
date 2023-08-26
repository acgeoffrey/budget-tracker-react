import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentContextWindow: '',
  dateRangeTag: [null, null],
};

const recordSlice = createSlice({
  name: 'records',
  initialState,
  reducers: {
    viewContextMenu(state, action) {
      state.currentContextWindow = action.payload;
    },
    dateTag(state, action) {
      state.dateRangeTag = [action.payload];
    },
  },
});

export const { viewContextMenu, dateTag } = recordSlice.actions;

export default recordSlice.reducer;
