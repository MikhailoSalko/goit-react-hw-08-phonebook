import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCurrent, logOutUser, loginUser, registerUser } from 'api/authApi';

export const register = createAsyncThunk(
  'auth/register',
  async (body, { rejectWithValue }) => {
    try {
      const data = await registerUser(body);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
      const data = await loginUser(body);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.message);
    }
  }
);
export const fetchCurrent = createAsyncThunk(
  'auth/current',
  async (_, { getState, rejectWithValue }) => {
    const { auth } = getState();
    if (auth.token === null) {
      return rejectWithValue('no token');
    }
    try {
      const data = await getCurrent(auth.token);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.message);
    }
  }
);
export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await logOutUser();
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.message);
    }
  }
);
