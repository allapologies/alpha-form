import { SET_QUESTION_ID, GO_BACK, SUBMIT_STEP } from '../action-types';

const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_QUESTION_ID:
    case GO_BACK:
      return action.id;
    case SUBMIT_STEP:
      return action.nextId;
    default:
      return state;
  }
};
