import { typeCreator as parentTypeCreator } from "../types";

export const COUNTER_COLLECTION = "COUNTER_COLLECTION";

export const typeCreator = (type) =>
  parentTypeCreator(`${COUNTER_COLLECTION}/${type}`);

export const ADD_COUNTER = typeCreator("ADD_COUNTER");
export const DELETE_COUNTER = typeCreator("DELETE_COUNTER");
