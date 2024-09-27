import { createSelector, createSlice } from '@reduxjs/toolkit';

const viewSlice = createSlice({
  name: 'view',
  initialState: {
    value: '',
  },
  reducers: {
    select: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { select } = viewSlice.actions;

const selectState = (state) => state.view;

export const selectView = createSelector([selectState], (view) => view.value);

export default viewSlice.reducer;
