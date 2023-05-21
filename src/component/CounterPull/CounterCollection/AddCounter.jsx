import React, { useCallback } from 'react';

const AddCounter = ({ addCounter }) => {
  const onClick = useCallback(() => addCounter(), [addCounter]);
  return (
    <div className="add">
      <button onClick={onClick}>+</button>
    </div>
  );
};

export default AddCounter;

