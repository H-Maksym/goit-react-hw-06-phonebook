import PropTypes from 'prop-types';
import { FormContact } from './ContactForm.styled';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { notifyConfigs } from 'config/notifyConfig';

import Input from 'components/PhoneBook/Input';
import Button from 'components/PhoneBook/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/action';
import { getContacts } from 'redux/selectors';

export default function ContactForm({ title }) {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  /** checks if a contact exists in contacts list*/
  function existContact(name) {
    return contacts.find(
      data => data.name.toLowerCase() === name.toLowerCase()
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value.trim();
    if (existContact(name)) {
      return Notify.info('Such a contact already exists', notifyConfigs);
    }
    const number = form.elements.number.value.trim();
    dispatch(addContacts(name, number));

    form.reset();
  }

  return (
    <FormContact onSubmit={handleSubmit}>
      {title && <h3>{title}</h3>}
      <Input
        type="text"
        titleInput="name"
        name="name"
        placeholder="Enter your name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
      <Input
        type="tel"
        titleInput="number"
        name="number"
        placeholder="Enter your number"
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
