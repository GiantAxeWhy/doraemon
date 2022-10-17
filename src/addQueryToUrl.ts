
import * as _ from 'lodash';

import { IObject } from './global';

/** 向url字符串追加参数，
 * 如果参数是一个url地址，那么需要先进行encodeURIComponent转义一下 */
export function addQueryToUrl(query:IObject, url?:string):string {
  if (url) {
    if (!_.isString(url)) {
      return '';
    }
  } else {
    url = '';
  }
  if (!query || !_.isPlainObject(query)) {
    return url;
  }
  const startIndex = url.indexOf('?');
  const lastIndex = url.length - 1;
  /**
   * - 如果没有？号
   * - 如果有？号且不是最后一个字符串
   */
  if (startIndex === -1) {
    url += '?';
  } else if (startIndex !== lastIndex && url.lastIndexOf('&') !== lastIndex) {
    url += '&';
  }
  for (const [key, value] of Object.entries(query)) {
    if (!_.isUndefined(value) && !_.isNull(value)) {
      url += `${key}=${query[key]}&`;
    }
  }
  // 去掉最后一个&
  url = url.substring(0, url.length - 1);
  return url;
}

export default addQueryToUrl;
