export default function (
  actionHandlers = {},
  initState = {},
  selector = (state, action) => state
) {
  return (state = initState, action = {}) => {
    const handler = actionHandlers[action.type];
    return handler ? handler(selector(state), action) : state;
  };
}
