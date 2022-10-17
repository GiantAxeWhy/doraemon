/** 是否在微信环境内 */
export const isWechat = () => {
  const ua = navigator.userAgent;
  return ua.toLowerCase().indexOf('micromessenger') !== -1;
};

export default isWechat;
