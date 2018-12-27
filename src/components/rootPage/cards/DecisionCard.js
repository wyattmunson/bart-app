import React from "react";
import { connect } from "react-redux";

class DecisionCard extends React.Component {
  render() {
    const { advisoryList, elevatorList } = this.props;

    // KILL RENDER IF DATA NOT LOADED YET
    if (advisoryList === null) {
      return null;
    }

    return (
      <div className="card glanceCards">
        <div className="card-body">
          <h3 className="card-title">
            <b>{calculateFuckedness(advisoryList, elevatorList)}</b>
          </h3>
          <h6 className="card-subtitle mb-2 text-muted">
            {generateSubDdescription()}
          </h6>
          <p className="card-text">
            The system is running a usual number of cars.{" "}
            {advisoryList[0].description["#cdata-section"]}{" "}
            {elevatorList[0].description["#cdata-section"]} Suffice it to say
            the situation is: {calculateFuckedness(advisoryList, elevatorList)}
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    advisoryList: state.trainReducer.advisoryList,
    elevatorList: state.trainReducer.elevatorList
  };
};

export default (DecisionCard = connect(
  mapStateToProps,
  null
)(DecisionCard));

const calculateFuckedness = (advisoryList, elevatorList) => {
  let fuckedLevel = 0;

  // ADVISORY LIST
  if (advisoryList[0].description["#cdata-section"] === "No delays reported.") {
    fuckedLevel = fuckedLevel + 0;
  } else {
    fuckedLevel = fuckedLevel + 1;
  }

  // ELEVATOR LIST
  if (
    elevatorList[0].description["#cdata-section"] ===
    "Attention passengers: All elevators are in service. Thank You."
  ) {
    fuckedLevel = fuckedLevel + 0;
  } else {
    fuckedLevel = fuckedLevel + 1;
  }

  if (fuckedLevel === 0) {
    return "Not screwed.";
  } else if (fuckedLevel === 1) {
    return "Slightly screwed.";
  } else if (fuckedLevel === 2) {
    return "Definitely screwed.";
  }
};

const generateSubDdescription = input => {
  if (input === "Not fucked.") {
    return "BART is not screwed right now.";
  } else if (input === "Slightly fucked.") {
    return "BART is slightly screwed right now.";
  }
};
