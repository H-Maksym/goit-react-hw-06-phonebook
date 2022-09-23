import React from 'react';
import PropTypes from 'prop-types';
import { StyledFilterLabel, StyledFilterInput } from './Filter.styled';
import ButtonIcon from 'components/PhoneBook/ButtonIcon';
import { BsSearch } from 'react-icons/bs';

import Box from 'components/PhoneBook/Box';

export default function Filter({ title = '', name, value, changeFilter }) {
  // !The form also has its own event response logic.
  // !If we have a form submit and input event, then to control the form, we must separately make an event handler on the form.

  return (
    <form onSubmit={e => e.preventDefault()}>
      <StyledFilterLabel>
        {title}
        <StyledFilterInput name={name} value={value} onChange={changeFilter} />
        <Box position="absolute" right="20%">
          <ButtonIcon
            type="button"
            onClick={() => {
              console.log('click');
            }}
            aria-label="search button"
          >
            <BsSearch size="20px" />
          </ButtonIcon>
        </Box>
      </StyledFilterLabel>
    </form>
  );
}

Filter.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
