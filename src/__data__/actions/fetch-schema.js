import loadSchema from './load-schema';
import setQuestion from './set-question-id';

const DELAY = 3000;

export default schema => dispatch => setTimeout(() => {
  dispatch(loadSchema(schema));
  dispatch(setQuestion(schema[0].id));
}, DELAY);
