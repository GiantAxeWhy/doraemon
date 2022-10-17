import { getUrlQuery } from '../src/getUrlQuery';
import { domain } from '../src/constants';
import { LocationSetter } from './utils/location-setter';

describe('getUrlQuery', () => {
  const locationSetter = new LocationSetter();
  it('default location.href', () => {
    locationSetter.set({ href: `${domain}?a=1` });
    expect(getUrlQuery()).toEqual({ a: '1' });
  });
  it('null', () => {
    expect(getUrlQuery(null)).toEqual({});
  });
  it('empty string', () => {
    expect(getUrlQuery('')).toEqual({});
  });
  it('https://example', () => {
    expect(getUrlQuery('https://example')).toEqual({});
  });
  it('https://example?', () => {
    expect(getUrlQuery('https://example?')).toEqual({});
  });
  it('https://example?a=123', () => {
    expect(getUrlQuery('https://example?a=123')).toEqual({ a: '123' });
  });
  it('https://example?a=123&b=321', () => {
    expect(getUrlQuery('https://example?a=123&b=321')).toEqual({ a: '123', b: '321' });
  });
  it('https://example?a=123&b=321&', () => {
    expect(getUrlQuery('https://example?a=123&b=321&')).toEqual({ a: '123', b: '321' });
  });
});
