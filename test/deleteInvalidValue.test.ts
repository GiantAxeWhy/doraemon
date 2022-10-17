import { deleteInvalidValue } from '../src/deleteInvalidValue';

describe('deleteInvalidValue', () => {
  it('null', () => {
    expect(deleteInvalidValue(null)).toBeNull();
  });
  it('undefined', () => {
    expect(deleteInvalidValue(undefined)).toBeUndefined();
  });
  it('Empty object', () => {
    expect(deleteInvalidValue({})).toEqual({});
  });
  it('has NaN', () => {
    expect(deleteInvalidValue({ a: NaN, b: 2 })).toEqual({ b: 2 });
  });
  it('has null', () => {
    expect(deleteInvalidValue({ a: null, b: 2 })).toEqual({ b: 2 });
  });
  it('has undefined', () => {
    expect(deleteInvalidValue({ a: undefined, b: 2 })).toEqual({ b: 2 });
  });
  it('normal', () => {
    expect(deleteInvalidValue({ a: 1, b: 2 })).toEqual({ a: 1, b: 2 });
  });
});
