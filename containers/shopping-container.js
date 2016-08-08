import React from "react";
import {connect} from "react-redux";


const ShoppingBox = ({items}) => {

        var content  = [];
        var total = 0;
        for(var key in items){

          total = total + items[key].number * items[key].price;

          content.push(<li key={key} className="list">
              <h5>{items[key].number} </h5>
              <span>{key} </span>
               <h5>{items[key].number * items[key].price} </h5>
            </li>);

        };

        var boxHeader = <h1>No items in cart.</h1>;
        if(content.length > 0)
          boxHeader = <h1>Your Cart:</h1>;

        var totalBox = "Total:" + total;



        return (
          <div className="shoppingbox ">
              {boxHeader}
             {content}
             {totalBox}
          </div>

        )

};

const mapStateToPropsShoppingContainer = (state) => {
  console.log(state.shop);
  return {
      items : state.shop
      };

  };


export const ShoppingContainer = connect(mapStateToPropsShoppingContainer)(ShoppingBox);
