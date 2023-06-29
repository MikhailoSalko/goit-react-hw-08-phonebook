import { createAsyncThunk } from '@reduxjs/toolkit';
import instance, { setToken } from 'api/authApi';

const BASE_URL = 'https://648987a55fa58521caafc3ac.mockapi.io/api/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { getState, rejectWithValue }) => {
    // const { auth } = getState();
    // console.log(auth.token);
    try {
      // setToken(auth.token);
      const { data } = await instance.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(BASE_URL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
