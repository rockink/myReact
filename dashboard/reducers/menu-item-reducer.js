var items = [{
  name: "Home",
},{
  name: "Food",
}];

export const menuItemReducer = (state = items, action) => {
  console.log("itemReducer",state);

  // if (action.type == 'NEW_ITEM'){
  //     state = Object.assign([], state);
  //     state.push(action.payload);
  //   }

  return state;
};
