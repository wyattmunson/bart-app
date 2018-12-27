import React from "react";
import QuickCards from "./QuickCards";
import {
  calculateTime,
  directionDescription,
  getFgColor
} from "../../../utils/stationFunctions";
import StationAverage from "./StationAverage";

export default class DepartureEstimates extends React.Component {
  render() {
    const { departureEstimates } = this.props;

    if (departureEstimates === null) {
      return <p>Loading</p>;
    }

    try {
      return (
        <div className="contentDiv">
          <h2>Departure Estimates</h2>

          <StationAverage />
          <QuickCards />

          {/* DESTINATION LIST */}
          {departureEstimates.map(item => (
            <div className="subContentDiv">
              <h4>{item.destination}</h4>
              <h5>{calculateTime(item.estimate[0])}</h5>
              <h6 className="greyText">
                {directionDescription(item.destination)}
              </h6>

              {/* DEPARTURE ESTIMATE LIST */}
              <ul className="list-group">
                {item.estimate.map(item => (
                  <DepartureList {...item} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    } catch (error) {
      return (
        <div className="contentDiv">
          <h3>Departure Estimates</h3>
          <p>The BART API is offline.</p>
        </div>
      );
    }
  }
}

const DepartureList = props => {
  return (
    <li
      className={`list-group-item list-group-item-action flex-column align-items-start`}
    >
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">
          <i className={`fas fa-subway ${getFgColor(props.hexcolor)}`} />{" "}
          {props.minutes} {props.minutes === "Leaving" ? "now!" : "minutes"}
        </h5>
        <small>{props.color}</small>
      </div>
      <span className="greyText">
        Platform: {props.platform}, {props.length} cars
      </span>
    </li>
  );
};
