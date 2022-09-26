import { configureStore } from '@reduxjs/toolkit';
import AccountSlice from '../feature/AccountSlice';
import AuthSlice from '../feature/AuthSlice';
import FeedbackSlice from '../feature/FeedbackSlice';
import ServiceSlice from '../feature/ServiceSlice';
import TeamSlice from '../feature/TeamSlice';

export const store = configureStore({
  reducer: {
    account: AccountSlice,
    user: AuthSlice,
    service: ServiceSlice,
    team: TeamSlice,
    feedback: FeedbackSlice
  },
});
