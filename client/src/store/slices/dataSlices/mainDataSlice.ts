import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from '../../../utils/axios';

import { IMainData, IMainDataResponse, YearData, Year } from '../../../types/serverTypes';

interface IMainDataSlice {
  isDone: boolean;
  mainData: Record<Year, YearData> | null;
  status: string | null;
  isLoading: boolean;
}

const initialState: IMainDataSlice = {
  isDone: false,
  mainData: null,
  status: null,
  isLoading: false,
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
  reducers: {},
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

export default mainDataSlice.reducer;
