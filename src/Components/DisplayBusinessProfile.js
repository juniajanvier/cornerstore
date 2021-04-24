import React from "react";
import "../layoutMain.css";
import { withRouter } from "react-router-dom";
import { browserHistory } from "react-router";

//Description: Show businesses found from database with name and location
/* Business Data Extract
        "BusinessName", 
        "Number", 
        "Email", 
        "City", 
        "ZipCode",
        "OPeningYear",
        "Website" 

*/

// This only works if we deploy live :D
function goBack() {
  window.history.back();
}

function DisplayBusinessProfile(props) {
  const phoneNumber = <i className="fa fa-phone">{" " + props.business[1]}</i>;

  const emailContact = (
    <i className="fa fa-envelope">{" " + props.business[2]}</i>
  );

  return (
    <div className="containerBusinessProfile">
      <p></p>
      <span />
      <div className="containerProfile">
        {/* For Map Navigation */}
        <div className="mainProfile">
          <p> Zip Code </p>
        </div>

        {/* Details of business profile - Needs to automate hide icons if data dont exist*/}
        <div className="sideProfile">
          <div className="alignLeft">
            <div onClick={goBack} className="round">
              &#8249;
            </div>
          </div>
          <p></p>
          <img
            className="business-image"
            src="images/businessProfile.jpg"
            width="900"
            height="auto"
          />

          <div className="alignLeft">
            <h1> {props.business[0]}</h1>
            <p class="title">
              {props.business[6] !== null ? props.business[6] : ""}
            </p>
            {props.business[1] !== null ? phoneNumber : null} <p></p>
            {props.business[2] !== null ? emailContact : null}
            <div className="alignRight">
              <p class="thick">Address </p>
              <p>
                {props.business[3] !== null ? props.business[3] + " - " : ""}
                {props.business[4] !== null ? props.business[4] : ""}
              </p>
            </div>
            <hr class="solid"></hr>
          </div>
        </div>
      </div>

      <span />
    </div>
  );
}
export default withRouter(DisplayBusinessProfile);
