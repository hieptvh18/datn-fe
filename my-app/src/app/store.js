import { configureStore } from '@reduxjs/toolkit';
import AccountSlice from '../feature/AccountSlice';

export const store = configureStore({
  reducer: {
    account: AccountSlice
  },
});
