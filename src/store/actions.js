import { v4 as uuid } from 'uuid';

const ADD_COUNTER = 'counters/ADD_COUNTER';

export const addCounter = (id) => {
  return {
    type: ADD_COUNTER,
    payload: { id: id || uuid() },
  };
};

