import React, { useCallback } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { createCounterPull, deleteCounterPull } from "./actions";
import CounterCollection from "./CounterCollection";
import AddCollection from "./AddCollection";

const CounterPull = ({ pull, createCounterPull }) => {
  const addCollection = useCallback(
    () => createCounterPull(),
    [createCounterPull]
  );
  return (
    <div>
      {Object.entries(pull).map(([collectionId]) => (
        <CounterCollection
          key={collectionId}
          collectionId={collectionId}
          onDelete={deleteCounterPull}
        />
      ))}
      <div
        style={{ display: "flex", justifyContent: "center" }}
        className="add"
      >
        <AddCollection onClick={addCollection} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ pull: state.pull });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ createCounterPull }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CounterPull);
