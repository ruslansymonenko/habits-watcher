import { configureStore } from '@reduxjs/toolkit';

//User
import authSlice from './slices/userSlices/authSlice';
import mainDataSlice from './slices/dataSlices/mainDataSlice';
import habitsSlice from './slices/habitsSlice/habitsSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    mainData: mainDataSlice,
    habits: habitsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
