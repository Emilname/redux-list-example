import React from "react";

const AddCollection = ({ onClick }) => {
  return (
    <button style={{ color: "red" }} onClick={onClick}>
      +
    </button>
  );
};

export default AddCollection;
