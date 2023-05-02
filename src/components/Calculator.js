/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import React from 'react';

function Calculator(props) {
  const { calcState, handleClick } = props;
  return (
    <>
      <h1 className="calTitle">Let's do some Math</h1>
      <div className="btnsContainer">
        <div className="display">
          {calcState.result}
          {calcState.function}
          {calcState.next}
        </div>

        <div>
          <button type="button" className="Btns" onClick={handleClick}>AC</button>
          <button type="button" className="Btns" onClick={handleClick}>+/-</button>
          <button type="button" className="Btns" onClick={handleClick}>%</button>
          <button type="button" className="Btns MathOperations" onClick={handleClick}>÷</button>
        </div>
        <div>
          <button type="button" className="Btns" onClick={handleClick}>7</button>
          <button type="button" className="Btns" onClick={handleClick}>8</button>
          <button type="button" className="Btns" onClick={handleClick}>9</button>
          <button type="button" className="Btns MathOperations" onClick={handleClick}>x</button>
        </div>
        <div>
          <button type="button" className="Btns" onClick={handleClick}>4</button>
          <button type="button" className="Btns" onClick={handleClick}>5</button>
          <button type="button" className="Btns" onClick={handleClick}>6</button>
          <button type="button" className="Btns MathOperations" onClick={handleClick}>-</button>
        </div>
        <div>
          <button type="button" className="Btns" onClick={handleClick}>1</button>
          <button type="button" className="Btns" onClick={handleClick}>2</button>
          <button type="button" className="Btns" onClick={handleClick}>3</button>
          <button type="button" className="Btns MathOperations" onClick={handleClick}>+</button>
        </div>
        <div>
          <button type="button" className="Btns calcZero" onClick={handleClick}>0</button>
          <button type="button" className="Btns" onClick={handleClick}>.</button>
          <button type="button" className="Btns MathOperations" onClick={handleClick}> =</button>
        </div>
      </div>
    </>

  );
}

Calculator.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  calcState: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};
export default Calculator;
