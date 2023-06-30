import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialAuthState';
import { fetchCurrent, login, logout, register } from './authThunks';
import { handlePending, handleRejected } from 'redux/handlerStatusFunctions';

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.loading = false;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.loading = false;
      })
      .addCase(fetchCurrent.pending, state => {
        state.isFetching = true;
      })
      .addCase(fetchCurrent.fulfilled, (state, { payload }) => {
        state.user = payload;

        state.isLoggedIn = true;
        state.isFetching = false;
        state.loading = false;
      })
      .addCase(logout.fulfilled, state => {
        state.user = {};
        state.token = '';
        state.isLoggedIn = false;
        state.loading = false;
      })
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected),
});

export default authSlice.reducer;

/*
email: "ivan_salko@gmail.com"
name: "Ivan Salko"
password: "ivan_salko"



email: "zhanna@gmail.com"
name: "Zhanna Salko"
password: "zxc12345"
*/
