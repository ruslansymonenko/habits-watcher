import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IModalStatusSlice {
  newHabitModalStatus: boolean;
}

const initialState: IModalStatusSlice = {
  newHabitModalStatus: false,
};

const modalStatusSlice = createSlice({
  name: 'modalStatus',
  initialState,
  reducers: {
    closeNewHabitModal: (state: IModalStatusSlice) => {
      state.newHabitModalStatus = false;
    },
    openNewHabitModal: (state: IModalStatusSlice) => {
      state.newHabitModalStatus = true;
    },
  },
});

export const { openNewHabitModal, closeNewHabitModal } = modalStatusSlice.actions;

export default modalStatusSlice.reducer;
