import React, { useState } from 'react';

const ShowHide = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Hide' : 'Show'}
      </button>
      {visible && <div>This is a visible element</div>}
    </div>
  );
};

export default ShowHide;
