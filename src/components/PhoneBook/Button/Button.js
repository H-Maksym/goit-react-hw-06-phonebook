import React from 'react';
import { StyledButton } from './Button.styled';
import PropTypes from 'prop-types';

export default function Button({
  type = 'button',
  id,
  disabled = false,
  onClick,
  children,
}) {
  return (
    <StyledButton type={type} disabled={disabled} onClick={onClick} id={id}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};
