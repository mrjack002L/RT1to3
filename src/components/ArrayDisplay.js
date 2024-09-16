import React from 'react';

const ArrayDisplay = () => {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default ArrayDisplay;
