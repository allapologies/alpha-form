import { SUBMIT_STEP, SET_STAGE, LOAD_SCHEMA } from '../action-types';
import { getCurrenQuestionValue, questionIdSelector, historySelector } from '../selectors'
import { __form_step_id, __form_history, summary } from '../../constants';

const saveDataToLocalStorage = (key, value) => localStorage.setItem(key, value);

const removeItems = (itemsArray = []) =>
  itemsArray.forEach(id => localStorage.removeItem(id));

const getDataFromLocalStorage = key => localStorage.getItem(key);

const mapPersistedValuesToSchema = schema => schema.map((question) => {
  return {
    ...question,
    reply: getDataFromLocalStorage(question.id),
  };
});

export default store => next => (action) => {
  const { type } = action;

  if (type === LOAD_SCHEMA) {
    const persistedState = getDataFromLocalStorage(__form_step_id);
    if (!!persistedState) {
      const localStorageHistory = getDataFromLocalStorage(__form_history);
      const history = localStorageHistory.split(';');
      const updatedSchema = mapPersistedValuesToSchema(action.schema);

      return next({
        ...action,
        schema: updatedSchema,
        initialId: persistedState,
        history,
      });
    }
  }

  if (type === SUBMIT_STEP) {
    const state = store.getState();
    const currentId = questionIdSelector(state);
    const historyFromStore = historySelector(state);
    const currentHistory = historyFromStore.concat(action.nextId).join(';');
    const value = getCurrenQuestionValue(state);

    saveDataToLocalStorage(currentId, value);
    saveDataToLocalStorage(__form_step_id, action.nextId);
    saveDataToLocalStorage(__form_history, currentHistory);
  }

  if (type === SET_STAGE && action.stage === summary) {
    const submittedSteps = historySelector(store.getState());
    const items = [...submittedSteps, __form_history, __form_step_id];

    removeItems(items);
  }

  return next(action);
};
