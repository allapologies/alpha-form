import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getQuestionsWithReplies } from '../__data__/selectors';
import { booleanType } from '../constants';
import locales from '../locales.json';

const getAnswerByType = (value, type) => {
  if (type !== booleanType) {
    return value.toString();
  }
  return value === true ? locales['summary.true'] : locales['summary.false'];
};

export const Summary = ({ questions, onFinish }) => (
  <table>
    <thead>
      <tr>
        <th>Question</th>
        <th>Answer</th>
      </tr>
    </thead>
    <tbody>
      {questions.map(({ id, type, text, reply }) => (
        <tr key={id}>
          <td>{text}</td>
          <td>{getAnswerByType(reply, type)}</td>
        </tr>
      ))}
    </tbody>
    <div className="row">
      <div className="row">
        <div className="col s6 m2 l2">
          <button
            type="button"
            className="waves-effect waves-light btn-small"
            onClick={onFinish}
          >
            {locales['summary.finish']}
          </button>
        </div>
      </div>
    </div>
  </table>
);

Summary.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
    reply: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  })),
  onFinish: PropTypes.func,
};

Summary.defaultProps = {
  questions: [],
  onFinish: () => {},
};

const mapStateToProps = state => ({ questions: getQuestionsWithReplies(state) });

export default connect(mapStateToProps)(Summary);
