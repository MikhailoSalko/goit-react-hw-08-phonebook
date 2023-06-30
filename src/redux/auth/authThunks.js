import { createAsyncThunk } from '@reduxjs/toolkit';
import instance, { setToken } from 'api/instance';

export const register = createAsyncThunk(
  'auth/register',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('/users/signup', body);
      setToken(data.token);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('/users/login', body);
      setToken(data.token);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const fetchCurrent = createAsyncThunk(
  'auth/current',
  async (_, { getState, rejectWithValue }) => {
    const { auth } = getState();
    try {
      setToken(auth.token);
      const { data } = await instance.get('/users/current');
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);
export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('/users/logout');
      setToken();
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);
