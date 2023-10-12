import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from '../../../utils/axios';

import { IUserHabitsResponse, UserHabits } from '../../../types/serverTypes';

interface IHabitsSlice {
  isLoading: boolean;
  isDone: boolean;
  status: string | null;
  userHabits: UserHabits | null;
}

const initialState: IHabitsSlice = {
  isLoading: false,
  isDone: false,
  status: null,
  userHabits: null,
};

export const getUserHabits = createAsyncThunk('habits/getHabits', async () => {
  try {
    const { data } = await axios.get('/api/habit/gethabits');
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

const habitsSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getUserHabits.pending, (state: IHabitsSlice) => {
      state.isLoading = true;
    });
    builder.addCase(
      getUserHabits.fulfilled,
      (state: IHabitsSlice, action: PayloadAction<IUserHabitsResponse>) => {
        state.isLoading = false;
        state.isDone = action.payload.isDone;
        state.userHabits = action.payload.data;
        state.status = action.payload.statusMessage;
      },
    );
    builder.addCase(getUserHabits.rejected, (state: IHabitsSlice) => {
      state.isLoading = false;
      state.isDone = false;
    });
  },
});

export default habitsSlice.reducer;
