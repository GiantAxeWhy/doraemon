import { domain } from './../src/constants';
import removeUrlParams from '../src/removeUrlParams';

describe('removeUrlParams', () => {
  const url = `${domain}?a=123&b=456&c=789`;
  it('validate params', () => {
    expect(removeUrlParams(null, null)).toBeNull();
    expect(removeUrlParams(null, 'a')).toBeNull();
    expect(removeUrlParams(url, null)).toBe(url);
  });
  it('test keys & url', () => {
    expect(removeUrlParams(domain, 'a')).toBe(domain);
    expect(removeUrlParams(domain, ['a'])).toBe(domain);
    expect(removeUrlParams(url, 'a')).toBe(`${domain}?b=456&c=789`);
    expect(removeUrlParams(url, ['a', 'b'])).toBe(`${domain}?c=789`);
    expect(removeUrlParams(url, [])).toBe(url);
  });
});
