import { configureStore } from '@reduxjs/toolkit';
import AccountSlice from '../feature/AccountSlice';
import AuthSlice from '../feature/AuthSlice';
import BannerHomeSlice from '../feature/BannerHomeSlice';
import EquipmentsSlice from '../feature/EquipmentsSlice';
import FeedbackSlice from '../feature/FeedbackSlice';
import MenuServices from '../feature/MenuServices';
import ServiceSlice from '../feature/ServiceSlice';
import TeamSlice from '../feature/TeamSlice';

export const store = configureStore({
  reducer: {
    account: AccountSlice,
    user: AuthSlice,
    service: ServiceSlice,
    team: TeamSlice,
    feedback: FeedbackSlice,
    bannerHome: BannerHomeSlice,
    menuServices: MenuServices,
    equipment: EquipmentsSlice
  },
});
