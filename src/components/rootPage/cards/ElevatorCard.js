import React from "react";

export default class ElevatorCard extends React.Component {
  calculateDeplay = input => {
    if (
      input[0].description["#cdata-section"] ===
      "Attention passengers: All elevators are in service. Thank You."
    ) {
      return "0";
    } else {
      return input.length;
    }
  };
  render() {
    const { elevatorList } = this.props;

    // Kill render if data hasn't returned yet
    if (elevatorList === null) {
      return null;
    }

    return (
      <div className="card glanceCards">
        <div className="card-body">
          <h3 className="card-title">{this.calculateDeplay(elevatorList)}</h3>
          <h6 className="card-subtitle mb-2 text-muted">
            Inoperable elevators
          </h6>
          <p className="card-text">Elevators experiencing problems.</p>
        </div>
      </div>
    );
  }
}
