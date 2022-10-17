import { isNumber } from 'lodash';

/** 数字转换成带逗号的金额并保留2位小数 */
export const digitalToCash = (target:number):string => {
  let result = '';
  if (!isNumber(target)) {
    return result;
  }
  let temp = Math.abs(target).toString();
  // 是小数
  const decimalPoint = temp.indexOf('.');
  let decimal = '.00';
  if (decimalPoint > -1) {
    // 保留两位小数
    decimal = temp.substring(decimalPoint).substr(0, 3);
    temp = temp.substring(0, decimalPoint);
    // 如果小数点后只有一位数
    decimal = decimal.length < 3 ? `${decimal}0` : decimal;
  }
  while(temp.length > 0) {
    // 第一次循环无需加,
    const isFirst = result.length === 0;
    const splitIndex = temp.length - 3;
    // 字符串多于3个时取后三位数字
    if (splitIndex > 0)  {
      result = `${temp.substring(splitIndex)}${isFirst ? '' : ','}${result}`;
      temp = temp.substring(0, splitIndex);
    } else {
      result = `${temp}${isFirst ? '' : ','}${result}`;
      temp = '';
    }
  }
  return target >= 0 ? `${result}${decimal}` : `-${result}${decimal}`;
};

export default digitalToCash;
