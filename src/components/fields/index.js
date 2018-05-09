import Checkbox from './checkbox-input';
import Date from './date-input';
import Number from './number-input';
import Text from './text-input';
import FileInput from './file-input';

import { booleanType, dateType, numberType, stringType, fileType } from '../../constants';

export default {
  [booleanType]: Checkbox,
  [dateType]: Date,
  [numberType]: Number,
  [stringType]: Text,
  [fileType]: FileInput,
};
