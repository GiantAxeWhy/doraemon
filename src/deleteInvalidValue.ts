import { isPlainObject, isNull, isUndefined } from 'lodash';

import { IObject } from './global';

/**
 * @description 删除对象里无效值如`null`|`undefined`
 */
export const deleteInvalidValue = <T = IObject>(target:T) => {
  if (isPlainObject(target)) {
    for (const [key, value] of Object.entries(target)) {
      if (isNull(value) || isUndefined(value) || isNaN(value)) {
        delete target[key];
      }
    }
  }
  return target;
};

export default deleteInvalidValue;
