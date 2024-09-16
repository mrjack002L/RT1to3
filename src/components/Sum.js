import React, { useState } from 'react';

const SumComponent = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(0);

  const handleSum = () => {
    // Convert input values to numbers and calculate the sum
    setSum(parseFloat(num1) + parseFloat(num2));
  };

  return (
    <div>
      <input 
        type="number" 
        value={num1} 
        onChange={(e) => setNum1(e.target.value)} 
        placeholder="Enter first number"
      />
      <input 
        type="number" 
        value={num2} 
        onChange={(e) => setNum2(e.target.value)} 
        placeholder="Enter second number"
      />
      <button onClick={handleSum}>Calculate Sum</button>
      <h4>Sum: {sum}</h4>
    </div>
  );
};

export default SumComponent;
