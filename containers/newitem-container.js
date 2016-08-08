import React from "react";
import {connect, Provider} from "react-redux";

let NewItemForm = ({newItemState, dispatch})=>{

  let input = {
    cancel:false
  };

  var newItem;

  if(!newItemState)
    return(<p></p>);

  newItem = <form
        onSubmit = {(e) =>{
        e.preventDefault();

        dispatch({
          type: "NEW_ITEM",
          payload: {
            src:"/pic/momo.jpg",
            price: input.price.value,
            name: input.name.value
          }
        });

      }}
    >
    <input type="text" defaultValue="Item Name" ref={name => {input.name = name}}    />
    <input type="text" defaultValue="Price" ref={price => {input.price = price}}     />
    <input type="submit" name="submit" ref={cancel=>{input.cancel = false}}/>
    <input type="submit" name="done" value="Done" onClick = {
      (e)=>{
        e.preventDefault();
          dispatch({
            type: "CANCEL_ADD_NEW_ITEM",
            payload: {
              active: false
            }
          });
      }
    }
    />
  </form>;

  return(newItem);

};



const mapStateToPropsNewItemContainer = (state) => {
  console.log("propsnewItemContainer", state.newItem.active);

  console.log(state.newItem.active);
  return {
      newItemState : state.newItem.active
      };

  };




NewItemForm = connect(mapStateToPropsNewItemContainer)(NewItemForm);
module.exports = NewItemForm;
