import { createSlice } from '@reduxjs/toolkit';

interface AuthSlice {
  isAuth: boolean;
}

const initialState: AuthSlice = {
  isAuth: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export default authSlice.reducer;
