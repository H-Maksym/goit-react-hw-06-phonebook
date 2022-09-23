import ButtonIcon from 'components/PhoneBook/ButtonIcon';
import { IoIosAddCircle } from 'react-icons/io';
import Box from 'components/PhoneBook/Box';
import { StyledText } from './AddContact.styled';

export default function AddContact({ toggleModal }) {
  return (
    <Box
      display="flex"
      width="100%"
      alignItems="center"
      justifyContent="space-around"
    >
      <StyledText>Add contact</StyledText>
      <ButtonIcon type="button" onClick={toggleModal} aria-label="open modal">
        <IoIosAddCircle size="50px" />
      </ButtonIcon>
    </Box>
  );
}
