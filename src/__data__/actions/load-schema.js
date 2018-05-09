import { LOAD_SCHEMA } from '../action-types';

export default (schema, initialId) => ({ type: LOAD_SCHEMA, schema, initialId });
