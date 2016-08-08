import React from "react";
import {connect} from "react-redux";
import { Link} from 'react-router';


var ApplicationPresentation = ({items}) =>{

  // var itemList = [];
  // for(var i = 0; i < items.length; i++){
  //   itemList.push(<li key={items[i].name}>
  //                   <Link to={`/${items[i].name}`}>{items[i].name}</Link>
  //                 </li>
  //               );
  // }
  //
  return(
    <div className="col-md-2">

    <li><Link to="/foods">Foods </Link></li>
    <li><Link to="/users">Users </Link></li>
    <li><Link to="/messages">Messages </Link></li>

    </div>
  )
};


const mapStateToPropsItems = (state) => {
    return {
      items: state.menuItems
      };
};

export const ApplicationContainer = connect(mapStateToPropsItems)(ApplicationPresentation);
