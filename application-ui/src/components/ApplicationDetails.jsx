import React, { Component } from "react";
import queryString from "query-string";
import Header from "./Header";
import Footer from "./Footer";

class ApplicationDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      applicationId: 0,
      applicationName: null,
      status: null,
      adjudicator: null
    };
  }

  applicationNameChangeHandler = event => {
    this.setState({ applicationName: event.target.value });
  };
  statusChangeHandler = event => {
    this.setState({ status: event.target.value });
  };
  adjudicatorChangeHandler = event => {
    this.setState({ adjudicator: event.target.value });
  };

  mySubmitHandler = event => {
    event.preventDefault();
    const url =
      "http://localhost:9000/api/applications/" + this.state.applicationId;

    const payload = {
      name: this.state.applicationName,
      status: this.state.status,
      adjudicator: this.state.adjudicator
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
          applicationId: data.id,
          applicationName: data.name,
          status: data.status,
          adjudicator: data.adjudicator,
          loading: false
        });
        alert("Success!!!");
      })
      .catch(console.log);
  };

  componentDidMount() {
    const params = queryString.parse(this.props.location.search);
    const appId = params.ID;
    const url = "http://localhost:9000/api/applications/" + appId;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          applicationId: data.id,
          applicationName: data.name,
          status: data.status,
          adjudicator: data.adjudicator,
          loading: false
        });
      })
      .catch(console.log);
  }

  render() {
    if (this.state.loading) return <div>loading...</div>;

    if (this.state.applicationId === 0)
      return <div>Application not found.</div>;

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
                  <td className="ui header">Application ID</td>
                  <td>
                    <input
                      type="text"
                      placeholder="ID"
                      defaultValue={this.state.applicationId}
                      readOnly
                    />
                  </td>
                </tr>
                <tr>
                  <td className="ui header">Application Name</td>
                  <td>
                    <input
                      type="text"
                      placeholder="Name"
                      onChange={this.applicationNameChangeHandler}
                      value={this.state.applicationName}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="ui header">Status</td>
                  <td>
                    <input
                      type="text"
                      placeholder="Status"
                      onChange={this.statusChangeHandler}
                      value={this.state.status}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="ui header">Adjudicator Name</td>
                  <td>
                    <input
                      type="text"
                      placeholder="Adjudicator"
                      onChange={this.adjudicatorChangeHandler}
                      value={this.state.adjudicator}
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

export default ApplicationDetails;
