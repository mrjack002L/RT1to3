import React, { useState } from 'react';

const ChildComponents = () => {
  const [components, setComponents] = useState([]);

  const addComponent = () => {
    setComponents([...components, <div key={components.length}>Child Component</div>]);
  };

  return (
    <div>
      <button onClick={addComponent}>Add Component</button>
      {components}
    </div>
  );
};

export default ChildComponents;
