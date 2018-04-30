import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { stageSelector } from '../__data__/selectors';

import { entry, summary, process } from '../constants';
import setStage from '../__data__/actions/set-stage';
import flush from '../__data__/actions/flush';

import Entry from './entry';
import Summary from './summary';
import Process from './process';

export class Container extends React.Component {

  handleStart = () => {
    this.props.setStage(process)
  }

  handleSubmit = () => {
    this.props.setStage(summary)
  }

  handleFinish = () => {
    this.props.flush()
  }

  renderStage = (stage) => {
    switch (stage) {
      case entry:
        return <Entry onStart={this.handleStart} />;
      case process:
        return <Process onSubmit={this.handleSubmit} />;
      case summary:
        return <Summary onFinish={this.handleFinish} />;
      default:
        return <Entry onStart={this.handleStart} />;
    }
  }

  render() {
    const { stage } = this.props;
    return (
      <div className="container">
        {this.renderStage(stage)}
      </div>
    )
  }
}

Container.propTypes = {
  stage: PropTypes.oneOf([entry, process, summary]),
};

Container.defaultProps = {
  stage: entry,
};

const mapStateToProps = state => ({
  stage: stageSelector(state),
});

export default connect(mapStateToProps, { setStage, flush })(Container);
