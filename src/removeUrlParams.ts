import addQueryToUrl from "./addQueryToUrl";
import getUrlQuery from "./getUrlQuery";

/** 移除url上的指定参数 */
export function removeUrlParams(url:string, keys:string | string[]) {
  if (!url || !keys) {
    return url;
  }
  let _keys = keys;
  if (typeof (keys) === 'string') {
    _keys = [keys];
  }
  const urlParts = url.split('?');
  const params = getUrlQuery(url);
  if (urlParts.length > 1) {
    // 删除指定参数
    for (const key of _keys) {
      delete params[key];
    }
  }
  return addQueryToUrl(params, urlParts[0]);
}

export default removeUrlParams;
