import React, { Component } from "react";
import HeaderSearch from "../Components/HeaderSearch";
import DisplayBusinessProfile from "../Components/DisplayBusinessProfile";
import "../layoutMain.css";

//Description: The search results page displays the businesses from the home page and has
//a search engine and the map of the business locations.

class BusinessProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Retrieve data passed from home page and set to searchResults
      businessChoice: this.props.location.state.businessProfileResult,
    };
    this.handleResults = this.handleResults.bind(this);
  }

  //Sets the new search results to be displayed later and checks if the new results exists
  handleResults(newResults) {
    if (newResults.length > 0) {
      this.setState({ businessChoice: newResults });
    }
  }
  render() {
    return (
      <div>
        {/* Add home button and search bar */}
        <HeaderSearch handleResults={this.handleResults} />
        <span />
        {/* Check if there is data available to display, if not, show no results */}
        {this.state.businessChoice.length > 0 ? (
          <DisplayBusinessProfile business={this.state.businessChoice} />
        ) : (
          <div className="container">No Results Found</div>
        )}
      </div>
    );
  }
}
export default BusinessProfilePage;
