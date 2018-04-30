import { historySelector } from '../selectors';
import { GO_BACK } from '../action-types';

const PREVIOUS_QUESTION_OFFSET = 2;

export default () => (dispatch, getState) => {
  const history = historySelector(getState());
  dispatch({ type: GO_BACK, id: history[history.length - PREVIOUS_QUESTION_OFFSET] });
};
