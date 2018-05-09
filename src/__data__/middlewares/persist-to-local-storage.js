import { SUBMIT_STEP } from '../action-types';
import { getCurrenQuestionValue, questionIdSelector } from '../selectors'

export default store => next => action => {
  if (action.type === SUBMIT_STEP) {
    const state = store.getState()
    const id = questionIdSelector(state)
    const value = getCurrenQuestionValue(state)

    localStorage.setItem(id, value);
  }

  return next(action)
}