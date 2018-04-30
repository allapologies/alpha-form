import { SET_QUESTION_ID, GO_BACK } from '../action-types';

const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_QUESTION_ID:
    case GO_BACK:
      return action.id;
    default:
      return state;
  }
};
