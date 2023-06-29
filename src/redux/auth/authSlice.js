import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialAuthState';
import { register } from './authThunks';
import { handlePending, handleRejected } from 'redux/handlerStatusFunctions';

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.loading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected),
});

export default authSlice.reducer;
