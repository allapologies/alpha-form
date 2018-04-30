import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import fetchSchema from '../__data__/actions/fetch-schema';
import { getCurrentQuestion, stageSelector } from '../__data__/selectors';
import sampleData from '../__data__/sample-data.json';

import { booleanType } from '../constants';

import Form from './form';
import Loader from './loader';

class Process extends React.Component {
  componentDidMount() {
    this.props.fetchSchema(sampleData.questions);
  }

  render() {
    if (!this.props.question.text) {
      return (
        <Loader />
      );
    }

    const { question: { text, id, type, reply } } = this.props;

    const initialValues = { [id]: type === booleanType ? !!reply : reply };

    return (
      <Form
        initialValues={initialValues}
        text={text}
        id={id}
        type={type}
      />
    );
  }
}

Process.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
  }),
  fetchSchema: PropTypes.func.isRequired,
};

Process.defaultProps = {
  question: {},
};

const mapStateToProps = state => ({
  question: getCurrentQuestion(state),
  stage: stageSelector(state),
});

export default connect(mapStateToProps, { fetchSchema })(Process);

