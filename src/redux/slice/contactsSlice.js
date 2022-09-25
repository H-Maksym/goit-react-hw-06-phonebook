import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const LS = JSON.parse(localStorage.getItem('contacts')) ?? initialContacts;

//*write to local storage initial state.contacts
JSON.parse(localStorage.getItem('contacts')) ??
  localStorage.setItem('contacts', JSON.stringify(initialContacts));

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: LS,
    filter: '',
  },
  reducers: {
    addContacts: {
      reducer(state, action) {
        state.items.unshift(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },

    deleteContacts(state, action) {
      state.items = state.items.filter(contact => {
        return contact.id !== action.payload;
      });
    },
    changeFilterValue(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContacts, deleteContacts, changeFilterValue } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
