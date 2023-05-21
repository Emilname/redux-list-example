import createReducer from "../../../../createReducer";
import { INCREMENT, DECREMENT, WARN } from "./types";

export const COUNTER_INITIAL_STATE = {
  value: 0,
  warning: false,
};

function handleIncrementAction(state) {
  return { ...COUNTER_INITIAL_STATE, value: state.value + 1 };
}

function handleDecrementAction(state) {
  return { ...COUNTER_INITIAL_STATE, value: state.value - 1 };
}

function handleWarnAction(state) {
  return { ...state, warning: true };
}

const actionHandlers = {
  [INCREMENT]: handleIncrementAction,
  [DECREMENT]: handleDecrementAction,
  [WARN]: handleWarnAction,
};

export default createReducer(actionHandlers, COUNTER_INITIAL_STATE);
