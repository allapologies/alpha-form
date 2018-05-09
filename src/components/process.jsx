import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import fetchSchema from '../__data__/actions/fetch-schema';
import { getCurrentQuestion, stageSelector, schemaSelector } from '../__data__/selectors';
import sampleData from '../__data__/sample-data.json';

import { booleanType } from '../constants';

import Form from './form';
import Loader from './loader';

class Process extends React.Component {
  componentDidMount() {
    this.props.fetchSchema(sampleData.questions);
  }

  getInitialValues = () => {

    const { schema } = this.props;

    return schema.reduce((result, { id, reply, type }) => {
      return { ...result, [id]: type === booleanType ? !!reply : reply }
    }, {})
  }

  render() {
    if (!this.props.question.text) {
      return (
        <Loader />
      );
    }

    const { question: { text, id, type } } = this.props;

    const initialValues = this.getInitialValues()

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
  schema: PropTypes.array
};

Process.defaultProps = {
  question: {},
  schema: []
};

const mapStateToProps = state => ({
  question: getCurrentQuestion(state),
  stage: stageSelector(state),
  schema: schemaSelector(state)
});

export default connect(mapStateToProps, { fetchSchema })(Process);

