const requestTypes = ["ABORT", "FAILURE", "SUCCESS", "REQUEST"];

function createRequestTypes(base) {
  let res = {};
  requestTypes.forEach(type => (res[type] = `${base}_${type}`));
  return res;
}

// API ACTIONS
export const GET_CARS = createRequestTypes("GET_CARS");
export const GET_ADVISORIES = createRequestTypes("GET_ADVISORIES");
export const GET_ELEVATORS = createRequestTypes("GET_ELEVATORS");
export const GET_STATION_LIST = createRequestTypes("GET_STATION_LIST");
export const GET_STATION_INFO = createRequestTypes("GET_STATION_INFO");
export const GET_DEPARTURE_ESTIMATES = createRequestTypes(
  "GET_DEPARTURE_ESTIMATES"
);
export const GET_STATION_ACCESS = createRequestTypes("GET_STATION_ACCESS");

// APP ACTIONS
export const CHANGE_TAB_INDEX = "CHANGE_TAB_INDEX";
