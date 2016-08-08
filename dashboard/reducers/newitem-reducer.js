var items = {active:false};

export const newItemReducer = (state = items, action) => {
  switch (action.type) {
    case "NEW_ITEM_FORM":
      console.log("newitemform", state);
      console.log(action.payload);
      state = Object.assign({}, state, {active : action.payload.active});
      console.log("newitem",state);
      return state;
    case "CANCEL_ADD_NEW_ITEM":
      state = Object.assign({}, state, {active : action.payload.active});
      console.log("newitem",state);
      return state;
    default:
      return state;
  }
};
