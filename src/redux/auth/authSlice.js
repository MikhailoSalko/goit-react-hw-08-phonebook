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
        state.loading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(fetchCurrent.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.loading = false;
        state.isLoggedIn = true;
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
