import calculate from '../logic/calculate';

describe('testing calculate function', () => {
  test('result to be {result: 0, next: null, function: null} when pressBtn is AC', () => {
    const obj = {
      result: 0,
      next: null,
      function: null,
    };
    const btn = 'AC';
    const output = calculate(obj, btn);
    expect(output).toEqual(
      {
        result: 0,
        next: null,
        function: null,
      },
    );
  });
  test(' return {total: 5,next: null,operation: null} when pressBtn is =', () => {
    const obj = {
      result: 3,
      next: 2,
      function: '+',
    };
    const btn = '=';
    const output = calculate(obj, btn);
    expect(output).toEqual({
      result: '5',
      next: null,
      function: null,
    });
  });
  test(' return {result: null, next: 0, operation: null} when pressBtn is 0',
    () => {
      const obj = {
        result: null,
        next: '0',
        function: null,
      };
      const btn = '0';
      const result = calculate(obj, btn);
      expect(result).toEqual({});
    });
});
