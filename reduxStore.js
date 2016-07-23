import { createStore } from 'redux';


let store = createStore(reducer);

store.subscribe(() =>
  console.log("logging store ", store.getState())
);


const ADD_TODO = 'ADD_TODO';


 function addTodo(text){
      return{
        type: ADD_TODO,
        text
      }
  }
// store.dispatch({type:"INCREMENT"});

store.subscribe(()=>{
  console.log("store changed", store.getState());
});


store.dispatch(addTodo("nirmal"));
store.dispatch(addTodo("nirajan"));
store.dispatch(addTodo("nisha"));


module.exports = store;
