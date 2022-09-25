// import { useState, useEffect } from 'react';
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

import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export default function App() {
  //!Initialization of the LS object
  //*When transferring to the initial value of the state of the anonymous callback function, what it returns as the initial value and this callback function will be executed/updated only at the first rendering.

  const { isOpen, openModal, closeModal, handleKeyDown, handleBackdropClick } =
    useToggleModal();
  const contacts = useSelector(getContacts);

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
            <ContactForm title="Fill in the contact details" />
          </Modal>
        )}
      </Box>

      <Box
        mx="auto"
        px={15}
        py={0}
        display="flex"
        flexDirection="column"
        width={450}
        as="section"
      >
        <Title>Contacts</Title>
        {contacts.length > 0 ? (
          <>
            <Filter name="filter" />
            <ContactList />
          </>
        ) : (
          <Notification message="There are no contacts" />
        )}
      </Box>
    </>
  );
}
