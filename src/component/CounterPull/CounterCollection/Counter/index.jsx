import React, { useCallback } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import bindIdToActionCreators from "../../../../store/bindIdToActionCreators";
import { increment, decrement } from "./actions";
import { deleteCounter } from "../actions";

const Counter = ({ counter, increment, deleteCounter, decrement }) => {
  const onIncrement = useCallback(() => increment(), [increment]);
  const onDecrement = useCallback(() => decrement(), [decrement]);
  const onDeleteCounter = useCallback(() => deleteCounter(), [deleteCounter]);
  return (
    <div className={"redux" + (counter.warning ? " warning" : "")}>
      <h1>{counter.value}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <button onClick={onDeleteCounter}>🗑️</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch, { collectionId, counterId }) =>
  bindActionCreators(
    bindIdToActionCreators(
      {
        increment,
        decrement,
        deleteCounter,
      },
      { collectionId, id: counterId }
    ),
    dispatch
  );
export default connect(null, mapDispatchToProps)(Counter);
