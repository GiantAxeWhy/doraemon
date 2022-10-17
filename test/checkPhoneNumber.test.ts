import { checkPhoneNumber } from '../src/checkPhoneNumber';

describe('checkPhoneNumber', () => {
  it('null', () => {
    expect(checkPhoneNumber(null as string)).toBeFalsy();
  });
  it('undefined', () => {
    expect(checkPhoneNumber(undefined as string)).toBeFalsy();
  });
  it('empty string', () => {
    expect(checkPhoneNumber('')).toBeFalsy();
  });
  it('小于11位数', () => {
    expect(checkPhoneNumber('132322')).toBeFalsy();
  });
  it('大于11位数', () => {
    expect(checkPhoneNumber('13123123131231233')).toBeFalsy();
  });
  it('11位字符串', () => {
    expect(checkPhoneNumber('13222222222')).toBeTruthy();
  });
  it('11位字数字', () => {
    expect(checkPhoneNumber(13222222222)).toBeTruthy();
  });
  it('带小数的11位字数字', () => {
    expect(checkPhoneNumber(13.222222222)).toBeFalsy();
  });
  it('以不是1的数字开头', () => {
    expect(checkPhoneNumber('23232323231')).toBeFalsy();
    expect(checkPhoneNumber('43232323231')).toBeFalsy();
  });
});
