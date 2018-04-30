import setQuestion from './set-question-id';
import setStage from './set-stage';
import { getNextQuestionId, hasNext } from '../selectors';
import { summary } from '../../constants';

export default () => (dispatch, getState) => {
  if (!hasNext(getState())) {
    return dispatch(setStage(summary));
  }
  return dispatch(setQuestion(getNextQuestionId(getState())));
};
