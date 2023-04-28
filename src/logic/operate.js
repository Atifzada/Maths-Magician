// eslint-disable-next-line import/no-extraneous-dependencies
import Big from 'big.js';

const operate = (firstNum, secondNum, operation) => {
  const first = Big(firstNum);
  const second = Big(secondNum);
  if (operation === '+') {
    return first.plus(second).toString();
  }
  if (operation === '-') {
    return first.minus(second).toString();
  }
  if (operation === 'x') {
    return first.times(second).toString();
  }
  if (operation === '÷') {
    try {
      return first.div(second).toString();
    } catch (error) {
      return 'Division by 0 is not allowed';
    }
  }

  if (operation === '%') {
    try {
      return first.mod(second).toString();
    } catch (error) {
      return 'Undefined';
    }
  }
  return true;
};

export default operate;
