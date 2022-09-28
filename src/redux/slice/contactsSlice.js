import { createSlice, nanoid } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: initialContacts,
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

//* Settings Redux-Persist for save to local storage
const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContacts, deleteContacts, changeFilterValue } =
  contactsSlice.actions;
