import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from 'redux/slice/contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

//TODO LS from redux-persist
function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state.contacts.items);
    localStorage.setItem('contacts', serializedState);
    if (state.contacts.items.length === 0) {
      localStorage.removeItem('contacts');
    }
  } catch (e) {
    console.warn(e);
  }
}

store.subscribe(() => saveToLocalStorage(store.getState()));
