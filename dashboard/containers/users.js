import React from "react";
import {connect} from "react-redux";


var AddUserForm = ({dispatch}) => {
  var input = {};
  return(
    <div>

      <input type="text" defaultValue="Name" ref={name => {input.name = name}}/>
      <input type="text" defaultValue="Last" ref={last => {input.last = last}}/>
      <input type="submit" defaultValue="Submit" onClick={(e)=>{
        e.preventDefault();
        dispatch({
          type: "ADD_USER_FORM",
          payload: {
            name: input.name.value,
            last: input.last.value
          }
        });
      }}/>


      <a href="#" onClick={(e)=>{
          e.preventDefault();

          dispatch({
            type: "ADD_USER",
            payload: {
              meta: {
                addUserForm : false
              }
            }
          });
      }}> Yes! </a>
    </div>
  );
};



AddUserForm = connect()(AddUserForm);

var AddUsers = ({meta, dispatch})=>{

  var ret;
  if(meta.addUserForm){

    return (<AddUserForm/>);
  }

  return(
    <div className="adduser">

      <a href="#" onClick={(e)=>{
        e.preventDefault();
        dispatch({
          type: "ADD_USER",
          payload: {
            meta: {
              addUserForm : true
            }
          }
        });
        }} >
        Add User
      </a>
    </div>
  );

};


var mapStateToPropsAddUsers = function(state){
  console.log("mapStateToPropsAddUsers", state);
  return {
      meta: state.addUser.meta
  }
};


AddUsers = connect(mapStateToPropsAddUsers)(AddUsers);

var UsersBox = ({users})=>{

  var usersBox = [];
  console.log("usersBox",users);
  for(var key in users){
    console.log("mykey",key);
      usersBox.push(
        <li key={key}>
        <span>{users[key].name} </span>
        <span>{users[key].last}</span>
        </li>
      );
  }
    return(
      <div className="usersBox">
        {usersBox}
      </div>
    );
};

var mapStateToPropsUsersBox = function(state){
  console.log("statepropusers", state.users);
  return {
    users: state.users
  }
};

var UsersContainer = connect(mapStateToPropsUsersBox)(UsersBox);


export const Users = React.createClass({
    render: function(){
      return(
        <div className="users">

            <AddUsers />
            <UsersContainer />
        </div>
      )
    }
});
