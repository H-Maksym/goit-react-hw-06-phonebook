import React from 'react';
import PropTypes from 'prop-types';
import { StyledTitle } from './Title.styled';

export default function Title({ children }) {
  return <StyledTitle>{children}</StyledTitle>;
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
};
