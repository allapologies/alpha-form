import inputFactory from './HOC/input-factory';
import withError from './HOC/with-error-hoc';

export default withError(inputFactory('text'));
