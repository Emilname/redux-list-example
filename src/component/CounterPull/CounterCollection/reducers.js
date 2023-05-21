import { v4 as uuid } from "uuid";
import createReducer from "../../../createReducer";

import counterReducer, { COUNTER_INITIAL_STATE } from "./Counter/reducers";

import { ADD_COUNTER, DELETE_COUNTER } from "./types";

const INITIAL_STATE = {
  [uuid()]: COUNTER_INITIAL_STATE,
  [uuid()]: COUNTER_INITIAL_STATE,
  [uuid()]: COUNTER_INITIAL_STATE,
};

const reducer = (state = INITIAL_STATE, action) => {
  const { id } = action.payload || {};
  if (!id) return state;
  const counter = state[id];
  if (!counter) return state;
  if (action.type.startsWith("counter/")) {
    return { ...state, [id]: counterReducer(counter, action) };
  }
  switch (action.type) {
    case ADD_COUNTER:
  }
};

function onAddCounter(state, { payload }) {
  const { id } = payload;
  return { ...state, [id]: COUNTER_INITIAL_STATE };
}

function onDeleteCounter(state, { payload }) {
  const { id } = payload;
  const { [id]: deletedCounter, ...restCounters } = state;
  return restCounters;
}

export const counterCollectionReducer = createReducer(
  { [ADD_COUNTER]: onAddCounter, [DELETE_COUNTER]: onDeleteCounter },
  INITIAL_STATE
);

export default (state, action) => {
  const newState = counterCollectionReducer(state, action);
  const id = action?.payload?.id;
  if (id && newState[id]) {
    return { ...newState, [id]: counterReducer(newState[id], action) };
  }
  return newState;
};
