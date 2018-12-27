import React from "react";
import { connect } from "react-redux";
import {
  calculateTime,
  routeColorIcons
} from "../../../utils/stationFunctions";

class QuickCards extends React.Component {
  render() {
    const { departureEstimates } = this.props;

    return (
      <div>
        <div className="row">
          {departureEstimates.etd.map(item => (
            <div className="card text-center quickCards">
              <div className="card-body">
                <h4>{item.destination}</h4>
                {routeColorIcons(item.destination)}
                <h2>{item.estimate[0].minutes}</h2>
                <h6 className="greyText">
                  {item.estimate[0].minutes === "Leaving" ? "now!" : "minutes"}
                </h6>
                {calculateTime(item.estimate[0])}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    departureEstimates: state.trainReducer.departureEstimates
  };
};

export default (QuickCards = connect(
  mapStateToProps,
  null
)(QuickCards));
