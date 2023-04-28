import React from 'react';

function CalculatorDesign() {
  return (
    <>
      <div className="display">00</div>
      <div className="btnsContainer">
        <div>
          <button type="button" className="Btns">AC</button>
          <button type="button" className="Btns">+/-</button>
          <button type="button" className="Btns">%</button>
          <button type="button" className="Btns MathOperations">÷</button>
        </div>
        <div>
          <button type="button" className="Btns">7</button>
          <button type="button" className="Btns">8</button>
          <button type="button" className="Btns">9</button>
          <button type="button" className="Btns MathOperations">x</button>
        </div>
        <div>
          <button type="button" className="Btns">4</button>
          <button type="button" className="Btns">5</button>
          <button type="button" className="Btns">6</button>
          <button type="button" className="Btns MathOperations">-</button>
        </div>
        <div>
          <button type="button" className="Btns">1</button>
          <button type="button" className="Btns">2</button>
          <button type="button" className="Btns">3</button>
          <button type="button" className="Btns MathOperations">+</button>
        </div>
        <div>
          <button type="button" className="Btns calcZero">0</button>
          <button type="button" className="Btns">.</button>
          <button type="button" className="Btns MathOperations"> =</button>
        </div>
      </div>
    </>

  );
}

export default CalculatorDesign;
