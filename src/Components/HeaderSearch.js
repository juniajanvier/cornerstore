import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchBusiness from "../Components/SearchBusinesses";

class HeaderSearch extends Component {
  render() {
    return (
      <header id="home">
        <div className="navbarsearch">
          <div  className="navbarsearch-img">
            <Link to="/">
              <img
                src="images/logo.png"
                alt="Corner Store Logo"
                className="logo-img"
                width="50"
                height="50"
              />
            </Link>
          </div>
          <div className="navbarsearch-centered">
            <SearchBusiness handleResults={this.props.handleResults} />
          </div>
        </div>
      </header>
    );
  }
}

export default HeaderSearch;
