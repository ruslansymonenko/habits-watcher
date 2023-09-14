import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from '../../../utils/axios';

import { IUserData, IDataForAuth, IServerAuthResponse } from '../../../types/serverTypes';

interface AuthSlice {
  isAuth: boolean;
  user: null | IUserData;
  token: null | string;
  isLoading: boolean;
  status: null | string;
}

const initialState: AuthSlice = {
  isAuth: false,
  user: null,
  token: null,
  isLoading: false,
  status: null,
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ email, password }: IDataForAuth) => {
    try {
      const { data } = await axios.post('/api/user/register', {
        email,
        password,
      });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(registerUser.pending, (state: AuthSlice) => {
      state.isLoading = true;
    });
    builder.addCase(
      registerUser.fulfilled,
      (state: AuthSlice, action: PayloadAction<IServerAuthResponse>) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      },
    );
    builder.addCase(registerUser.rejected, (state: AuthSlice) => {
      state.isLoading = false;
    });
  },
});

export default authSlice.reducer;
