import operate from './operate';

const checkNum = (item) => !/[^0-9]/.test(item);

const calculate = (obj, pressBtn) => {
  if (pressBtn === 'AC') {
    return {
      result: 0,
      next: null,
      function: null,
    };
  }
  if (checkNum(pressBtn)) {
    if (pressBtn === '0' && obj.next === '0') {
      return {
        result: 0,
        next: null,
        function: null,
      };
    }
    if (obj.function) {
      if (obj.next && obj.next !== '0') {
        return { ...obj, next: obj.next + pressBtn };
      }
      return { ...obj, next: pressBtn };
    }
    if (obj.next && obj.next !== '0') {
      return {
        next: obj.next + pressBtn,
        result: 0,
      };
    }
    return {
      next: pressBtn,
      result: 0,
    };
  }
  if (pressBtn === '.') {
    if (obj.next) {
      if (obj.next.includes('.')) {
        return { ...obj };
      }
      return { ...obj, next: `${obj.next}.` };
    }
    if (obj.function) {
      return { ...obj, next: '0.' };
    }
    if (obj.result) {
      if (obj.result.includes('.')) {
        return {};
      }
      return { ...obj, next: `${obj.result}.` };
    }
    return { ...obj, next: '0.' };
  }
  if (pressBtn === '=') {
    if (obj.next && obj.function) {
      return {
        result: operate(obj.result, obj.next, obj.function),
        next: null,
        function: null,
      };
    }
    return {};
  }
  if (pressBtn === '+/-') {
    if (obj.next) {
      return { ...obj, next: (-1 * parseFloat(obj.next)).toString() };
    }
    if (obj.result) {
      return { ...obj, result: (-1 * parseFloat(obj.result)).toString() };
    }
    return {};
  }
  if (!obj.next && obj.result && !obj.function) {
    return { ...obj, function: pressBtn };
  }
  if (obj.function) {
    if (obj.result && !obj.next) {
      return { ...obj, function: pressBtn };
    }
    if (!obj.result) {
      return { result: 0, function: pressBtn };
    }
    return {
      result: operate(obj.result, obj.next, obj.function),
      next: null,
      function: pressBtn,
    };
  }
  if (!obj.next) {
    return { function: pressBtn };
  }
  return {
    result: obj.next,
    next: null,
    function: pressBtn,
  };
};

export default calculate;
