import { configureStore } from '@reduxjs/toolkit';

import contactsReducer from './contacts/contacts-slice';
import filterReducer from './filter/filter-slice';
import authReducer from './auth/authSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});
