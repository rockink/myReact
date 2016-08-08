import {combineReducers} from "redux";
import {menuItemReducer} from "./menu-item-reducer";



var menuLinker = (state = {action:"HOME"}, action) => {

    if(action.type == "GOTO")
    state = Object.assign({}, state, {action: action.payload.link});
    return state;
};

var food = {
  momo:{
    name: "momo",
    price: 30,
    ISBN: "15A456A"
  },
  pizza:{
    name: "pizza",
    price: 30,
    ISBN: "15A456A"
  },
  dosa:{
    name: "dosa",
    price: 30,
    ISBN: "15A456A"
  }
};

var FoodsReducer = (state = food, action) => {
    if(action.type == "GOTO"){
    state = Object.assign({}, state, {action: action.payload.link});
    return state;
    }

    if(action.type == "ADD_FOOD"){
      state = Object.assign({}, state);
      state[action.payload.name] = action.payload;
      return state;
    };

    return state;
};

var addUserForm = {
  meta: {
  addUserForm : false
}};


var AddUserReducer = (state = addUserForm, action) => {
  state = Object.assign({}, state);
    if(action.type == "ADD_USER"){
    state = action.payload;
  }
    return state;
};

var myUsers = {
  1:{
    name: "Nirmal",
    last: "Nepal"
  },
  2:{
    name: "Nirajan",
    last: "Nepal"
  }
};

var i = 3;
var UsersReducer = (state = myUsers, action) => {

  console.log("userreducer",state);
    if(action.type == "ADD_USER_FORM"){
      state = Object.assign({}, state);
      state[action.payload.name] = action.payload;
      i++;
    }

    return state;
};

export const allReducers = combineReducers({
  menuItems: menuItemReducer,
  foods: FoodsReducer,
  addUser: AddUserReducer,
  users: UsersReducer
});
