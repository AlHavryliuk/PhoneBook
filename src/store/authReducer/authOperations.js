import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  loginErrorSwal,
  registerErrorSwal,
} from 'components/swal/error/errorSwal';
import { successLoginSwal } from 'components/swal/success/successSwal';
import { login, logout, register } from 'service/authAPI';
import { token } from 'service/hosts';

export const userRegister = createAsyncThunk(
  `user/userRegister`,
  async (credential, { rejectWithValue }) => {
    try {
      const response = await register(credential);
      return response;
    } catch (error) {
      registerErrorSwal();
      return rejectWithValue(error.message);
    }
  }
);

export const userLogin = createAsyncThunk(
  `user/userLogin`,
  async (credential, { rejectWithValue }) => {
    try {
      const response = await login(credential);
      token.set(response.token);
      successLoginSwal(response.user.name);
      return response;
    } catch (error) {
      loginErrorSwal();
      return rejectWithValue(error.message);
    }
  }
);

export const userLogout = createAsyncThunk(
  `user/userLogout`,
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await logout();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
