import operate from '../logic/operate';

describe('testing operate function', () => {
  test('result  of 5 + 5 to be 10', () => {
    expect(operate(5, 5, '+')).toBe('10');
  });
  test('result of 5 - 5 to be 0', () => {
    expect(operate(5, 5, '-')).toBe('0');
  });
  test('result of 5 x 5 to be 0', () => {
    expect(operate(5, 5, 'x')).toBe('25');
  });
  test('result  of 5 ÷ 5 to be 1', () => {
    expect(operate(5, 5, '÷')).toBe('1');
  });
  test('result  100 % 5 to be "0"', () => {
    expect(operate(100, 5, '%')).toBe('0');
  });
});
