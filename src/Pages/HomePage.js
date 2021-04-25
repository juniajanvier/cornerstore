import React, { Component } from "react";
import SearchBusiness from "../Components/SearchBusinesses";
import SearchCategories from "../Components/SearchCategories_Industries";
import { withRouter } from "react-router-dom";
import "../layoutMain.css";

//Description: The home page contains a search engine and different categories so that
//when an business or category is searched, the page will be directed to the search results page.

class App extends Component {
  constructor(props) {
    super(props);
    this.handleResults = this.handleResults.bind(this);
  }

  //Redirect page to /businesses with the search results
  handleResults(newResults) {
    window.scrollTo(0, 0);
    this.props.history.push({
      pathname: "/businesses",
      // Pass results data to the search results page
      state: { passResults: newResults },
    });
  }

  render() {
    return (
      <div className="App">
        <section className="home-container">
          <div className="home-logo">
            <img
              src="images/logo.png"
              alt="Corner Store Logo"
              className="logo-img"
              width="50"
              height="50"
            />
          </div>

          <img
            src="images/FrontPageIcon.png"
            alt="Corner Store Icon"
            width="800"
            height="175"
          />

          {/* Show search bar and pass in redirect function as handleResults */}
          <SearchBusiness handleResults={this.handleResults} />
        </section>
        <span />
        {/* Show different categories and pass in redirect function as handleResults */}
        <SearchCategories handleResults={this.handleResults} />
        <div></div>
      </div>
    );
  }
}

export default withRouter(App);
