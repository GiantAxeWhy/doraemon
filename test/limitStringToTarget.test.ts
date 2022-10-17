import limitStringToTarget from '../src/limitStringToTarget';

describe('limitStringToTarget', () => {
  const value = '五星红旗迎风飘扬';
  it('validate params', () => {
    expect(limitStringToTarget(null, 6)).toBeNull();
    expect(limitStringToTarget(value, null)).toEqual(value);
    expect(limitStringToTarget(value)).toEqual(value);
    expect(limitStringToTarget(null, null)).toBeNull();
  });
  it('test limit', () => {
    expect(limitStringToTarget(value, 6)).toEqual('五星红旗迎风...');
    expect(limitStringToTarget(value, 12)).toEqual(value);
  });
  it('test target', () => {
    expect(limitStringToTarget(value, 6, '。。。')).toEqual('五星红旗迎风。。。');
    expect(limitStringToTarget(value, 6, '')).toEqual('五星红旗迎风');
  });
});
