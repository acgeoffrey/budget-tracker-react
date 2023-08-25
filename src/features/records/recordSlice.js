import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentContextWindow: '',
};

const recordSlice = createSlice({
  name: 'records',
  initialState,
  reducers: {
    viewContextMenu(state, action) {
      state.currentContextWindow = action.payload;
    },
  },
});

export const { viewContextMenu } = recordSlice.actions;

export default recordSlice.reducer;
