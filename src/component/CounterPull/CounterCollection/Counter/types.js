import { typeCreator as parentTypeCreator } from "../types";

const COUNTER_NAMESPACE = "COUNTER";

export const typeCreator = (type) =>
  parentTypeCreator(`${COUNTER_NAMESPACE}/${type}`);

export const INCREMENT = typeCreator("INCREMENT");
export const DECREMENT = typeCreator("DECREMENT");
export const WARN = typeCreator("WARN");
