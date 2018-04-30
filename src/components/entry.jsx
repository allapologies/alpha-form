import React from 'react';
import PropTypes from 'prop-types';
import locales from '../locales.json';

const Entry = ({ onStart }) => (
  <div>
    <h1>
      {locales['stolen.phone']}
    </h1>
    <h2>
      {locales['no.worries']}
    </h2>
    <button
      className="btn waves-effect waves-light"
      type="button"
      name="action"
      onClick={onStart}
    >
      {locales['submit.your.case']}
    </button>
  </div>
);

Entry.propTypes = {
  onStart: PropTypes.func.isRequired,
};

export default Entry;

