import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getQuestionsWithReplies } from '../__data__/selectors';
import { booleanType, fileType } from '../constants';
import locales from '../locales.json';


const renderFileType = () => <span>Ooops...file preview is not supported yet</span>;

const getAnswerByType = (value = '', type) => {
  if (type === fileType) {
    return renderFileType();
  }
  if (type === booleanType) {
    return value === true ? locales['summary.true'] : locales['summary.false'];
  }
  return value;
};

export const Summary = ({ questions, onFinish }) => (
  <div>
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
    </table>
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
  </div>

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
  onFinish: () => {
  },
};

const mapStateToProps = state => ({ questions: getQuestionsWithReplies(state) });

export default connect(mapStateToProps)(Summary);
