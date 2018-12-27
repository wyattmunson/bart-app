import React from "react";

export default class StationInfo extends React.Component {
  render() {
    const { stationInfo } = this.props;
    return (
      <div>
        <h1>{stationInfo.name}</h1>
        <h6 className="greyText">
          {generateGoogleLink(
            stationInfo.gtfs_latitude,
            stationInfo.gtfs_longitude,
            stationInfo.address
          )}{" "}
          | {stationInfo.city}
        </h6>
      </div>
    );
  }
}

const generateGoogleLink = (lat, long, addr) => {
  return (
    <a className="greyText" href={`https://maps.google.com/?ll=${lat},${long}`}>
      {addr}
    </a>
  );
};
