import {combineReducers} from "redux";

var items = {
  momo:{
    price: 10
  },
  pizza: {
    price: 50
  }
};

const itemReducer = (state = items, action) => {
  return state;
};


const counter = (state = {content: 3}, action) => {
  switch (action.type) {
    case "INCREMENT":
    console.log("increment", state);
      return Object.assign({}, state, {content: state.content + 1});
    case "DECREMENT":
    return Object.assign({}, state, {content: state.content - 1});
    case "ADD_NAME":
      return action.payload;
    default:
      return state;
    }
};

const addName = (state={}, action) => {
  switch (action.type) {
    case "ADD_NAME":
      return state;
    default:
      return state;
  }
};




var shopContent ={
  "momo" :{
    id: 1,
    price : 10,
    number: 1
  }
};


const shoppingReducer = function(state = shopContent, action){
  switch (action.type) {
    case "ADD_SHOP":
      state =  Object.assign({}, state);
      var number = 0;


      if(state[action.payload.item] == undefined){

          console.log("item undefined");
          number = action.payload.number;
      }else{
        console.log("defined item",state[action.payload.item]);
        number = state[action.payload.item].number;
        console.log("number in else is ", number);
        number = state[action.payload.item].number + 1;
        console.log("number in else after increment is ", number);
      }

      console.log("vaulue of number is ", state.momo.number);

      state[action.payload.item] = {
        price: action.payload.price,
        number: number
      };
    return state;
    default:
    return state;
  }
}


export const allReducers = combineReducers({
  name: addName,
  count: counter,
  items: itemReducer,
  shop: shoppingReducer
});
