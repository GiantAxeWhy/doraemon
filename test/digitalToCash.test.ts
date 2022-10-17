import digitalToCash from '../src/digitalToCash';

describe('digitalToCash', () => {
  it('{}', () => {
    expect(digitalToCash({} as number)).toBe('');
  });
  it('0 => 0.00', () => {
    expect(digitalToCash(0)).toBe('0.00');
  });
  it('100 => 100.00', () => {
    expect(digitalToCash(100)).toBe('100.00');
  });
  it('1000 => 1,000.00', () => {
    expect(digitalToCash(1000)).toBe('1,000.00');
  });
  it('-100000000 => -100,000,000.00', () => {
    expect(digitalToCash(-100000000)).toBe('-100,000,000.00');
  });
  it('-9999.999 => -9,999.99', () => {
    expect(digitalToCash(-9999.999)).toBe('-9,999.99');
  });
  it('-9999.9 => -9,999.90', () => {
    expect(digitalToCash(-9999.9)).toBe('-9,999.90');
  });
});
