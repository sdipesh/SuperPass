import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1 className="alert alert-primary">SuperPass Application</h1>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/applicationList">Applications</Link>
            </li>
          </ul>
          <hr />
        </div>
      </div>
    );
  }
}

export default Header;
