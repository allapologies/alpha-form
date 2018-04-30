import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isInvalid } from 'redux-form';

import { FORM_NAME } from '../constants';

import locales from '../locales';

import * as selectors from '../__data__/selectors';
import goToNextQuestion from '../__data__/actions/go-to-next-question';
import goToPrevQuestion from '../__data__/actions/go-to-previuos-question';

class Navigation extends React.PureComponent {

  render() {
    const { hasPrevious, inValid } = this.props;
    return (
      <div className="row">
        <div className="col s6 m2 l2">
          {hasPrevious && (
            <button
              type="button"
              className="waves-effect waves-light btn-small"
              onClick={this.props.goToPrevQuestion}
            >
              {locales['process.back']}
            </button>
          )}
        </div>
        <div className="col s6 m2 l2">
          <button
            type="button>"
            className={`btn waves-effect waves-light ${inValid && 'disabled'}`}
            onClick={this.props.goToNextQuestion}
          >
            {locales['process.next']}
          </button>
        </div>
      </div>
    );
  }
}

Navigation.propTypes = {
  inValid: PropTypes.bool,
  hasPrevious: PropTypes.bool,
  goToPrevQuestion: PropTypes.func.isRequired,
  goToNextQuestion: PropTypes.func.isRequired,
};

Navigation.defaultProps = {
  inValid: true,
  hasPrevious: true,
};

const mapStateToProps = state => ({
  hasPrevious: selectors.hasPrevious(state),
  inValid: isInvalid(FORM_NAME)(state),
});

export default connect(mapStateToProps, { goToNextQuestion, goToPrevQuestion })(Navigation);
