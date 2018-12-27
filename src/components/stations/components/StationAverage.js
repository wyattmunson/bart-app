import React from "react";
import { connect } from "react-redux";

class StationAverage extends React.Component {
  render() {
    const { departureEstimates } = this.props;
    return (
      <div className="greyText">
        Average: {parseInt(averageTimes(departureEstimates.etd))} minutes
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    departureEstimates: state.trainReducer.departureEstimates
  };
};

const averageTimes = array => {
  let otherArray = [];
  let stationCount = 0;
  array.forEach(item => {
    let number;
    if (isNaN(item.estimate[0].minutes)) {
      number = 0;
    } else {
      number = parseInt(item.estimate[0].minutes);
    }
    otherArray.push(number);
    stationCount++;
  });
  const reducer = (acc, currValue) => acc + currValue;
  let total = otherArray.reduce(reducer);
  let average = total / stationCount;
  return average;
};

export default (StationAverage = connect(
  mapStateToProps,
  null
)(StationAverage));
