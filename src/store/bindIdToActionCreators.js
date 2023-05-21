const bindParamsToActionCreator =
  (actionCreator, params = {}) =>
  (...args) => {
    const actions = actionCreator(...args);
    return { ...actions, payload: { ...params, ...actions.payload } };
  };

const bindActionCreatorMap = (creators, params) =>
  Object.fromEntries(
    Object.entries(creators).map(([action, actionCreator]) => [
      action,
      bindParamsToActionCreator(actionCreator, params),
    ])
  );

const bindIdToActionCreators = (actionCreators, params) => {
  return typeof actionCreators === "function"
    ? bindParamsToActionCreator(actionCreators, params)
    : bindActionCreatorMap(actionCreators, params);
};

export default bindIdToActionCreators;
