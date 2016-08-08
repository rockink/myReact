import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory } from 'react-router';
import { Link } from 'react-router';
import {Provider} from "react-redux";

var MyApp = React.createClass({
  render: function(){

    return(
    <div> Nirmal
    <ul>
      <li> <Link to="/form">MyForm</Link></li>
      <li> <Link to="/you">YouForm</Link></li>
    </ul>

    {this.props.children}

     </div>
  );


  }
});

var myForm = () =>{
  return(
    <div> myForm
      <li> <Link to="/myform">YouForm</Link></li>
    </div>
  );
};

var yourForm = React.createClass({

  render: function(){
    return(
      <div> yourForm

      </div>
    );

  }

});


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={MyApp}>
      <Route path="/form" component={myForm}/>
      <Route path="/you" component={yourForm}>
        <Route path="/myform" component={myForm}/>
      </Route>
    </Route>
  </Router>,
  document.getElementById("root")
)
