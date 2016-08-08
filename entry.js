import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {ShoppingContainer} from './containers/shopping-container';
import {BoxContainer} from './containers/box-container';
import {store} from "./redux-store";
import NewItemForm from "./containers/newitem-container.js";
import {MenuContainer} from "./commons/containers/menu-container";

import { Router, Route, Link, browserHistory } from 'react-router';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <MenuContainer />
      <BoxContainer/>
      <div className="col-md-4">
        <NewItemForm />
        <ShoppingContainer/>
      </div>
    </div>
  </Provider>,
  document.getElementById("root")
);
