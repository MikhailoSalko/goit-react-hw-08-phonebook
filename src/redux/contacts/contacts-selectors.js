import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filter/filter-selectors';

export const selectContacts = state => state.contacts.contacts;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) =>
    contacts.filter(({ name }) => {
      return name.toLowerCase().trim().includes(filter.toLowerCase().trim());
    })
);
