import {applyMiddleware,createStore, combineReducers} from "redux";
import React from "react";
import ReactDOM from "react-dom";
import {allReducers} from "./reducer";
import {connect, Provider} from "react-redux";
import createLogger from 'redux-logger';

const logger = createLogger();
const store = createStore(allReducers,   applyMiddleware(logger));

store.subscribe(function(state){
    console.log("subs",state);
});

let BoxForm = ({foodType, dispatch}) => (
  <form onSubmit={(e)=>{
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




BoxForm = connect()(BoxForm);



const Box = ({items}) => {

  console.log(items);
  var boxList = [];
  for(var key in items){

    boxList.push(<div key={key}>
       <p>{key} </p>
       <p> Price: ${items[key].price} </p>
       <BoxForm foodType={key} />
    </div>);

  }

  return (
    <div>
      <p>nirmal</p>
      {boxList}
    </div>
  );

};

const mapStateToProps = (state) => {
    console.log("mapStateToProps" ,state.count.content);
    return {
      content: state.count.content
      };
};

const mapStateToPropsItems = (state) => {
    return {
      items: state.items
      };
};

const BoxContainer = connect(mapStateToPropsItems)(Box);

const ShoppingBox = ({items}) => {

        var content  = [];
        for(var key in items){

          content.push(<li key={key}>
            {key}
             ${items[key].price}
             <p>Number: {items[key].number}</p>

             <p>Total: {items[key].number * items[key].price} </p>
            </li>);

        };

        return (
          <div>
            You purchased  totalling {content}
          </div>

        )

};

const mapStateToPropsShoppingContainer = (state) => {
  console.log(state.shop);
  return {
      items : state.shop
      };

  };


const ShoppingContainer = connect(mapStateToPropsShoppingContainer)(ShoppingBox);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <ShoppingContainer/>
      <BoxContainer/>
    </div>
  </Provider>,
  document.getElementById("root")
);
