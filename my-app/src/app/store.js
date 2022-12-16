import { configureStore } from '@reduxjs/toolkit';
import AccountSlice from '../feature/AccountSlice';
import AuthSlice from '../feature/AuthSlice';
import EquipmentsSlice from '../feature/EquipmentsSlice';
import FeedbackSlice from '../feature/FeedbackSlice';
import MenuServices from '../feature/MenuServices';
import NewsSlice from '../feature/NewsSlice';
import PatientRecords from '../feature/PatientRecords';
import ServiceSlice from '../feature/ServiceSlice';
import SpecialistSlice from '../feature/SpecialistSlice';
import TeamSlice from '../feature/TeamSlice';
import WebsettingSlice from '../feature/WebsettingSlice';

export const store = configureStore({
  reducer: {
    account: AccountSlice,
    user: AuthSlice,
    service: ServiceSlice,
    team: TeamSlice,
    feedback: FeedbackSlice,
    menuServices: MenuServices,
    equipment: EquipmentsSlice,
    news: NewsSlice,
    specialist: SpecialistSlice,
    PatientRecords: PatientRecords,
    Websetting: WebsettingSlice
  },
});
