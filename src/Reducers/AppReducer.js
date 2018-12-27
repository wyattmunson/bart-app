const defaultState = {
  tabIndex: null
};

// EXAMPLE TO HANDLE APP ACTIONS
export const appReducer = (state = defaultState, action) => {
  switch (action.payload) {
    case "CHANGE_TAB_INDEX": {
      return {
        ...state,
        tabIndex: action.payload
      };
    }
    // LAST CASE, RETURN STATE IF NO MATCH
    default:
      return state;
  }
};
