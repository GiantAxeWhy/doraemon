/** 是否在手机、h5环境内（iPhone|iPod|iPad|Android|ios） */
export const isMobile = () => {
  const ua = navigator.userAgent;
  return !!ua.match(/(iPhone|iPod|iPad|Android|ios)/i);
};

export default isMobile;
