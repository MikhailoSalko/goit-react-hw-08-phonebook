import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialAuthState';

const authSlice = createSlice({
  name: 'auth',
  initialState,
  // extraReducers: builder => builder.addCase(),
});

export default authSlice.reducer;
