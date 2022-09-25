import { configureStore } from '@reduxjs/toolkit';
import AccountSlice from '../feature/AccountSlice';
import AuthSlice from '../feature/AuthSlice';

export const store = configureStore({
  reducer: {
    account: AccountSlice,
    user: AuthSlice,
  },
});
