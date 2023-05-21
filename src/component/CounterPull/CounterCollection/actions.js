import { v4 as uuid } from "uuid";

import { actionCreator } from "../../../actions";

import { ADD_COUNTER, DELETE_COUNTER } from "./types";

export const addCounter = actionCreator(ADD_COUNTER, ({ id }) => ({
  id: id || uuid(),
}));

export const deleteCounter = actionCreator(DELETE_COUNTER);
