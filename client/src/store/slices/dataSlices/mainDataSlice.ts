import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from '../../../utils/axios';

import {
  IMainData,
  IMainDataHabit,
  IMainDataResponse,
  YearData,
  Year,
} from '../../../types/serverTypes';

interface IMainDataSlice {
  isDone: boolean;
  mainData: Record<Year, YearData> | null;
  status: string | null;
  isLoading: boolean;
  currentYear: string | null;
  currentDay: string | null;
  currentDayHabits: IMainDataHabit[] | null;
}

interface IYear {
  year: string | 'current';
}

interface IDay {
  day: string;
}

const initialState: IMainDataSlice = {
  isDone: false,
  mainData: null,
  status: null,
  isLoading: false,
  currentYear: null,
  currentDay: null,
  currentDayHabits: null,
};

export const getMainData = createAsyncThunk('mainData/get', async () => {
  try {
    const { data } = await axios.get('/api/data/get');

    return data;
  } catch (error) {
    console.log(error);
  }
});

const mainDataSlice = createSlice({
  name: 'mainData',
  initialState,
  reducers: {
    setCurrentYear: (state: IMainDataSlice, action: PayloadAction<IYear>) => {
      if (action.payload.year === 'current') {
        const date = new Date();
        const year = date.getFullYear().toString();
        state.currentYear = year;
      } else {
        state.currentYear = action.payload.year;
      }
    },
    setCurrentDay: (state: IMainDataSlice, action: PayloadAction<IDay>) => {
      state.currentDay = action.payload.day;
    },
    setDayHabits: (state: IMainDataSlice, action: PayloadAction<IMainDataHabit[]>) => {
      state.currentDayHabits = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getMainData.pending, (state: IMainDataSlice) => {
      state.isLoading = true;
    });
    builder.addCase(
      getMainData.fulfilled,
      (state: IMainDataSlice, action: PayloadAction<IMainDataResponse>) => {
        state.isLoading = false;
        state.isDone = action.payload.isDone;
        state.mainData = action.payload.data;
        state.status = action.payload.statusMessage;
      },
    );
    builder.addCase(getMainData.rejected, (state: IMainDataSlice) => {
      state.isLoading = false;
    });
  },
});

export const { setCurrentYear, setCurrentDay, setDayHabits } = mainDataSlice.actions;

export default mainDataSlice.reducer;
