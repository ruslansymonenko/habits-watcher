import { createSlice } from '@reduxjs/toolkit';

interface IModalStatusSlice {
  newHabitModalStatus: boolean;
}

const initialState: IModalStatusSlice = {
  newHabitModalStatus: false,
};

const modalStatusSlice = createSlice({
  name: 'modalStatus',
  initialState,
  reducers: {},
});

export default modalStatusSlice.reducer;
