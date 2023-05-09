import { INCREMENT, DECREMENT } from './types';

const COUNTER_INITIAL_STATE = {
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

export default reducer(actionHandlers, COUNTER_INITIAL_STATE);

