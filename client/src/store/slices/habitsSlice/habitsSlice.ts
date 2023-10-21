import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from '../../../utils/axios';

import { IUserHabitsResponse, UserHabits } from '../../../types/serverTypes';

interface IHabitsSlice {
  isLoading: boolean;
  isDone: boolean;
  status: string | null;
  userHabits: UserHabits | null;
}

interface IHabitCreatingProps {
  title: string;
  habit_condition: string;
  color: string;
  week_days: number[];
  habit_day_start: string;
  habit_icon: string;
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

export const createNewHabit = createAsyncThunk(
  'habits/createHabit',
  async ({
    title,
    habit_condition,
    color,
    week_days,
    habit_day_start,
    habit_icon,
  }: IHabitCreatingProps) => {
    try {
      const { data } = await axios.post('/api/habit/create', {
        title,
        habit_condition,
        color,
        week_days,
        habit_day_start,
        habit_icon,
      });
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
);

const habitsSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {
    clearStatus: (state: IHabitsSlice) => {
      state.status = null;
    },
  },
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
      },
    );
    builder.addCase(getUserHabits.rejected, (state: IHabitsSlice) => {
      state.isLoading = false;
      state.isDone = false;
    });
    builder.addCase(createNewHabit.pending, (state: IHabitsSlice) => {
      state.isLoading = true;
    });
    builder.addCase(
      createNewHabit.fulfilled,
      (state: IHabitsSlice, action: PayloadAction<IUserHabitsResponse>) => {
        state.isLoading = false;
        state.isDone = action.payload.isDone;
        state.status = action.payload.statusMessage;
      },
    );
    builder.addCase(createNewHabit.rejected, (state: IHabitsSlice) => {
      state.isLoading = false;
      state.isDone = false;
    });
  },
});

export const { clearStatus } = habitsSlice.actions;

export default habitsSlice.reducer;
