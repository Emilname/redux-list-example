export function actionCreator(type, payloadCreator = (payload) => payload) {
  return function (payload = {}) {
    return {
      type,
      payload: payloadCreator(payload),
    };
  };
}
