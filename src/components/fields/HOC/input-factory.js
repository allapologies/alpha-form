import React from 'react';
import PropTypes from 'prop-types';

export default (inputType) => {
  const Wrapped = props => (
    <input
      type={inputType}
      id={props.id}
      onChange={props.onChange}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      value={props.value}
      className={props.className}
    />
  );
  Wrapped.propTypes = {
    id: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    className: PropTypes.string,
  };

  Wrapped.defaultProps = {
    id: '',
    value: '',
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    className: '',
  };
  return Wrapped;
};
