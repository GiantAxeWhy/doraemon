/** 是否在ios环境内 */
export const isIos = () => {
  const ua = navigator.userAgent;
  return !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
};

export default isIos;
