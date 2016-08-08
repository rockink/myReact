import React from "react";
import ReactDOM from "react-dom";
import {MenuContainer} from "../commons/containers/menu-container";
import { Router, Route, Link, browserHistory } from 'react-router';

var About = React.createClass({

    getInitialState: function() {
      return {data: "About myself"};
    },

    componentDidMount: function(){
      this.setState({data:"About Us Component Did mount"});
    },

    render: function(){
      return(
        <div>
            {this.state.data}
        </div>
      );
    }

});

var Contact = React.createClass({

    getInitialState: function() {
      return {data: "Contact "};
    },

    componentDidMount: function(){
      this.setState({data:"Contact Component Did mount"});
    },

    render: function(){
      return(
        <div>
            {this.state.data}
        </div>
      );
    }

});


var App = ()=>{
  return(
    <div>
      <MenuContainer />
      <About />
    </div>
  );
};

ReactDOM.render(
    <App />,
  document.getElementById("root")
);
