import React, { Component } from "react";
import DataTable from "react-bs-datatable";
import Header from "./Header";
import Footer from "./Footer";

class ApplicationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applications: []
    };
    this.header = [
      { title: "#", prop: "id", sortable: true, filterable: true },
      {
        title: "Application Name",
        prop: "name",
        sortable: true,
        filterable: true,
        cell: row => <a href={`/ApplicationDetails?ID=${row.id}`}>{row.name}</a>
      },
      { title: "Status", prop: "status", sortable: true, filterable: true },
      {
        title: "Adjudicator",
        prop: "adjudicator",
        sortable: true,
        filterable: true
      }
    ];
  }

  componentDidMount() {
    fetch("http://localhost:9000/api/applications")
      .then(res => res.json())
      .then(data => {
        this.setState({ applications: data });
      })
      .catch(console.log);
  }

  render() {
    return (
      <div>
        <Header />
        <div>
          <center>
            <h1>Applications</h1>
          </center>
          <div className="container">
            <DataTable
              tableHeaders={this.header}
              tableBody={this.state.applications}
              keyName="applicationTable"
              tableClass="striped hover bordered responsive"
              rowsPerPage={3}
              rowsPerPageOption={[3, 5, 8, 10]}
              initialSort={{ prop: "id", isAscending: true }}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ApplicationList;
