import loadSchema from './load-schema';
import setQuestion from './set-question-id';

const DELAY = 1;

export default schema => dispatch => setTimeout(() => {
  dispatch(loadSchema(schema, schema[0].id));
}, DELAY);
