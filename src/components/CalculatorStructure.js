import React, { useState } from 'react';
import Calculator from './Calculator';
import calculate from '../logic/calculate';

const CalculatorStructure = () => {
  const [calcState, setCalcState] = useState({ result: 0, next: null, function: null });
  const handleClick = (e) => {
    setCalcState((currentCalcState) => calculate(currentCalcState, e.target.textContent));
  };
  return (
    <div className="CalculatorStructure">
      <Calculator calcState={calcState} handleClick={handleClick} />
    </div>
  );
};
export default CalculatorStructure;
