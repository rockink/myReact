import React from "react";
import {connect} from "react-redux";
import  {Link} from 'react-router';


var FoodEdit = React.createClass({
  render: function(){

    var food = this.props.food;
    return(
    <div>
      <input type="text" defaultValue={food.name} />
      <input type="text" defaultValue={food.price} />
      <input type="text" defaultValue={food.ISBN} />
      <input type="submit" defaultValue="submit" />
    </div>
  );

}});


var AddFoodForm = ({dispatch}) => {
  var input ={};
  return(
    <form onSubmit={(e)=>{
      e.preventDefault();
      dispatch({
        type:"ADD_FOOD",
        payload:{
          name: input.food.value,
          price: 50,
          ISBN: "1234AF"
        }
      });
    }}>
    <input type="text" defaultValue="Food" ref={food=>{input.food = food}} />
    <input type="submit" defaultValue="Submit" />

    </form>
  );
};

AddFoodForm = connect()(AddFoodForm);

var Food = React.createClass({
  render: function(){

    console.log("food", this.props.foods);
    console.log("food", this.props.params.food);

    var food = this.props.foods[this.props.params.food];
    return(
      <div className="food">

      <FoodEdit food={food}/>

        MyFood
        <h3>
          <a onClick={(e)=>{
            e.preventDefault();

          }} >Edit </a>
        </h3>
        <h2>{food.name} </h2>
        <p>${food.price}</p>
        <p>{food.ISBN}</p>

      </div>
    )
  }
});



const mapStateToPropsFood = (state) => {
  // console.log(state.shop);
  return {
      foods : state.foods
      };

  };


  export var FoodContainer = connect(mapStateToPropsFood)(Food);


const mapStateToProps = (state) => {
  // console.log(state.shop);
  return {
      foods : state.foods
      };

  };




var Foods = React.createClass({
    render: function(){

        var foodList = [];
        var foods = this.props.foods;
        for(var key in foods){
          console.log("food",key);
          foodList.push(

            <li key={key}><Link to={`/foods/${foods[key].name}`}>{foods[key].name}</Link> </li>

          )
        }

      return(
        <div>
          <AddFoodForm />
          {foodList}
        </div>
      );
    }
});


export var FoodsContainer = connect(mapStateToProps)(Foods);
