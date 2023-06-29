import { createAsyncThunk } from '@reduxjs/toolkit';
import { registerUser } from 'api/authApi';

export const register = createAsyncThunk(
  'auth/register',
  async (body, { rejectWithValue }) => {
    try {
      console.log(body);
      const data = await registerUser(body);
      console.log(data);
      return data;
    } catch ({ response }) {
      // console.log(response);
      rejectWithValue(response.message);
    }
  }
);
