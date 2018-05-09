import { SET_QUESTION_ID, GO_BACK, SUBMIT_STEP } from '../action-types';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_QUESTION_ID:
      return [...state, action.id];
    case SUBMIT_STEP:
      return [...state, action.nextId]
    case GO_BACK:
      return state.slice(0, state.length - 1);
    default:
      return state;
  }
};
