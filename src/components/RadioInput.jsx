import React from 'react';
import PropTypes from 'prop-types';

function RadioInput({ id, type, handleFilterChange, checked }) {
  return (
      <label htmlFor={id}>
        <input
            className="with-gap"
            id={id}
            name="type"
            type="radio"
            data-type={type}
            onChange={handleFilterChange}
            checked={checked}
        />
        <span>{type}</span>
      </label>
  );
}

RadioInput.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default RadioInput;
