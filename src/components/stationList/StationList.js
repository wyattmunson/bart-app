import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Actions from "../../Actions";

class StationList extends React.Component {
  componentDidMount() {
    this.props.getStationList();
  }
  render() {
    const { stationList } = this.props;

    if (stationList === null) {
      return null;
    }
    return (
      <div className="container">
        <h1 className="contentDiv">Station List</h1>
        <p className="greyText">
          Chose a station below to see how screwed it is.
        </p>
        <div className="list-group contentDiv">
          {stationList.map(item => (
            <Link
              to={`/stations/${item.abbr}`}
              className="list-group-item list-group-item-action"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    stationList: state.trainReducer.stationList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getStationList: () => {
      dispatch(Actions.getStationList());
    }
  };
};

export default (StationList = connect(
  mapStateToProps,
  mapDispatchToProps
)(StationList));
