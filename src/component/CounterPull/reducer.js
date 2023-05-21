import { v4 as uuid } from "uuid";
import createReducer from "../../createReducer";
import reducer, {
  counterCollectionReducer,
} from "./CounterCollection/reducers";

import { CREATE, DELETE, checkSubType } from "./types";

const INITIAL_PULL_ITEM_STATE = { id: uuid(), counters: {} };
const INITIAL_PULL_STATE = {};

function handleAddCouterPull(state, { payload = {} }) {
  const { id } = payload;
  return { ...state, [id]: { ...INITIAL_PULL_ITEM_STATE, id } };
}

function handleDeleteCounterPull(state, { payload }) {
  const { collectionId } = payload;
  const { [collectionId]: deletedPull, ...rest } = state;
  return rest;
}

const contersPullReducer = createReducer(
  {
    [CREATE]: handleAddCouterPull,
    [DELETE]: handleDeleteCounterPull,
  },
  INITIAL_PULL_STATE
);

export default (state, action) => {
  const newState = contersPullReducer(state, action);
  const collectionId = action?.payload?.collectionId;
  if (collectionId && newState[collectionId]) {
    return {
      ...newState,
      [collectionId]: {
        ...newState[collectionId],
        counters: reducer(newState[collectionId].counters, action),
      },
    };
  }
  return Object.fromEntries(
    Object.entries(newState).map(([id, collection]) => [
      id,
      { ...collection, counters: reducer(collection.counters, action) },
    ])
  );
};
