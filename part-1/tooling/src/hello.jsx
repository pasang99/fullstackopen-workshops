import React from 'react';
import PropTypes from 'prop-types';

const Hello = ({ firstName }) => {
  return <p>Hello, {firstName}!</p>;
};

Hello.propTypes = {
  firstName: PropTypes.string.isRequired
};

export default Hello;
