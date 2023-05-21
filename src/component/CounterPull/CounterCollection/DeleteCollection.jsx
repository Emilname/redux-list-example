import React, { useCallback } from "react";

const DeleteCollection = ({ deleteCounter }) => {
  const onClick = useCallback(() => deleteCounter(), [deleteCounter]);
  return (
    <div className="add">
      <button onClick={onClick}>🗑️</button>
    </div>
  );
};

export default DeleteCollection;
