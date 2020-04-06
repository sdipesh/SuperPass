import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class ApplicationDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
            <Link
              to="/ApplicationList?Filter=Draft"
              className="card-title card-text"
            >
              <h5 className="card-title">Draft</h5>
              <p className="card-text">
                {
                  this.props.applications.filter(x => x.status === "Draft")
                    .length
                }
              </p>
            </Link>
          </div>
        </div>
        <div className="card text-white bg-info mb-3" style={pendingCardStyle}>
          <div className="card-body">
            <Link
              to="/ApplicationList?Filter=Pending"
              className="card-title card-text"
            >
              <h5 className="card-title">Pending</h5>
              <p className="card-text">
                {
                  this.props.applications.filter(x => x.status === "Pending")
                    .length
                }
              </p>
            </Link>
          </div>
        </div>
        <div
          className="card text-white bg-success mb-3"
          style={approvedCardStyle}
        >
          <div className="card-body">
            <Link
              to="/ApplicationList?Filter=Approved"
              className="card-title card-text"
            >
              <h5 className="card-title">Approved</h5>
              <p className="card-text">
                {
                  this.props.applications.filter(x => x.status === "Approved")
                    .length
                }
              </p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { applications: state.applications };
}

export default connect(mapStateToProps)(ApplicationDashboard);
