const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

const update = (state, mutations) => ({ ...state, ...mutations });

export const incrementAction = () => ({
  type: INCREMENT,
});

export const decrementAction = () => ({
  type: DECREMENT,
});

export const COUNTER_INITIAL_STATE = {
  value: 0,
  warning: false,
};

const reducer = (state = COUNTER_INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      return update(state, { value: state.value + 1 });
    case DECREMENT:
      return update(state, { value: state.value - 1 });
  }
  return update(state, { warning: state.value > 5 });
};

export default reducer;

