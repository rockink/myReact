export const counterReducer = (state = {content: 3}, action) => {
  switch (action.type) {
    case "INCREMENT":
      return Object.assign({}, state, {content: state.content + 1});
    case "DECREMENT":
      return Object.assign({}, state, {content: state.content - 1});
    case "ADD_NAME":
      return action.payload;
    default:
      return state;
    }
};
