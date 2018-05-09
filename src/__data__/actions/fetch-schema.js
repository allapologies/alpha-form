import loadSchema from './load-schema';

const DELAY = 1;

export default schema => dispatch => setTimeout(() => {
  dispatch(loadSchema(schema, schema[0].id));
}, DELAY);
