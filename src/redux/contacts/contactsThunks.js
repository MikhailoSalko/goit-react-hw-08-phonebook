import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from 'api/authApi';

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
  async (body, { rejectWithValue }) => {
    try {
      console.log(body)
      const { data } = instance.post('/contacts', body);
      console.log(data)
      return data
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
