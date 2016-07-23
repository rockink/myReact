
const ADD_TODO = 'ADD_TODO';


 function addTodo(text){
      return{
        type: ADD_TODO,
        text
      }
  }

module.export = addTodo;
