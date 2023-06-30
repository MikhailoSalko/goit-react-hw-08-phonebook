import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from 'api/instance';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get('/contacts');
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('/contacts', body);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await instance.delete(`/contacts/${id}`);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);
