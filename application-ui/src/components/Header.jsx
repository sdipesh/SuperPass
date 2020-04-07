import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1 className="alert alert-primary">SuperPass Application Jenkin</h1>
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
          <h2>
            Application Count - Total: {this.props.applications.length} Draft:{" "}
            {this.props.applications.filter(x => x.status === "Draft").length}{" "}
            Pending:{" "}
            {this.props.applications.filter(x => x.status === "Pending").length}{" "}
            Approved:{" "}
            {
              this.props.applications.filter(x => x.status === "Approved")
                .length
            }
          </h2>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { applications: state.applications };
}

export default connect(mapStateToProps)(Header);
