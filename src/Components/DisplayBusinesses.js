import React, { Component } from "react";
import "../layoutMain.css";
import { withRouter, Link} from 'react-router-dom';

//Description: Show businesses found from database with name and location

class DisplayBusinesses extends Component {

  constructor(props) {
    super(props);
    this.redirectToBusinessProfile = this.redirectToBusinessProfile.bind(this);
  }

  //Redirect page to /businessProfile with the business shop name
  redirectToBusinessProfile(businessProfileChoice) {
    this.props.history.push({
      pathname: "/businessProfile",
      // Pass results data to the search results page
      state: { businessProfileResult: businessProfileChoice },
    });
  }

  render() {
    return (
      <div>
        <span />
        <div className="container">
          {/* Use data passed from search results page and display */}
          {this.props.results.map((business, index) => (
            <div key={index}>
              <div className="businesses-container">
                <p>
                  {index + 1}. {business[0]}
                </p>
                <p>{business[1]}</p>
                <p>{business[2] !== null ? business[2] : ""}</p>
                <a onClick={() => this.redirectToBusinessProfile(business)}>Shop Info</a>
              </div>
              <span />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default withRouter(DisplayBusinesses);
