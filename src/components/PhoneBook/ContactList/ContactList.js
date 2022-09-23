import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from 'components/PhoneBook/ContactList/ContactItem';
import { StyledContactItem } from './ContactList.styled';

export default function ContactList({ contacts, onDelContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <StyledContactItem key={id}>
            <ContactItem
              id={id}
              name={name}
              number={number}
              onDelContact={onDelContact}
            />
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
