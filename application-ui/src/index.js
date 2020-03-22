import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/Home";
import ApplicationList from "./components/applicationList";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import ApplicationDetails from "./components/ApplicationDetails";

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={Home} />
    <Route path="/ApplicationList" component={ApplicationList} />
    <Route path="/ApplicationDetails" component={ApplicationDetails} />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
