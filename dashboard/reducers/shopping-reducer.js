var shopContent ={
  // "momo" :{
  //   id: 1,
  //   price : 10,
  //   number: 1
  // }
};


export const shoppingReducer = function(state = shopContent, action){
  switch (action.type) {
    case "ADD_SHOP":
      state =  Object.assign({}, state);
      var payload = action.payload;

      var number = 0;
      if(state[payload.item] == undefined){
          number = payload.number;
      }else{
        number = state[payload.item].number + 1;
      }

      state[payload.item] = {
        price: payload.price,
        number: number
      };
    return state;
    default:
    return state;
  }
}
