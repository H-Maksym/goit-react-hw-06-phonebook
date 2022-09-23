import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid';

import { useState, useEffect } from 'react';
import useToggleModal from 'hooks/toggleModal';

//* Components
import Title from 'components/PhoneBook/Title';
import ContactForm from 'components/PhoneBook/ContactForm';
import Filter from 'components/PhoneBook/Filter';
import ContactList from 'components/PhoneBook/ContactList';
import Notification from 'components/PhoneBook/Notification';
import Box from 'components/PhoneBook/Box';
import Modal from 'components/PhoneBook/Modal';
import AddContact from 'components/PhoneBook/AddContact';

import { notifyConfigs } from 'config/notifyConfig';

// const baseContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// import ProgComponents from 'components/PhoneBook';
// const {Section, ContactForm,Filter,ContactList,Notification}=ProgComponents;

export default function App() {
  //!Initialization of the LS object
  const LS = JSON.parse(localStorage.getItem('contacts')) ?? [];

  //*When transferring to the initial value of the state of the anonymous callback function, what it returns as the initial value and this callback function will be executed/updated only at the first rendering.

  const [contacts, setContacts] = useState(() => LS);
  const [filter, setFilter] = useState('');
  const { isOpen, openModal, closeModal, handleKeyDown, handleBackdropClick } =
    useToggleModal();

  // /**set contacts from Locale Storage */
  useEffect(() => {
    if (contacts.length === 0) {
      //Чому в LS всеодно зберігає порожній масив. Приходиться його видаляти.
      localStorage.removeItem('contacts');
      return;
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // /** checks if a contact exists in contacts list*/
  function existContact(name) {
    return contacts.find(
      data => data.name.toLowerCase() === name.toLowerCase()
    );
  }

  // /** submit event handler*/
  function formSubmitHandler(data) {
    const contact = {
      id: nanoid(),
      ...data,
    };

    if (existContact(contact.name)) {
      return Notify.info('Such a contact already exists', notifyConfigs);
    }

    setContacts(pS => [contact, ...pS]);
  }

  /** event handler filter*/
  function changeFilter(e) {
    e.preventDefault();
    setFilter(e.currentTarget.value.trim());
  }

  /** calculated value for filter*/
  function getVisibleContacts() {
    const normalizeFilter = filter.trim().toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );

    // return baseContacts;
  }

  // /** delete contact from list*/
  function onDelContact(e) {
    const key = e.target.id;
    setContacts(pS => pS.filter(({ id }) => id !== key));
  }

  // function toggleModal() {
  //   setShowModal(pS => (pS = !showModal));
  // }

  return (
    <>
      <Box
        mx="auto"
        px={15}
        py={0}
        display="flex"
        flexDirection="column"
        alignItems="center"
        width={450}
        as="section"
      >
        <h1>React</h1>
        <Title>Phone-Book</Title>

        <AddContact toggleModal={() => openModal()} />

        {isOpen && (
          <Modal
            closeModal={closeModal}
            handleKeyDown={handleKeyDown}
            handleBackdropClick={handleBackdropClick}
          >
            <ContactForm
              title="Fill in the contact details"
              onSubmit={formSubmitHandler}
            />
          </Modal>
        )}
      </Box>

      <Box
        mx="auto"
        px={15}
        py={0}
        display="flex"
        flexDirection="column"
        // alignItems='center'
        width={450}
        as="section"
      >
        <Title>Contacts</Title>
        {contacts.length ? (
          <>
            <Filter name="filter" value={filter} changeFilter={changeFilter} />
            <ContactList
              contacts={getVisibleContacts()}
              // contacts={contacts}
              onDelContact={onDelContact}
            />
          </>
        ) : (
          <Notification message="There are no contacts" />
        )}
      </Box>
    </>
  );
}
