import React, { useState } from 'react';
import './App.js';
import './style.css';

function App() {
  const [input1, setInput1] = useState('');
const [input2, setInput2] = useState('');
const [result, setResult] = useState('');

const handleInputChange = (e, inputType) => {
  const value = e.target.value;
  if (inputType === 'input1') {
    setInput1(value);
  } else {
    setInput2(value);
  }
};

const handleOperation = (operation) => {
  const num1 = parseFloat(input1);
  const num2 = parseFloat(input2);

  if (isNaN(num1) || isNaN(num2)) {
    setResult('Invalid input');
    return;
  }

  switch (operation) {
    case '+':
      setResult(num1 + num2);
      break;
    case '-':
      setResult(num1 - num2);
      break;
    case '*':
      setResult(num1 * num2);
      break;
    case '/':
      if (num2 === 0) {
        setResult('Division by zero');
      } else {
        setResult(num1 / num2);
      }
      break;
    case 'sqrt':
      setResult(Math.sqrt(num1));
      break;
    case 'pow':
      setResult(Math.pow(num1, num2));
      break;
    default:
      setResult('Invalid operation');
      break;
  }
};

  return (
    <div className='calc'>
    <div className="App">
      <h1 className='one-h1'>Simple Calculator</h1>
      <div>
        <input className='inp' type="text" value={input1} onChange={(e) => handleInputChange(e, 'input1')} />
        <input className='inp' type="text" value={input2} onChange={(e) => handleInputChange(e, 'input2')} />
      </div>
      <div>
        <button className='btn' id='btn1' onClick={() => handleOperation('+')}>+</button>
        <button className='btn' id='btn2' onClick={() => handleOperation('-')}>-</button>
        <button className='btn' id='btn3' onClick={() => handleOperation('*')}>*</button>
        <button className='btn' id='btn4' onClick={() => handleOperation('/')}>/</button>
        <button className='btn' id='btn5' onClick={() => handleOperation('sqrt')}>√</button>
        <button className='btn' id='btn6' onClick={() => handleOperation('pow')}>^</button>
      </div>
      <div>
        <p className='result'>Result: {result}</p>
      </div>
    </div>
    </div>
  );
}
  

export default App;
