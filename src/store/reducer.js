import counterReducer, { COUNTER_INITIAL_STATE as COUNTER_INITIAL_STATE } from './counterReducer';
import { v4 as uuid } from 'uuid';

const ADD_COUNTER = 'counters/ADD_COUNTER';

const INITIAL_STATE = {
  [uuid()]: COUNTER_INITIAL_STATE,
  [uuid()]: COUNTER_INITIAL_STATE,
  [uuid()]: COUNTER_INITIAL_STATE,
};

export const reducer = (state = INITIAL_STATE, action) => {
  const { id } = action.payload || {};
  if (!id) {
    return state;
  }
  if (action.type.startsWith('counter/')) {
    return { ...state, [id]: counterReducer(state[id], action) };
  }
  switch (action.type) {
    case ADD_COUNTER:
      return { ...state, [id]: COUNTER_INITIAL_STATE };
  }
};

export default reducer;

