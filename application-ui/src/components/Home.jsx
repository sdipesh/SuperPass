import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ApplicationDashboard from "./applicationDashboard";
import { connect } from "react-redux";
import { loadApplications } from "../js/actions/index";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch("http://localhost:9000/api/applications")
      .then(res => res.json())
      .then(data => {
        this.props.loadApplications(data);
      });
  }

  render() {
    return (
      <div>
        <Header></Header>
        <ApplicationDashboard></ApplicationDashboard>
        <Footer></Footer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { applications: state.applications };
}
function mapDispatchToProps(dispatch) {
  return {
    loadApplications: applications => dispatch(loadApplications(applications))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
