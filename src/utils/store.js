import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './appSlice';

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
  },
});
