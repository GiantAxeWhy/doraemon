/** @description 截取`limit`长度（默认是10）的字符串并向末尾添加指定字符串`target`（默认为...）
 * @example limitStringToTarget('五星红旗迎风飘扬', 5) => '五星红旗迎...'
 */
export const limitStringToTarget = (value:string, limit:number = 10, target:string = '...') => {
  if (!value || !limit) {
    return value;
  }
  const len = value.length;
  if (len > limit) {
    return `${value.substring(0, limit)}${target}`;
  }
  return value;
};

export default limitStringToTarget;
