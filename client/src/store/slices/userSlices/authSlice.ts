import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from '../../../utils/axios';
import { RootState } from '../..';

import { IUserData, IDataForAuth, IServerAuthResponse } from '../../../types/serverTypes';

interface IAuthSlice {
  isRequestDone: boolean;
  user: null | IUserData;
  token: null | string;
  isLoading: boolean;
  status: null | string;
}

const initialState: IAuthSlice = {
  isRequestDone: false,
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

      if (data.token) {
        window.localStorage.setItem('token', data.token);
      }

      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password }: IDataForAuth) => {
    try {
      const { data } = await axios.post('/api/user/login', {
        email,
        password,
      });

      if (data.token) {
        window.localStorage.setItem('token', data.token);
      }

      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
);

export const getUser = createAsyncThunk('auth/getUser', async () => {
  let token: string | null = '';
  if (localStorage.getItem('token')) {
    token = localStorage.getItem('token');
  }
  try {
    const { data } = await axios.get('/api/user/get', {
      headers: {
        Authorization: token,
      },
    });

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: (state: IAuthSlice) => {
      state.isLoading = false;
      state.user = null;
      state.token = null;
      state.status = null;

      localStorage.removeItem('token');
    },
  },
  extraReducers: builder => {
    //Registration
    builder.addCase(registerUser.pending, (state: IAuthSlice) => {
      state.isLoading = true;
    });
    builder.addCase(
      registerUser.fulfilled,
      (state: IAuthSlice, action: PayloadAction<IServerAuthResponse>) => {
        state.isLoading = false;
        state.isRequestDone = action.payload.isRequestDone;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.status = action.payload.message;
      },
    );
    builder.addCase(registerUser.rejected, (state: IAuthSlice) => {
      state.isLoading = false;
    });
    //Login
    builder.addCase(loginUser.pending, (state: IAuthSlice) => {
      state.isLoading = true;
    });
    builder.addCase(
      loginUser.fulfilled,
      (state: IAuthSlice, action: PayloadAction<IServerAuthResponse>) => {
        state.isLoading = false;
        state.isRequestDone = action.payload.isRequestDone;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.status = action.payload.message;
      },
    );
    builder.addCase(loginUser.rejected, (state: IAuthSlice) => {
      state.isLoading = false;
    });
    //Get user
    builder.addCase(getUser.pending, (state: IAuthSlice) => {
      state.isLoading = true;
    });
    builder.addCase(
      getUser.fulfilled,
      (state: IAuthSlice, action: PayloadAction<IServerAuthResponse>) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      },
    );
    builder.addCase(getUser.rejected, (state: IAuthSlice) => {
      state.isLoading = false;
    });
  },
});

export const checkIsAuth = (state: RootState): boolean => Boolean(state.auth.token);

export const { logOut } = authSlice.actions;

export default authSlice.reducer;
