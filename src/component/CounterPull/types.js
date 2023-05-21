export const COUNTER_PULL = "COUNTER_PULL";

export const typeCreator = (type) => `${COUNTER_PULL}/${type}`;
export const checkSubType = (type) =>
  type.includes(COUNTER_PULL) || type.includes("@@");

export const CREATE = typeCreator("CREATE");
export const DELETE = typeCreator("DELETE");

export default COUNTER_PULL;
