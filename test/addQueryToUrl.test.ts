import { addQueryToUrl } from '../src/addQueryToUrl';
import { domain } from '../src/constants';

const query = {
  name: 'doraemon',
  time: 2020,
};
const queryNull = {
  name: 'doraemon',
  time: 2020,
  author: null,
};
const queryUndefined = {
  name: 'doraemon',
  time: 2020,
  author: undefined,
};
const result = `${domain}?name=doraemon&time=2020`;
const parameterStr = '?name=doraemon&time=2020';

describe('addQueryToUrl', () => {
  it('query is undefined', () => {
    expect(addQueryToUrl(undefined, domain)).toEqual(domain);
  });
  it('query is not a real object', () => {
    expect(addQueryToUrl([1, 2], domain)).toEqual(domain);
  });
  it('query is a empty object', () => {
    expect(addQueryToUrl({}, domain)).toEqual(domain);
  });
  it('query has a null element', () => {
    expect(addQueryToUrl(queryNull, domain)).toEqual(result);
  });
  it('query has a undefined element', () => {
    expect(addQueryToUrl(queryUndefined, domain)).toEqual(result);
  });
  it('url is undefined', () => {
    expect(addQueryToUrl(query)).toEqual(parameterStr);
  });
  it('url is not a string', () => {
    expect(addQueryToUrl(query, {} as string)).toEqual('');
  });
  it('url is a empty string', () => {
    expect(addQueryToUrl(query, '')).toEqual(parameterStr);
  });
  it('has a `?` in url', () => {
    expect(addQueryToUrl(query, `${domain}?`)).toEqual(result);
  });
  it('has a `?` and the last character is `&` in url', () => {
    const _url = `${domain}?author=urnotzane`;
    expect(addQueryToUrl(query, `${_url}&`)).toEqual(`${_url}&name=doraemon&time=2020`);
  });
  it('a parameter has been added to the end of the url', () => {
    const _url = `${domain}?author=urnotzane`;
    expect(addQueryToUrl(query, _url)).toEqual(`${_url}&name=doraemon&time=2020`);
  });
  it('query & url are undefined', () => {
    expect(addQueryToUrl(undefined, undefined)).toEqual('');
  });
  it('query & url are reasonable', () => {
    expect(addQueryToUrl(query, domain)).toEqual(result);
  });
});
