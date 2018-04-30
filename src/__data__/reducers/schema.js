import { LOAD_SCHEMA } from '../action-types';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SCHEMA:
      return action.schema;
    default:
      return state;
  }
};
