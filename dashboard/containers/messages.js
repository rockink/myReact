import React from "react";
import {connect} from "react-redux";


var Message = React.createClass({
  render: function(){
    return(
      <div className="message">
        <h4>Nirmal </h4>
        <p>Nirmal sent you a message</p>
      </div>
    )
  }
});


export const Messages = React.createClass({
    render: function(){
      return(
        <div className="messages">
          <h2>1 Message </h2>
          <Message />

        </div>
      )
    }
});
