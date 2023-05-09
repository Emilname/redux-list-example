const bindActionCreator =
  (actionCreator, id) =>
  (...args) => {
    const actions = actionCreator(...args);
    return { ...actions, payload: { id, ...actions.payload } };
  };

const bindActionCreatorMap = (creators, id) =>
  Object.fromEntries(
    Object.entries(creators).map(([action, actionCreator]) => [action, bindActionCreator(actionCreator, id)])
  );

const bindIdToActionCreators = (actionCreators, id) => {
  return typeof actionCreators === 'function'
    ? bindActionCreator(actionCreators, id)
    : bindActionCreatorMap(actionCreators, id);
};

export default bindIdToActionCreators;

