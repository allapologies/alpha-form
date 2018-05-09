import setQuestion from './set-question-id';
import setStage from './set-stage';
import submitStep from './submit-step';
import { getNextQuestionId, hasNext } from '../selectors';
import { summary } from '../../constants';

export default (id = '', value = '') => (dispatch, getState) => {
  if (!hasNext(getState())) {
    return dispatch(setStage(summary));
  }
  const nextQuestionId = getNextQuestionId(getState());
  return dispatch(submitStep(nextQuestionId));
};
