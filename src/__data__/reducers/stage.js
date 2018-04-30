import { SET_STAGE } from '../action-types';
import { entry } from '../../constants';

const initialState = entry;

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_STAGE:
      return action.stage;
    default:
      return state;
  }
};
