import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ApplicationDashboard from "./applicationDashboard";

class Home extends Component {
  state = {};
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

export default Home;
