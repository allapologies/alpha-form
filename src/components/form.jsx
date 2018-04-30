import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';

import { FORM_NAME, booleanType } from '../constants';

import Navigation from './navigation';

import baseFields from './fields';
import { required } from './fields/validators';

const Form = ({ text, id, type }) => (
  <div className="row">
    <h2>{text}</h2>
    <div className="col s12">
      <Field
        name={id}
        id={id}
        component={baseFields[type]}
        validate={type === booleanType ? undefined : required}
      />
    </div>
    <div className="col s12">
      <Navigation />
    </div>
  </div>
);

Form.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
  initialValues: PropTypes.object, // eslint-disable-line
};

Form.defaultProps = {
  id: '',
  text: '',
  type: '',
  initialValues: {},
};

export default reduxForm({
  form: FORM_NAME,
  destroyOnUnmount: true,
  forceUnregisterOnUnmount: false,
})(Form);
