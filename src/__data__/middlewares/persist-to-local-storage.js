import { SUBMIT_STEP, SET_STAGE } from '../action-types';
import { getCurrenQuestionValue, questionIdSelector, historySelector } from '../selectors'
import { __form_step_id, summary } from '../../constants';

const saveDataToLocalStorage = (key, value) => localStorage.setItem(key, value)

const removeItems = (itemsArray = []) =>
  itemsArray.forEach((id) => localStorage.removeItem(id))

export default store => next => action => {
  const { type } = action;

  if (type === SUBMIT_STEP) {
    const state = store.getState()
    const id = questionIdSelector(state)
    const value = getCurrenQuestionValue(state)

    saveDataToLocalStorage(id, value);
    saveDataToLocalStorage(__form_step_id, id);
  }

  if (type === SET_STAGE && action.stage === summary) {
    const submittedSteps = historySelector(store.getState())
    const items = [...submittedSteps, __form_step_id];

    removeItems(items)
  }

  return next(action)
}
