import { v4 as uuid } from "uuid";

import { actionCreator } from "../../actions";

import { CREATE, DELETE } from "./types";

export const createCounterPull = actionCreator(CREATE, ({ id }) => ({
  id: id || uuid(),
}));
export const deleteCounterPull = actionCreator(DELETE);
