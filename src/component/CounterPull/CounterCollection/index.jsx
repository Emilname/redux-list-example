import React, { useCallback } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Counter from "./Counter";
import AddCounter from "./AddCounter";
import DeleteCollection from "./DeleteCollection";
import { addCounter } from "./actions";
import bindIdToActionCreators from "../../../store/bindIdToActionCreators";
import { deleteCounterPull } from "../actions";

const CounterCollection = ({
  deleteCounterPull,
  collectionId,
  addCounter,
  counters,
}) => {
  const deleteCollection = useCallback(
    () => deleteCounterPull(),
    [deleteCounterPull]
  );

  const onAddCounter = useCallback(() => addCounter(), [addCounter]);

  return (
    <div className="container">
      {Object.entries(counters).map(([id, value]) => (
        <Counter
          key={id}
          counter={value}
          collectionId={collectionId}
          counterId={id}
        />
      ))}
      <AddCounter addCounter={onAddCounter} />
      <DeleteCollection deleteCounter={deleteCollection} />
    </div>
  );
};
const mapStateToProps = (state, { collectionId }) => ({
  counters: state.pull[collectionId].counters,
});

const mapDispatchToProps = (dispatch, { collectionId }) =>
  bindActionCreators(
    {
      ...bindIdToActionCreators(
        { addCounter, deleteCounterPull },
        { collectionId }
      ),
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CounterCollection);
