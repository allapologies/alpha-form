import { reducer } from 'redux-form';
import { combineReducers } from 'redux';
import schema from './schema';
import question from './question';
import history from './history';
import stage from './stage';
import { FLUSH } from '../action-types';

const rootReducer = combineReducers({
  schema,
  question,
  history,
  form: reducer,
  stage,
});

export default (state, action) => {
  if (action.type === FLUSH) {
    state = undefined; // eslint-disable-line  it is not reassign
  }
  return rootReducer(state, action);
};

