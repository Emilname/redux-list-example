import { v4 as uuid } from 'uuid';
import { COUNTER_PULL, CREATE, DELETE } from './types';

const defaultPayloadCreator = (payload) => payload;

export const actionCreator =
  (actionType, payloadCreator = defaultPayloadCreator) =>
  (payload) => ({
    type: `${COUNTER_PULL}/${actionType}`,
    ...(payload ? { payload: payloadCreator(payload) } : {}),
  });

export const createCounterPull = actionCreator(CREATE, (id) => ({ id: id || uuid() }));
export const deleteCounterPull = actionCreator(DELETE, (id) => ({ id: id || uuid() }));

