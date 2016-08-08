import {combineReducers} from "redux";
import {itemReducer} from "./item-reducer";
import {counterReducer} from "./counter-reducer";
import {addNameReducer } from "./addname-reducer";
import {shoppingReducer } from "./shopping-reducer";
import {newItemReducer } from "./newitem-reducer";


export const allReducers = combineReducers({
  name: addNameReducer,
  count: counterReducer,
  items: itemReducer,
  shop: shoppingReducer,
  newItem: newItemReducer
});
