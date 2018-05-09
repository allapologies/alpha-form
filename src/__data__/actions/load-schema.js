import { LOAD_SCHEMA } from '../action-types';

export default (schema, initialId, history = []) => ({
  type: LOAD_SCHEMA,
  schema,
  initialId,
  history
});
