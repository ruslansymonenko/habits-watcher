import { configureStore } from '@reduxjs/toolkit';

//User
import authSlice from './slices/userSlices/authSlice';

//Data
import mainDataSlice from './slices/dataSlices/mainDataSlice';
import habitsSlice from './slices/habitsSlice/habitsSlice';

//App
import modalStatusSlice from './slices/modalStatusSlice/modalStatusSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    mainData: mainDataSlice,
    habits: habitsSlice,
    modalStatus: modalStatusSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
