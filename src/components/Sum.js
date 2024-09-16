import React, { useState, useEffect } from 'react';

const SumComponent = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [sum, setSum] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    // Check if both inputs are valid numbers
    const isValidNum1 = !isNaN(parseFloat(num1)) && isFinite(num1);
    const isValidNum2 = !isNaN(parseFloat(num2)) && isFinite(num2);

    // Enable the button only if both inputs are valid numbers
    setIsButtonDisabled(!(isValidNum1 && isValidNum2));
  }, [num1, num2]);

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
      <button 
        onClick={handleSum} 
        disabled={isButtonDisabled}
      >
        Calculate Sum
      </button>
      <h4>Sum: {sum}</h4>
    </div>
  );
};

export default SumComponent;
