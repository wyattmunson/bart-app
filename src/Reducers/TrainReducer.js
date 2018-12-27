const defaultState = {
  fetching: false,
  trainCount: null,
  advisoryList: null,
  elevatorList: null,
  stationList: null,
  stationInfo: null,
  departureEstimates: null,
  stationAccess: null
};
// EXAMPLE TO HANDLE API CALL AND RESPONSE
export const trainReducer = (state = defaultState, action) => {
  switch (action.type) {
    // GET CARS REQEST, SUCCESS, FAILURE
    case "GET_CARS_REQUEST": {
      return {
        ...state,
        fetching: true
      };
    }
    case "GET_CARS_SUCCESS": {
      return {
        ...state,
        fetching: false,
        trainCount: action.payload
      };
    }
    case "GET_CARS_FAILURE": {
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    }

    // GET ADVISORIES
    case "GET_ADVISORIES_REQUEST": {
      return {
        ...state,
        fetching: true
      };
    }
    case "GET_ADVISORIES_SUCCESS": {
      return {
        ...state,
        fetching: false,
        advisoryList: action.payload
      };
    }
    case "GET_ADVISORIES_FAILURE": {
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    }

    // GET ELEVATOR STATUS
    case "GET_ELEVATORS_REQUEST": {
      return {
        ...state,
        fetching: true
      };
    }
    case "GET_ELEVATORS_SUCCESS": {
      return {
        ...state,
        fetching: false,
        elevatorList: action.payload
      };
    }
    case "GET_ELEVATORS_FAILURE": {
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    }

    // GET STATION LIST
    case "GET_STATION_LIST_REQUEST": {
      return {
        ...state,
        fetching: true
      };
    }
    case "GET_STATION_LIST_SUCCESS": {
      return {
        ...state,
        fetching: false,
        stationList: action.payload
      };
    }
    case "GET_STATION_LIST_FAILURE": {
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    }

    // GET STATION INFO
    case "GET_STATION_INFO_REQUEST": {
      return {
        ...state,
        fetching: true
      };
    }
    case "GET_STATION_INFO_SUCCESS": {
      return {
        ...state,
        fetching: false,
        stationInfo: action.payload
      };
    }
    case "GET_STATION_INFO_FAILURE": {
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    }

    // GET DEPATURE ESTIMATES
    case "GET_DEPARTURE_ESTIMATES_REQUEST": {
      return {
        ...state,
        fetching: true
      };
    }
    case "GET_DEPARTURE_ESTIMATES_SUCCESS": {
      return {
        ...state,
        fetching: false,
        departureEstimates: action.payload
      };
    }
    case "GET_DEPARTURE_ESTIMATES_FAILURE": {
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    }

    // GET STATION ACCESS
    case "GET_STATION_ACCESS_REQUEST": {
      return {
        ...state,
        fetching: true
      };
    }
    case "GET_STATION_ACCESS_SUCCESS": {
      return {
        ...state,
        fetching: false,
        stationAccess: action.payload
      };
    }
    case "GET_STATION_ACCESS_FAILURE": {
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    }

    // LAST CASE, RETURN STATE IF NO MATCH
    default:
      return state;
  }
};
