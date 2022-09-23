import { useState } from 'react';
import PropTypes from 'prop-types';

import { FormContact } from './ContactForm.styled';

import Input from 'components/PhoneBook/Input';
import Button from 'components/PhoneBook/Button';

export default function ContactForm({ title, onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  function handleInputChange(e) {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ name, number });
    reset();
    // if (!(name && number)) {
    //   console.log('Enter your contact information');
    //   return;
    // }
  }

  function reset() {
    setName('');
    setNumber('');
  }

  return (
    <FormContact onSubmit={handleSubmit}>
      {title && <h3>{title}</h3>}
      <Input
        type="text"
        titleInput="name"
        name="name"
        value={name}
        handleInputChange={handleInputChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
      <Input
        type="tel"
        titleInput="number"
        name="number"
        value={number}
        handleInputChange={handleInputChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      />
      <Button type="submit">Add contact</Button>
    </FormContact>
  );
}

ContactForm.propTypes = {
  title: PropTypes.string,
  onSubmit: PropTypes.func,
  toggleModal: PropTypes.func,
};
