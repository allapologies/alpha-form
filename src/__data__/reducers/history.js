import { SET_QUESTION_ID, GO_BACK } from '../action-types';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_QUESTION_ID:
      return [...state, action.id];
    case GO_BACK:
      return state.slice(0, state.length - 1);
    default:
      return state;
  }
};
