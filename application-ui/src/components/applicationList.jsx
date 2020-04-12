import React, { Component } from "react";
import DataTable from "react-bs-datatable";
import Header from "./Header";
import Footer from "./Footer";
import { connect } from "react-redux";
import queryString from "query-string";
import { Link } from "react-router-dom";

class ApplicationList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      qsFilter: queryString.parse(this.props.location.search)
        ? queryString.parse(this.props.location.search).Filter
        : null
    };
    this.header = [
      { title: "Application #", prop: "application_number", sortable: true, filterable: true },
      {
        title: "Customer Name",
        prop: "customer_name",
        sortable: true,
        filterable: true,
        cell: row => (
          <Link to={`/ApplicationDetails?ID=${row.id}`}>{row.customer_name}</Link>
        )
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
              tableBody={
                this.state.qsFilter
                  ? this.props.applications.filter(
                      x => x.status === this.state.qsFilter
                    )
                  : this.props.applications
              }
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

function mapStateToProps(state) {
  return { applications: state.applications };
}

export default connect(mapStateToProps)(ApplicationList);
