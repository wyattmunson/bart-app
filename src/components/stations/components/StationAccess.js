import React from "react";

export default class StationAccess extends React.Component {
  render() {
    const { stationAccess } = this.props;
    return (
      <div className="contentDiv">
        <h3>Station Access</h3>
        <h4>Exit Information</h4>
        <div
          dangerouslySetInnerHTML={{
            __html: stationAccess.exiting["#cdata-section"]
          }}
        />
        <h4>Parking</h4>
        <div
          dangerouslySetInnerHTML={{
            __html: stationAccess.parking["#cdata-section"]
          }}
        />
        <h4>Lockers</h4>
        <div
          dangerouslySetInnerHTML={{
            __html: stationAccess.lockers["#cdata-section"]
          }}
        />
      </div>
    );
  }
}
