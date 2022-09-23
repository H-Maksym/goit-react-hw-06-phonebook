import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { ModalBackdrop, ModalContent } from './Modal.styled';
import { IoIosClose } from 'react-icons/io';
import ButtonIcon from 'components/PhoneBook/ButtonIcon';
import Box from 'components/PhoneBook/Box';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({
  children = '',
  handleKeyDown = () => {},
  handleBackdropClick = () => {},
  closeModal = () => {},
}) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContent>
        <Box position="absolute" top="0" right="0" zIndex="100">
          <ButtonIcon
            type="button"
            onClick={closeModal}
            aria-label="close modal"
          >
            <IoIosClose size="40px" />
          </ButtonIcon>
        </Box>
        {children}
      </ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
}

Modal.propTypes = {
  children: PropTypes.node,
};
