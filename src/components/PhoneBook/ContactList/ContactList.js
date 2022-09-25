import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from 'components/PhoneBook/ContactList/ContactItem';
import { StyledContactItem } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/selectors';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilterValue);

  const visibleContacts = getVisibleContacts(contacts, filterValue);

  return (
    <ul>
      {visibleContacts.map(contact => {
        return (
          <StyledContactItem key={contact.id}>
            <ContactItem contact={contact} />
          </StyledContactItem>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDelContact: PropTypes.func,
};

function getVisibleContacts(contacts, filterValue) {
  const normalizeFilter = filterValue.trim().toLowerCase();
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizeFilter)
  );
}
