import * as types from "./ActionTypes";
import * as ApiEndpoints from "./ApiEndpoints";
import axios from "axios";

export function getCarCount() {
  return dispatch => {
    dispatch({ type: types.GET_CARS.REQUEST });
    axios
      .get(ApiEndpoints.getCars)
      .then(function(response) {
        dispatch({ type: types.GET_CARS.SUCCESS, payload: response.data.root });
      })
      .catch(function(error) {
        dispatch({ type: types.GET_CARS.FAILURE, payload: error });
      });
  };
}

export function getAdvisoryList() {
  return dispatch => {
    dispatch({ type: types.GET_ADVISORIES.REQUEST });
    axios
      .get(ApiEndpoints.getAdvisories)
      .then(function(response) {
        dispatch({
          type: types.GET_ADVISORIES.SUCCESS,
          payload: response.data.root.bsa
        });
      })
      .catch(function(error) {
        dispatch({ type: types.GET_ADVISORIES.FAILURE, payload: error });
      });
  };
}

export function getElevatorStatus() {
  return dispatch => {
    dispatch({ type: types.GET_ELEVATORS.REQUEST });
    axios
      .get(ApiEndpoints.getElevators)
      .then(function(response) {
        dispatch({
          type: types.GET_ELEVATORS.SUCCESS,
          payload: response.data.root.bsa
        });
      })
      .catch(function(error) {
        dispatch({ type: types.GET_ELEVATORS.FAILURE, payload: error });
      });
  };
}

export function getStationList() {
  return dispatch => {
    dispatch({ type: types.GET_STATION_LIST.REQUEST });
    axios
      .get(ApiEndpoints.getStationList)
      .then(function(response) {
        dispatch({
          type: types.GET_STATION_LIST.SUCCESS,
          payload: response.data.root.stations.station
        });
      })
      .catch(function(error) {
        dispatch({ type: types.GET_STATION_LIST.FAILURE, paylaod: error });
      });
  };
}

export function getStationInfo(input) {
  return dispatch => {
    dispatch({ type: types.GET_STATION_INFO.REQUEST });
    let endpoint = ApiEndpoints.getStationInfo + input;
    axios
      .get(endpoint)
      .then(function(response) {
        dispatch({
          type: types.GET_STATION_INFO.SUCCESS,
          payload: response.data.root.stations.station
        });
      })
      .catch(function(error) {
        dispatch({ type: types.GET_STATION_INFO.FAILURE, payload: error });
      });
  };
}

export function getDepartureEstimates(input) {
  return dispatch => {
    dispatch({ type: types.GET_DEPARTURE_ESTIMATES.REQUEST });
    let endpoint = ApiEndpoints.getDepartureEstimates + input;
    axios
      .get(endpoint)
      .then(function(response) {
        dispatch({
          type: types.GET_DEPARTURE_ESTIMATES.SUCCESS,
          payload: response.data.root.station[0]
        });
      })
      .catch(function(error) {
        dispatch({
          type: types.GET_DEPARTURE_ESTIMATES.FAILURE,
          payload: error
        });
      });
  };
}

export function getStationAccess(input) {
  return dispatch => {
    dispatch({ type: types.GET_STATION_ACCESS.REQUEST });
    axios
      .get(ApiEndpoints.getStationAccess + input)
      .then(function(response) {
        dispatch({
          type: types.GET_STATION_ACCESS.SUCCESS,
          payload: response.data.root.stations.station
        });
      })
      .catch(function(error) {
        dispatch({ type: types.GET_STATION_ACCESS.FAILURE, payload: error });
      });
  };
}
