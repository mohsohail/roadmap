import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({ type, placeholder }) => {
  return (
    <div>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string
};

export default InputField;
