import Checkbox from './checkbox-input';
import Date from './date-input';
import Number from './number-input';
import Text from './text-input';

import { booleanType, dateType, numberType, stringType } from '../../constants';

export default {
  [booleanType]: Checkbox,
  [dateType]: Date,
  [numberType]: Number,
  [stringType]: Text,
};
