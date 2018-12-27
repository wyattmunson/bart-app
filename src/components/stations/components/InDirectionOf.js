import React from "react";
import { connect } from "react-redux";

class InDirectionOf extends React.Component {
  render() {
    if (this.props.departureEstimates === null) {
      return null;
    }
    const { etd } = this.props.departureEstimates;
    // console.log(this.props.);
    return (
      <div>
        <h3>Going in the direction of</h3>
        <p>SFO Airport: {getAirportDestinations(etd)}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    departureEstimates: state.trainReducer.departureEstimates
  };
};

export default (InDirectionOf = connect(
  mapStateToProps,
  null
)(InDirectionOf));

const getAirportDestinations = estimates => {
  console.log(estimates);
  let matches = estimates.filter(
    x => x.destination === "SF Airport" || x.destination === "SFO/Millbrae"
  );
  let minuteArray;
  matches.forEach(
    item => (minuteArray = minuteArray.push(item.estimate[0].minutes))
  );
  console.log(matches);
  console.log(minuteArray);
  //   minuteArray = minuteArray.push(matches.estimate[0].minutes);
  //   let minimum = Math.min(...minuteArray);
  console.log("AIRPORTS", matches);
  //   console.log("MINIMUM", minimum);
  return (
    <div>
      {matches.map(item => (
        <span>
          {item.destination} in {item.estimate[0].minutes}
        </span>
      ))}
    </div>
  );
};
