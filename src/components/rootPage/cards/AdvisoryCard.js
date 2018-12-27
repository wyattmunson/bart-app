import React from "react";

export default class AdvisoryCard extends React.Component {
  calculateDeplay = input => {
    if (input[0].description["#cdata-section"] === "No delays reported.") {
      return "0";
    } else {
      return input.length;
    }
  };
  render() {
    const { advisoryList } = this.props;
    // console.log(this.props);
    if (advisoryList === null) {
      return null;
    }
    return (
      <div className="card glanceCards">
        <div className="card-body">
          <h3 className="card-title">{this.calculateDeplay(advisoryList)}</h3>
          <h6 className="card-subtitle mb-2 text-muted">Advisories</h6>
          <p className="card-text">Number of system-wide advisories.</p>
        </div>
      </div>
    );
  }
}
