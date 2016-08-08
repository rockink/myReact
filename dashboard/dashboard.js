import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {store} from "./redux-store";
import {MenuContainer} from "../commons/containers/menu-container";
import {ApplicationContainer} from "./containers/application-container";
import {Messages} from "./containers/messages";
import {Users} from "./containers/users";
import {FoodsContainer,FoodContainer} from "./containers/foods";

import { Router, Route, Link, browserHistory, hashHistory } from 'react-router';


var App = React.createClass({
  render: function(){
    return(
      <div>
        <MenuContainer />
        <ApplicationContainer/>
        <div className="col-md-10">
          {this.props.children}
        </div>
      </div>
    );
  }
});



ReactDOM.render(
  <Provider store={store}>
  <Router history={hashHistory}>
    <Route path="/" component={App} >
      <Route path="/foods" component={FoodsContainer} />
      <Route path="/foods/:food" component={FoodContainer} />
      <Route path="/users" component={Users} />
      <Route path="/Messages" component={Messages} />
    </Route>
  </Router>
  </Provider>,
  document.getElementById("root")
);
