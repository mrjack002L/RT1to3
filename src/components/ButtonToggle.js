import React, { useState } from 'react';

const ButtonToggle = () => {
  const [enabled, setEnabled] = useState(true);

  return (
    <div>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Disable' : 'Enable'}
      </button>
      <button disabled={!enabled}>Click me</button>
    </div>
  );
};

export default ButtonToggle;
