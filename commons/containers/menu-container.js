import React from "react";


export const MenuContainer = () => {
    return(
      <nav className="navbar navbar-default navbar-static-top">
        <div className="navbar-collapse collapse" id="navbar">
          <ul className="nav navbar-nav">
            <li className="active"><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="/dashboard.html">Dashboard</a></li>

          </ul>
      </div>
    </nav>
  );
};
