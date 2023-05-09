import { INCREMENT, DECREMENT } from './types';
import { actionCreator } from '../actions';

export const incrementAction = () => ({
  type: INCREMENT,
});

export const decrementAction = () => ({
  type: DECREMENT,
});

