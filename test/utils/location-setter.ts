import { IObject } from "../../src/global";

/** 设置location的类 */
export class LocationSetter {
  constructor() {
    this._defineLocation();
  }
  private _defineLocation = (value:IObject = {}) => {
    Object.defineProperty(global, 'location', {
      value,
      writable : true,
    });
  }
  /** 设置location */
  set = (location:any) => {
    global.location = location;
  }
  /** 重置为初始值 */
  reset = () => {
    this.set(undefined);
  }
}
