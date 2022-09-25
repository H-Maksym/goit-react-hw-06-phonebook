import { combineReducers } from 'redux';

const phoneBook = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const LS = JSON.parse(localStorage.getItem('contacts')) ?? phoneBook.contacts;

//*write to local storage initial state.contacts
JSON.parse(localStorage.getItem('contacts')) ??
  localStorage.setItem('contacts', JSON.stringify(phoneBook.contacts));

const contactsReducer = (state = LS, action) => {
  switch (action.type) {
    case 'contacts/addContacts':
      return [action.payload, ...state];
    case 'contacts/deleteContacts':
      return state.filter(contact => {
        return contact.id !== action.payload;
      });
    default:
      return state;
  }
};

const filtersReducer = (state = phoneBook.filter, action) => {
  switch (action.type) {
    case 'contacts/changeFilter':
      return action.payload;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filtersReducer,
});
