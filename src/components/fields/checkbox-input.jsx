import React from 'react';
import PropTypes from 'prop-types';

const CheckboxInput = (props) => {
  const { id, input } = props;
  return (
    <label htmlFor={id}>
      <input
        id={id}
        type="checkbox"
        value={input.value}
        onChange={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        // Force sending checked state to controlled component
        // due to materilaze css expects to have it
        checked={input.value ? 'checked' : undefined}
      />
      <span>Yes</span>
    </label>
  );
};

CheckboxInput.propTypes = {
  id: PropTypes.string,
  input: PropTypes.shape({
    value: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
  }),
};

CheckboxInput.defaultProps = {
  id: '',
  input: {},
};

export default CheckboxInput;
