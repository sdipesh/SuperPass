import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { connect } from "react-redux";
import queryString from "query-string";
import { updateApplication } from "../js/actions/index";

class ApplicationDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qsFilter: queryString.parse(this.props.location.search)
        ? queryString.parse(this.props.location.search).ID
        : null,
      application: null
    };

    this.state.application = this.state.qsFilter
      ? this.props.applications.filter(
          x => x.id === this.state.qsFilter
        )[0]
      : null;

    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler = event => {
    const { name, value } = event.target;

    this.setState({
      application: {
        // object that we want to update
        ...this.state.application, // keep all other key-value pairs
        [name]: value // update the value of specific key
      }
    });
  };

  mySubmitHandler = event => {
    event.preventDefault();

    const url =
      "http://localhost:9000/api/applications/" + this.state.application.id;

    const payload = {
      application_number: this.state.application.application_number,
      customer_name: this.state.application.customer_name,
      status: this.state.application.status,
      adjudicator: this.state.application.adjudicator
    };
    //console.log(JSON.stringify(payload));
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          application: data
        });

        this.props.updateApplication(this.state.application);
        //alert("Success!!!");
      })
      .catch(console.log);
  };

  render() {
    if (this.state.qsFilter == null) {
      return <div>Invalid application Id</div>;
    }
    if (
      this.props.applications.filter(
        x => x.id === this.state.qsFilter
      ).length === 0
    ) {
      return <div>Application not found.</div>;
    }

    return (
      <div>
        <Header />
        <div>
          <center>
            <h1>Application Details</h1>
          </center>
          <form onSubmit={this.mySubmitHandler}>
            <table>
              <tbody>
                <tr>
                  <td className="ui header">Application #</td>
                  <td>
                    <input
                      type="text"
                      placeholder="ID"
                      defaultValue={this.state.application.application_number}
                      readOnly
                    />
                  </td>
                </tr>
                <tr>
                  <td className="ui header">Customer Name</td>
                  <td>
                    <input
                      type="text"
                      placeholder="Customer Name"
                      name="customer_name"
                      onChange={this.changeHandler}
                      value={this.state.application.customer_name || ''}                      
                    />
                  </td>
                </tr>
                <tr>
                  <td className="ui header">Status</td>
                  <td>
                    <input
                      type="text"
                      placeholder="Status"
                      name="status"
                      onChange={this.changeHandler}
                      value={this.state.application.status || ''}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="ui header">Adjudicator Name</td>
                  <td>
                    <input
                      type="text"
                      placeholder="Adjudicator"
                      name="adjudicator"
                      onChange={this.changeHandler}
                      value={this.state.application.adjudicator || ''}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="button"></td>
                  <td>
                    <input type="submit" />
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { applications: state.applications };
}

function mapDispatchToProps(dispatch) {
  return {
    updateApplication: application => dispatch(updateApplication(application))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationDetails);
