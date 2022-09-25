import { nanoid } from 'nanoid';

export const addContacts = (name, number) => {
  return {
    type: 'contacts/addContacts',
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
};

export const deleteContacts = contactId => {
  return {
    type: 'contacts/deleteContacts',
    payload: contactId,
  };
};

export const changeFilterValue = filterValue => {
  return {
    type: 'contacts/changeFilter',
    payload: filterValue,
  };
};
