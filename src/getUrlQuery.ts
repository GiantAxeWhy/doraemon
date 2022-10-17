import * as _ from 'lodash';

import { IObject } from './global';

/** 获取url参数，被encode的字符会被decode */
export const getUrlQuery = (url:string = location.href) => {
  const result:IObject = {};
  // 不是string
  if (!_.isString(url)) {
    return result;
  }
  const start = url.indexOf('?');
  // 没有参数
  if (start === -1 ) {
    return result;
  }
  // 有?号没参数
  if (start === url.length - 1) {
    return result;
  }
  const queryStr = url.substring(start + 1);
  queryStr.split('&').forEach((item) => {
    const equalIndex = item.indexOf('=');
    if (equalIndex > -1) {
      const value = item.substring(equalIndex + 1);
      result[item.substring(0, equalIndex)] = decodeURIComponent(value);
    }
  });
  return result;
};

export default getUrlQuery;
