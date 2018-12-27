import React from "react";
import { connect } from "react-redux";
import Actions from "../../Actions";
import DepartureEstimates from "./components/DepartureEstimates";
import StationAccess from "./components/StationAccess";
import StationInfo from "./components/StationInfo";

class Stations extends React.Component {
  componentDidMount() {
    let payload = window.location.pathname.replace("/stations/", "");
    this.props.getStationInfo(payload);
    this.props.getDepartureEstimates(payload);
    this.props.getStationAccess(payload);
  }

  render() {
    const { stationInfo, departureEstimates, stationAccess } = this.props;

    if (
      stationInfo === null ||
      departureEstimates === null ||
      stationAccess === null
    ) {
      return null;
    }

    return (
      <div className="container stationContainer">
        <StationInfo stationInfo={stationInfo} />
        <DepartureEstimates
          departureEstimates={departureEstimates.etd}
          message={departureEstimates.message}
        />
        <StationAccess stationAccess={stationAccess} />
        {/* <iframe
          width="600"
          height="450"
          frameborder="0"
          style="border:0"
          src="https://www.google.com/maps/embed/v1/place?q=lake%20merrit%20staion&key=AIzaSyBBORdTxe5P8C7GS5fG9A6TMYPr7CLtMuE"
          allowfullscreen
        /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    stationInfo: state.trainReducer.stationInfo,
    departureEstimates: state.trainReducer.departureEstimates,
    stationAccess: state.trainReducer.stationAccess
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getStationInfo: input => {
      dispatch(Actions.getStationInfo(input));
    },
    getDepartureEstimates: input => {
      dispatch(Actions.getDepartureEstimates(input));
    },
    getStationAccess: input => {
      dispatch(Actions.getStationAccess(input));
    }
  };
};

export default (Stations = connect(
  mapStateToProps,
  mapDispatchToProps
)(Stations));
