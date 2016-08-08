import React from "react";
import {connect, Provider} from "react-redux";


let BoxForm = ({foodType, dispatch}) => (
  <form className="boxform" onSubmit={(e)=>{
    e.preventDefault();
    console.log("boxform");
    dispatch({
      type:"ADD_SHOP",
      payload: {
        item: foodType,
        price: 5,
        number: 1
      }

    });
  }} >
  <input type="submit" name="submit" value={foodType} />
  </form>
);

//this is a containerComponent
BoxForm = connect()(BoxForm);


var NewItemBoxForm = ({dispatch})=>{
  return(
    <form onSubmit={(e)=>{
      e.preventDefault();
      dispatch({
        type:"NEW_ITEM_FORM",
        payload:{
          active: true
        }

      });
    }}>
      <input type="submit" value="New Item" />

    </form>
  );
};


NewItemBoxForm = connect()(NewItemBoxForm);

const NewItemBox = () =>{

  return (
    <div className="box col-md-3">
        <h1>Add New Item</h1>
       <NewItemBoxForm />
    </div>
  );
};


const Box = ({items}) => {

  console.log(items);
  var boxList = [];
  var i = 0;
  for(var key in items){

    var looper = items.length - key -1;
    boxList.push(<div key={i++} className="box col-md-3">
       <img src={items[looper].src} />
       <h2>{items[looper].name} </h2>
       <p> Price: ${items[looper].price} </p>
       <BoxForm foodType={items[looper].name} />
    </div>);

  }

  return (
    <div className="boxes col-md-8">
      <h1>Stuff in our store:</h1>
      <NewItemBox />
      {boxList}
    </div>
  );

};

const mapStateToPropsItems = (state) => {
    return {
      items: state.items
      };
};

export const BoxContainer = connect(mapStateToPropsItems)(Box);
