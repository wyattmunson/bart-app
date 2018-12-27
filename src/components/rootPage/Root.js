import React from "react";
import Actions from "../../Actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// Homegrown
import AdvisoryCard from "./cards/AdvisoryCard";
import ElevatorCard from "./cards/ElevatorCard";
import DecisionCard from "./cards/DecisionCard";

class Root extends React.Component {
  componentDidMount() {
    this.props.getCarCount();
    this.props.getAdvisoryList();
    this.props.getElevatorStatus();
  }
  render() {
    const { trainCount, advisoryList, elevatorList } = this.props;

    // KILL RENDER IF NOT LOADED
    if (trainCount === null || advisoryList === null || elevatorList === null) {
      return null;
    }
    return (
      <div className="container">
        <h1 className="text-center contentDiv greyText">How is BART?</h1>
        <DecisionCard />
        <div className="card">
          <Link to="/stationlist" className="btn headerBgColor">
            See individual stations
          </Link>
        </div>
        {/* CARDS */}
        <div className="row">
          <div className="card glanceCards">
            <div className="card-body">
              <h3 className="card-title">{trainCount.traincount}</h3>
              <h6 className="card-subtitle mb-2 text-muted">Cars in service</h6>
              <p className="card-text">Cars running through the system.</p>
            </div>
          </div>
          <AdvisoryCard advisoryList={advisoryList} />
          <ElevatorCard elevatorList={elevatorList} />
        </div>
        <FooterLinks />
      </div>
    );
  }
}

const FooterLinks = () => {
  return (
    <div className="text-center">
      <a href="http://howfuckedisbart.s3-website.us-east-1.amazonaws.com/">
        NSFW Version
      </a>
      {"  |  "}
      <Link to="/about">About</Link>
      {"  |  "}
      <a href="http://github.com/munson/bart-app-sfw">View on GitHub</a>{" "}
      <i className="fab fa-github-square" />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    trainCount: state.trainReducer.trainCount,
    advisoryList: state.trainReducer.advisoryList,
    elevatorList: state.trainReducer.elevatorList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCarCount: () => {
      dispatch(Actions.getCarCount());
    },
    getAdvisoryList: () => {
      dispatch(Actions.getAdvisoryList());
    },
    getElevatorStatus: () => {
      dispatch(Actions.getElevatorStatus());
    }
  };
};

export default (Root = connect(
  mapStateToProps,
  mapDispatchToProps
)(Root));
