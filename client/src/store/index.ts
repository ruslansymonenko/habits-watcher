import { configureStore } from '@reduxjs/toolkit';

//User
import authSlice from './slices/userSlices/authSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
