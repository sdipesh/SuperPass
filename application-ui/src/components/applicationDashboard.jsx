import React, { Component } from "react";
import { Link } from "react-router-dom";

class ApplicationDashboard extends Component {
  state = {
    draftApplicationCount: 0,
    pendingApplicationCount: 0,
    approvedApplicationCount: 0
  };

  render() {
    var draftCardStyle = {
      margin: "20px",
      width: "250px",
      height: "250px",
      display: "inline-block"
    };
    var pendingCardStyle = {
      margin: "20px",
      width: "250px",
      height: "250px",
      display: "inline-block"
    };
    var approvedCardStyle = {
      margin: "20px",
      width: "250px",
      height: "250px",
      display: "inline-block"
    };
    return (
      <div>
        <div
          className="card text-white bg-secondary mb-3"
          style={draftCardStyle}
        >
          <div className="card-body">
            <Link to="/ApplicationList" className="card-title card-text">
              <h5 className="card-title">Draft</h5>
              <p className="card-text">{this.state.draftApplicationCount}</p>
            </Link>
          </div>
        </div>
        <div className="card text-white bg-info mb-3" style={pendingCardStyle}>
          <div className="card-body">
            <h5 className="card-title">Pending</h5>
            <p className="card-text">{this.state.pendingApplicationCount}</p>
          </div>
        </div>
        <div
          className="card text-white bg-success mb-3"
          style={approvedCardStyle}
        >
          <div className="card-body">
            <h5 className="card-title">Approved</h5>
            <p className="card-text">{this.state.approvedApplicationCount}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ApplicationDashboard;
