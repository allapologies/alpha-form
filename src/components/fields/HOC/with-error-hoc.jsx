import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default (InputComponent) => {
  const Wrapped = (props) => {
    const {
      input, meta, id, text,
    } = props;
    return (
      <div className="input-field col s12">
        <InputComponent
          onChange={input.onChange}
          onFocus={input.onFocus}
          onBlur={input.onBlur}
          value={input.value}
          id={props.id}
          touched={meta.touched}
          error={meta.error}
          className={classnames({ invalid: meta.touched && meta.error })}
        />
        <label htmlFor={id}>
          {text}
        </label>
        {meta.error && meta.touched && (
          <span className="helper-text">
            {meta.error}
          </span>
        )}
      </div>
    );
  };
  Wrapped.propTypes = {
    input: PropTypes.shape({
      value: PropTypes.string,
      onChange: PropTypes.func,
    }),
    meta: PropTypes.shape({
      error: PropTypes.string,
    }),
    id: PropTypes.string.isRequired,
    text: PropTypes.string,
  };
  Wrapped.defaultProps = {
    text: '',
    input: {},
    meta: {},
  };
  return Wrapped;
};
