/** 设置userAgent的类 */
export class UserAgentSetter {
  private _userAgent:string = '';
  constructor() {
    this._userAgent = navigator.userAgent;
    this._defineUserAgent();
  }
  private _defineUserAgent = () => {
    Object.defineProperty(navigator, "userAgent", {
      value: navigator.userAgent,
      writable : true,
    });
  }
  /** 设置userAgent */
  set = (userAgent:string) => {
    // @ts-ignore
    navigator.userAgent = userAgent;
  }
  /** 重置为初始值 */
  reset = () => {
    this.set(this._userAgent);
  }
}
