import isIos from './isIos';
import { isString } from 'lodash';

/** 复制字符串至粘贴板并返回复制是否成功 */
export const copyTextToClipboard = (value:string):Promise<boolean> => new Promise((resolve) => {
  if (!isString(value)) {
    resolve(false);
  }
  try {
    const iInput = document.createElement('input');
    iInput.value = value;
    document.body.appendChild(iInput);
    if (isIos()) {
      // 防止低ios系统版本（ios 11）出现弹出小键盘
      iInput.disabled = true;
      iInput.setSelectionRange(0, value.length);
    } else {
      iInput.select();
    }
    document.execCommand('Copy');
    iInput.style.display = 'none';
    document.body.removeChild(iInput);
    resolve(true);
  } catch (error) {
    resolve(false);
  }
});

export default copyTextToClipboard;
