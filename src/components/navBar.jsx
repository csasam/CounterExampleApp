import React, { Component } from "react";
//this is a stateless functional component
class NavBar extends Component {
  //state = {  }
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          CounterApp{" "}
          <span className="badge badge-pill badge-secondary">
            {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}
//can use stateless functional component
export default NavBar;
