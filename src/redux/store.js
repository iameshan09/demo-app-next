import { configureStore } from '@reduxjs/toolkit';
import view from './slices/view.slice';
import progress from './slices/progress.slice';

const store = configureStore({
  reducer: {
    view,
    progress,
  },
});

export default store;
