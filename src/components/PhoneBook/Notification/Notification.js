import React from 'react';
import PropTypes from 'prop-types';
import { StyledNotification } from './Notification.styled';

export default function Notification({ message }) {
  return <StyledNotification>{message}</StyledNotification>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
