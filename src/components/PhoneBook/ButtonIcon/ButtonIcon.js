import React from 'react';
import PropTypes from 'prop-types';
import { StyledSearchButton } from './ButtonIcon.styled';

export default function ButtonIcon({
  children = null,
  onClick = () => {},
  ...allyProps
}) {
  return (
    <StyledSearchButton type="button" onClick={onClick} {...allyProps}>
      {children}
    </StyledSearchButton>
  );
}

ButtonIcon.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  'aria-label': PropTypes.string.isRequired,
};
