import { v4 as uuid } from 'uuid';
import { COUNTER_COLLECTION, ADD_COUNTER } from './types';
import { actionCreator as parentActionCreator } from '../actions';

export const addCounter = parentActionCreator(ADD_COUNTER, (id) => ({ id: id || uuid() }));

export const actionCreator = (actionType, payload) =>
  parentActionCreator(`${COUNTER_COLLECTION}/${actionType}`, payload);

